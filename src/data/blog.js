/**
 * BLOG
 * --------------------------------------------------------------
 * Posts are Markdown files in content/blog/ (one file per post).
 * The file name becomes the web address:
 *   content/blog/how-to-delegate.md  ->  /blog/how-to-delegate
 * See content/blog/_template.md and "Publishing a blog post" in
 * the README. Files starting with "_" are ignored.
 *
 * A post is only shown once its `date` has arrived and it is not
 * marked `draft: true`.
 */
import { site } from "./site.js";
import { parseBlocks, parseFrontmatter, plainText } from "../lib/markdown.js";

/** Google gives no minimum, but posts under this many words rarely rank. The build warns below it. */
export const MIN_WORDS = 600;

export const blogIntro = {
  eyebrow: "Blog",
  title: "Practical guides for busy business owners",
  text: "New posts every week on delegation, systems and growing your business without burning out.",
};

/** Posts shown per page before "Load more". */
export const POSTS_PER_PAGE = 9;

const WORDS_PER_MINUTE = 220;
const todayIso = () => new Date().toISOString().slice(0, 10);

/** Builds one post from its file name and raw Markdown. */
export function parsePost(fileName, raw) {
  const slug = fileName.split("/").pop().replace(/\.md$/, "");
  const { data, body } = parseFrontmatter(raw);
  const words = plainText(body).split(" ").filter(Boolean).length;
  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    excerpt: data.excerpt || "",
    date: String(data.date || ""),
    author: data.author || site.founder?.name || "",
    category: data.category || "General",
    draft: data.draft === true,
    image: data.image || "",
    imageSmall: data.imageSmall || data.image || "",
    imageAlt: data.imageAlt || "",
    imageCredit: data.imageCredit || "",
    words,
    readingTime: `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`,
    body: parseBlocks(body),
  };
}

/** Published posts, newest first. `files` maps file paths to raw Markdown. */
export function buildPosts(files, today = todayIso()) {
  return Object.entries(files)
    .filter(([path]) => !path.split("/").pop().startsWith("_"))
    .map(([path, raw]) => parsePost(path, raw))
    .filter((p) => !p.draft && /^\d{4}-\d{2}-\d{2}$/.test(p.date) && p.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

// Vite bundles the Markdown files into the site. The build script
// (Node) has no import.meta.glob, so it reads the files itself and
// calls buildPosts directly.
let files = {};
try {
  files = import.meta.glob("../../content/blog/*.md", { query: "?raw", import: "default", eager: true });
} catch {
  files = {};
}

export const posts = buildPosts(files);

export const getPost = (slug) => posts.find((p) => p.slug === slug);

/** Categories in use, most posts first. */
export const categories = (list = posts) => {
  const counts = new Map();
  for (const p of list) counts.set(p.category, (counts.get(p.category) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([name]) => name);
};
