/**
 * A small Markdown reader for blog posts. Plain JS so the build
 * script (Node) can use it too.
 *
 * Supports what a blog post needs:
 *   ## Heading, ### Smaller heading
 *   Paragraphs (separated by a blank line)
 *   - Bullet lists, 1. Numbered lists
 *   > Quotes
 *   ![Alt text](/images/blog/photo.jpg)
 *   ---  (a dividing line)
 *   **bold**, *italic*, [link text](https://...)
 */

/** Splits the "---" header from the body and reads its `key: value` lines. */
export function parseFrontmatter(raw) {
  const text = raw.replace(/\r\n/g, "\n").replace(/^﻿/, "");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: text };
  const data = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([A-Za-z_]+)\s*:\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if (/^(["']).*\1$/.test(value)) value = value.slice(1, -1);
    if (value === "true") value = true;
    else if (value === "false") value = false;
    data[m[1]] = value;
  }
  return { data, body: match[2] };
}

/** Turns Markdown text into a list of blocks: { type, text | items | src, alt }. */
export function parseBlocks(body) {
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let para = [];
  let list = null;
  let quote = null;

  const flush = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
    if (list) blocks.push(list);
    if (quote) blocks.push({ type: "quote", text: quote.join(" ") });
    para = [];
    list = null;
    quote = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    let m;
    if (!line) {
      flush();
    } else if ((m = line.match(/^(#{2,3})\s+(.*)$/))) {
      flush();
      blocks.push({ type: m[1].length === 2 ? "h2" : "h3", text: m[2] });
    } else if (/^(-{3,}|\*{3,})$/.test(line)) {
      flush();
      blocks.push({ type: "hr" });
    } else if ((m = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/))) {
      flush();
      blocks.push({ type: "img", alt: m[1], src: m[2] });
    } else if ((m = line.match(/^[-*]\s+(.*)$/))) {
      if (!list || list.type !== "ul") flush();
      list ||= { type: "ul", items: [] };
      list.items.push(m[1]);
    } else if ((m = line.match(/^\d+[.)]\s+(.*)$/))) {
      if (!list || list.type !== "ol") flush();
      list ||= { type: "ol", items: [] };
      list.items.push(m[1]);
    } else if ((m = line.match(/^>\s?(.*)$/))) {
      if (!quote) flush();
      quote ||= [];
      quote.push(m[1]);
    } else if (list && /^\s{2,}/.test(rawLine)) {
      // Indented line continues the previous list item.
      list.items[list.items.length - 1] += ` ${line}`;
    } else {
      if (list || quote) flush();
      para.push(line);
    }
  }
  flush();
  return blocks;
}

/**
 * Splits inline text into pieces: plain strings, and
 * { type: "strong" | "em" | "link", text, href }.
 */
export function parseInline(text) {
  const out = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push({ type: "strong", text: m[1] });
    else if (m[2] !== undefined || m[3] !== undefined) out.push({ type: "em", text: m[2] ?? m[3] });
    else out.push({ type: "link", text: m[4], href: m[5] });
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Plain text with Markdown symbols removed (for word counts and excerpts). */
export const plainText = (body) =>
  body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
