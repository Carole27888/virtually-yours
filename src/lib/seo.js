/**
 * SEO helpers shared by the app (components/Seo.jsx) and the build
 * step (scripts/postbuild.mjs), so the browser and the prerendered
 * HTML always agree. Plain JS with explicit .js imports so Node can
 * load it too.
 */

import { AGENCY_NAME, site } from "../data/site.js";
import { pageSeo } from "../data/seo.js";
import { services } from "../data/services.js";
import { posts } from "../data/blog.js";

export const staticRoutes = {
  home: "/",
  services: "/services",
  industries: "/industries",
  howItWorks: "/how-it-works",
  pricing: "/pricing",
  about: "/about",
  careers: "/careers",
  blog: "/blog",
  faq: "/faq",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
};

/** Google shows about 60 characters of a title. */
export const MAX_TITLE = 60;
export const MAX_DESCRIPTION = 155;

/** Adds " | Agency name" unless the result would be too long for Google. */
export const formatTitle = ({ title, fullTitle }) => {
  if (fullTitle) return title;
  const withName = `${title} | ${AGENCY_NAME}`;
  return withName.length <= MAX_TITLE ? withName : title;
};

export const absoluteUrl = (path = "/") =>
  site.url.replace(/\/$/, "") + (path === "/" ? "/" : path);

export const pageMeta = (key) => ({
  ...pageSeo[key],
  path: staticRoutes[key],
});

export const serviceMeta = (s) => ({
  title: s.seoTitle || s.title,
  description: s.seoDescription || s.summary,
  path: `/services/${s.slug}`,
});

export const postMeta = (p) => ({
  title: p.seoTitle || p.title,
  description: p.seoDescription || p.excerpt,
  path: `/blog/${p.slug}`,
  type: "article",
  ...(p.image ? { image: p.image, imageWidth: 1600, imageHeight: 840 } : {}),
});

/**
 * Every indexable route with its SEO data. Used for prerendering and
 * sitemap.xml. The build script passes in the posts it read from disk.
 */
export const allRoutes = (postList = posts) => [
  ...Object.keys(staticRoutes).map(pageMeta),
  ...services.map(serviceMeta),
  ...postList.map(postMeta),
];

/** The resolved tag values for one route. */
export const resolveMeta = (meta) => {
  const title = formatTitle(meta);
  return {
    title,
    description: meta.description,
    url: absoluteUrl(meta.path),
    image: absoluteUrl(meta.image || site.ogImage),
    imageWidth: meta.image ? meta.imageWidth || 1200 : 1200,
    imageHeight: meta.image ? meta.imageHeight || 630 : 630,
    type: meta.type || "website",
    siteName: AGENCY_NAME,
    noindex: Boolean(meta.noindex),
  };
};
