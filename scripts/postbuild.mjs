/**
 * Runs after `vite build` (see "build" in package.json).
 *
 * 1. Writes an HTML file for every route with that page's own <title>,
 *    description, canonical URL and Open Graph / Twitter tags baked in.
 *    Link previews on LinkedIn, WhatsApp, Facebook and Slack read these
 *    without running JavaScript.
 * 2. Generates dist/sitemap.xml from the content data files.
 * 3. Writes dist/robots.txt pointing at the sitemap.
 *
 * Routes come from src/lib/seo.js, so new services, case studies and
 * blog posts are picked up automatically.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { allRoutes, absoluteUrl, resolveMeta } from "../src/lib/seo.js";
import { site } from "../src/data/site.js";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function headTags(meta) {
  const m = resolveMeta(meta);
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${m.noindex ? "noindex" : "index, follow"}" />`,
    `<link rel="canonical" href="${esc(m.url)}" />`,
    `<meta property="og:type" content="${m.type}" />`,
    `<meta property="og:site_name" content="${esc(m.siteName)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${esc(m.url)}" />`,
    `<meta property="og:image" content="${esc(m.image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(m.image)}" />`,
  ].join("\n    ");
}

const template = await readFile(join(dist, "index.html"), "utf8");
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_BLOCK.test(template)) throw new Error("SEO markers missing from index.html");

const routes = allRoutes();
for (const route of routes) {
  const html = template.replace(SEO_BLOCK, headTags(route));
  // "/" -> index.html, "/services" -> services.html, "/services/x" -> services/x.html
  // (vercel.json "cleanUrls" serves these without the .html extension)
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await writeFile(join(dist, file), html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => !r.noindex)
  .map((r) => `  <url><loc>${esc(absoluteUrl(r.path))}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`,
);

console.log(`Prerendered ${routes.length} pages, sitemap.xml and robots.txt for ${site.url}`);
