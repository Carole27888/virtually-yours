/**
 * SEO helpers shared by the app (components/Seo.jsx) and the build
 * step (scripts/postbuild.mjs), so the browser and the prerendered
 * HTML always agree. Plain JS with explicit .js imports so Node can
 * load it too.
 */

import { AGENCY_NAME, site } from "../data/site.js";
import { pageSeo } from "../data/seo.js";
import { services } from "../data/services.js";
import { caseStudies } from "../data/caseStudies.js";
import { posts } from "../data/blog.js";

export const staticRoutes = {
  home: "/",
  services: "/services",
  industries: "/industries",
  howItWorks: "/how-it-works",
  caseStudies: "/case-studies",
  pricing: "/pricing",
  about: "/about",
  careers: "/careers",
  blog: "/blog",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
};

export const formatTitle = ({ title, fullTitle }) =>
  fullTitle ? title : `${title} | ${AGENCY_NAME}`;

export const absoluteUrl = (path = "/") =>
  site.url.replace(/\/$/, "") + (path === "/" ? "/" : path);

export const pageMeta = (key) => ({
  ...pageSeo[key],
  path: staticRoutes[key],
});

export const serviceMeta = (s) => ({
  title: s.title,
  description: s.summary,
  path: `/services/${s.slug}`,
});

export const caseStudyMeta = (c) => ({
  title: `Case Study: ${c.client}, ${c.location}`,
  description: c.summary,
  path: `/case-studies/${c.slug}`,
  type: "article",
});

export const postMeta = (p) => ({
  title: p.title,
  description: p.excerpt,
  path: `/blog/${p.slug}`,
  type: "article",
});

/** Every indexable route with its SEO data. Used for prerendering and sitemap.xml. */
export const allRoutes = () => [
  ...Object.keys(staticRoutes).map(pageMeta),
  ...services.map(serviceMeta),
  ...caseStudies.map(caseStudyMeta),
  ...posts.map(postMeta),
];

/** The resolved tag values for one route. */
export const resolveMeta = (meta) => {
  const title = formatTitle(meta);
  return {
    title,
    description: meta.description,
    url: absoluteUrl(meta.path),
    image: absoluteUrl(meta.image || site.ogImage),
    type: meta.type || "website",
    siteName: AGENCY_NAME,
    noindex: Boolean(meta.noindex),
  };
};
