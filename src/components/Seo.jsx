import { useEffect } from "react";
import { resolveMeta } from "../lib/seo.js";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Updates the page title and meta tags on navigation.
 * The same values are written into static HTML at build time
 * (scripts/postbuild.mjs) so link previews work without JavaScript.
 */
export default function Seo(props) {
  const m = resolveMeta(props);

  useEffect(() => {
    document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("name", "robots", m.noindex ? "noindex" : "index, follow");
    setMeta("property", "og:type", m.type);
    setMeta("property", "og:site_name", m.siteName);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    setMeta("property", "og:url", m.url);
    setMeta("property", "og:image", m.image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", m.title);
    setMeta("name", "twitter:description", m.description);
    setMeta("name", "twitter:image", m.image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", m.url);
  }, [m.title, m.description, m.url, m.image, m.type, m.siteName, m.noindex]);

  return null;
}
