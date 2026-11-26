import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { parseFrontmatter } from "./src/lib/markdown.js";

/**
 * Keeps unpublished blog posts out of the site's code. Drafts, posts
 * dated in the future and files starting with "_" are replaced with an
 * empty file, so nobody can read them in the page source early.
 * A scheduled post appears the first time the site is built on or after
 * its date (see .github/workflows/daily-rebuild.yml).
 */
function unpublishedPosts() {
  return {
    name: "unpublished-posts",
    enforce: "pre",
    load(id) {
      const [file, query = ""] = id.split("?");
      if (!/[\\/]content[\\/]blog[\\/][^\\/]+\.md$/.test(file) || !query.includes("raw")) return null;
      const raw = readFileSync(file, "utf8");
      const name = file.split(/[\\/]/).pop();
      const { data } = parseFrontmatter(raw);
      const today = new Date().toISOString().slice(0, 10);
      const published = !name.startsWith("_") && data.draft !== true && String(data.date || "9999") <= today;
      return `export default ${JSON.stringify(published ? raw : "")};`;
    },
  };
}

export default defineConfig({
  plugins: [unpublishedPosts(), react(), tailwindcss()],
});
