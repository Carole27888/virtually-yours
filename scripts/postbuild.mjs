/**
 * Runs after the two Vite builds (see "build" in package.json).
 *
 * 1. Prerenders every route to finished HTML: the full page content,
 *    plus that page's <title>, description, canonical URL, Open Graph /
 *    Twitter tags and JSON-LD structured data. Search engines, AI tools
 *    and link previews (WhatsApp, Facebook, LinkedIn) can read it all
 *    without running JavaScript. React then takes over in the browser.
 * 2. Writes 404.html for addresses that do not exist.
 * 3. Generates sitemap.xml, robots.txt, rss.xml (blog feed) and
 *    llms.txt (a plain-text summary of the business for AI tools).
 * 4. Warns about titles, descriptions and blog posts that are too long
 *    or too short.
 *
 * Routes come from src/lib/seo.js, so new services and blog posts are
 * picked up automatically.
 */
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { MAX_DESCRIPTION, MAX_TITLE, allRoutes, absoluteUrl, pageMeta, resolveMeta } from "../src/lib/seo.js";
import { faqPage, jsonLd, servicePage, siteGraph } from "../src/lib/schema.js";
import { AGENCY_NAME, site } from "../src/data/site.js";
import { MIN_WORDS, blogIntro, buildPosts } from "../src/data/blog.js";
import { faqs } from "../src/data/faq.js";
import { services } from "../src/data/services.js";
import { industries } from "../src/data/industries.js";
import { addOns, plans, pricingIntro } from "../src/data/pricing.js";
import { processSteps } from "../src/data/process.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const { render } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);

// Blog posts: read the Markdown files (the browser build bundles them).
const blogDir = join(root, "content", "blog");
const files = {};
for (const name of (await readdir(blogDir)).filter((n) => n.endsWith(".md"))) {
  files[name] = await readFile(join(blogDir, name), "utf8");
}
const posts = buildPosts(files);

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON inside <script> must not contain "</script>".
const scriptJson = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

/** Structured data for one route. */
function schemaFor(route) {
  const nodes = siteGraph();
  if (route.path === "/faq") nodes.push(faqPage(faqs, "/faq"));
  const service = services.find((s) => route.path === `/services/${s.slug}`);
  if (service) {
    nodes.push(servicePage(service));
    if (service.faqs?.length) nodes.push(faqPage(service.faqs, route.path));
  }
  return jsonLd(nodes);
}

function headTags(meta, route) {
  const m = resolveMeta(meta);
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${m.noindex ? "noindex" : "index, follow"}" />`,
    ...(m.noindex ? [] : [`<link rel="canonical" href="${esc(m.url)}" />`]),
    `<meta property="og:type" content="${m.type}" />`,
    `<meta property="og:site_name" content="${esc(m.siteName)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${esc(m.url)}" />`,
    `<meta property="og:image" content="${esc(m.image)}" />`,
    `<meta property="og:image:width" content="${m.imageWidth}" />`,
    `<meta property="og:image:height" content="${m.imageHeight}" />`,
    `<meta property="og:image:alt" content="${esc(meta.imageAlt || `${AGENCY_NAME} logo`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(m.image)}" />`,
    ...(route ? [`<script type="application/ld+json">${scriptJson(schemaFor(route))}</script>`] : []),
  ].join("\n    ");
}

const template = await readFile(join(dist, "index.html"), "utf8");
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const ROOT = '<div id="root"></div>';
if (!SEO_BLOCK.test(template)) throw new Error("SEO markers missing from index.html");
if (!template.includes(ROOT)) throw new Error('<div id="root"></div> missing from index.html');

const page = (meta, route, url) =>
  template.replace(SEO_BLOCK, headTags(meta, route)).replace(ROOT, `<div id="root">${render(url)}</div>`);

// 1. Every route.
const routes = allRoutes(posts);
const problems = [];
for (const route of routes) {
  const html = page(route, route, route.path);
  // "/" -> index.html, "/services" -> services.html, "/services/x" -> services/x.html
  // (vercel.json "cleanUrls" serves these without the .html extension)
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await writeFile(join(dist, file), html);

  const m = resolveMeta(route);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (m.title.length > MAX_TITLE) problems.push(`${route.path}: title is ${m.title.length} characters (max ${MAX_TITLE})`);
  if ((m.description || "").length > MAX_DESCRIPTION)
    problems.push(`${route.path}: description is ${m.description.length} characters (max ${MAX_DESCRIPTION})`);
  if (h1s !== 1) problems.push(`${route.path}: has ${h1s} <h1> headings (should be exactly 1)`);
  const noAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;
  if (noAlt) problems.push(`${route.path}: ${noAlt} image(s) without alt text`);
}

// 2. Not found page. Vercel serves 404.html (with a 404 status) for unknown addresses.
await writeFile(join(dist, "404.html"), page(pageMeta("notFound"), null, "/404"));

// 3a. Sitemap.
const today = new Date().toISOString().slice(0, 10);
const lastmod = (path) => posts.find((p) => path === `/blog/${p.slug}`)?.date || today;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => !r.noindex)
  .map((r) => `  <url><loc>${esc(absoluteUrl(r.path))}</loc><lastmod>${lastmod(r.path)}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

// 3b. robots.txt: everything is open to search engines and AI tools.
await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`,
);

// 3c. RSS feed of the latest posts.
const rssDate = (iso) => new Date(`${iso}T08:00:00Z`).toUTCString();
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${esc(`${AGENCY_NAME} Blog`)}</title>
  <link>${esc(absoluteUrl("/blog"))}</link>
  <description>${esc(blogIntro.text)}</description>
  <language>en</language>
  <atom:link href="${esc(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml" />
${posts
  .slice(0, 30)
  .map(
    (p) => `  <item>
    <title>${esc(p.title)}</title>
    <link>${esc(absoluteUrl(`/blog/${p.slug}`))}</link>
    <guid>${esc(absoluteUrl(`/blog/${p.slug}`))}</guid>
    <pubDate>${rssDate(p.date)}</pubDate>
    <category>${esc(p.category)}</category>
    <description>${esc(p.excerpt)}</description>
  </item>`,
  )
  .join("\n")}
</channel>
</rss>
`;
await writeFile(join(dist, "rss.xml"), rss);

// 3d. llms.txt: a plain summary for AI tools (https://llmstxt.org).
const planLine = (p) =>
  `- **${p.name}** (${p.tagline}): ${p.pricePrefix ? `${p.pricePrefix.toLowerCase()} ` : ""}${p.price}${p.period}${p.hours ? `, ${p.hours.toLowerCase()}` : ""}. ${p.description}`;
const llms = `# ${AGENCY_NAME}

> ${AGENCY_NAME} is a managed virtual assistant agency with a fully remote team. It provides trained, vetted remote virtual assistants, executive assistants and digital specialists to busy business owners and small businesses, mainly in the United States and United Kingdom. Each client gets a dedicated assistant, with an agency team behind them for training, quality checks and continuity.

## Key facts

- Website: ${absoluteUrl("/")}
- Fully remote team. Works with clients worldwide, mainly in the US and UK.
- Hours: ${site.hours}
- Founder: ${site.founder.name}
- Email: ${site.email}
${site.whatsapp?.number ? `- WhatsApp: ${site.whatsapp.display}\n` : ""}- Book a free 30-minute discovery call: ${absoluteUrl("/contact#book")}

## Services

${services.map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`).join("\n")}

## Who it serves

${industries.map((i) => `- ${i.name}: ${i.summary}`).join("\n")}
- Other industries are welcome; most services work for any business.

## Pricing

${pricingIntro.currencyNote} ${pricingIntro.text}

${plans.map(planLine).join("\n")}
- **Custom team**: more than one assistant or a mix of specialists, quoted on request.

Add-ons:
${addOns.map((a) => `- ${a.name}: ${a.price}. ${a.description}`).join("\n")}

Full details: ${absoluteUrl("/pricing")}

## How it works

${processSteps.map((s, i) => `${i + 1}. ${s.title}: ${s.summary}`).join("\n")}

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Pages

- [Home](${absoluteUrl("/")})
- [Services](${absoluteUrl("/services")})
- [Industries](${absoluteUrl("/industries")})
- [How it works](${absoluteUrl("/how-it-works")})
- [Pricing](${absoluteUrl("/pricing")})
- [About](${absoluteUrl("/about")})
- [FAQ](${absoluteUrl("/faq")})
- [Blog](${absoluteUrl("/blog")})
- [Careers](${absoluteUrl("/careers")})
- [Contact and booking](${absoluteUrl("/contact")})

## Recent blog posts

${posts.slice(0, 10).map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.excerpt}`).join("\n")}
`;
await writeFile(join(dist, "llms.txt"), llms);

// The server-render bundle is only needed during the build.
await rm(ssrDir, { recursive: true, force: true });

// 4. Warnings.
for (const p of posts.filter((p) => p.words < MIN_WORDS)) {
  problems.push(`blog post "${p.slug}" has ${p.words} words. Aim for 1,000 to 1,500 (at least ${MIN_WORDS}).`);
}
for (const p of posts.filter((p) => !p.excerpt)) {
  problems.push(`blog post "${p.slug}" has no excerpt. Add one for the blog page and Google results.`);
}
for (const msg of problems) console.warn(`Warning: ${msg}`);

console.log(
  `Prerendered ${routes.length} pages and 404.html, with sitemap.xml, robots.txt, rss.xml and llms.txt (${posts.length} blog posts) for ${site.url}`,
);
