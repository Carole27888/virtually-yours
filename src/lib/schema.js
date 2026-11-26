/**
 * STRUCTURED DATA (JSON-LD)
 * --------------------------------------------------------------
 * Machine-readable facts about the business for Google and AI tools.
 * Built from the same data files as the visible site, so the two
 * always agree. Added to every prerendered page by scripts/postbuild.mjs.
 * Plain JS with explicit .js imports so Node can load it too.
 */
import { AGENCY_NAME, isPlaceholder, site } from "../data/site.js";
import { services } from "../data/services.js";
import { addOns, plans } from "../data/pricing.js";
import { absoluteUrl } from "./seo.js";

const ORG_ID = absoluteUrl("/#organization");
const SERVICE_ID = absoluteUrl("/#service");
const SITE_ID = absoluteUrl("/#website");

const priceNumber = (price) => String(price).replace(/[^0-9.]/g, "");
const sameAs = () => Object.values(site.socials || {}).filter((url) => url && !isPlaceholder(url));
const [locality, country] = site.location.split(",").map((s) => s.trim());

const address = {
  "@type": "PostalAddress",
  addressLocality: locality,
  addressCountry: country === "Kenya" ? "KE" : country,
};

const areaServed = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  "Worldwide",
];

/** Organization, ProfessionalService and WebSite. Included on every page. */
export function siteGraph() {
  const links = sameAs();
  return [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: AGENCY_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl(site.logo.src),
      image: absoluteUrl(site.ogImage),
      description: site.description,
      email: site.email,
      address,
      founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.title },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: site.email,
          ...(site.whatsapp?.number ? { telephone: `+${site.whatsapp.number}` } : {}),
          areaServed: ["US", "GB"],
          availableLanguage: "English",
        },
      ],
      ...(links.length ? { sameAs: links } : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": SERVICE_ID,
      name: AGENCY_NAME,
      url: absoluteUrl("/"),
      image: absoluteUrl(site.ogImage),
      logo: absoluteUrl(site.logo.src),
      description: `${AGENCY_NAME} is a managed virtual assistant agency based in ${site.location}. It provides remote virtual assistants, executive assistants and digital specialists to small businesses in the United States and United Kingdom. ${site.hours}`,
      email: site.email,
      ...(site.whatsapp?.number ? { telephone: `+${site.whatsapp.number}` } : {}),
      address,
      areaServed,
      parentOrganization: { "@id": ORG_ID },
      priceRange: `From ${plans[0]?.price || ""} per month`,
      knowsAbout: [
        "Virtual assistants",
        "Executive assistants",
        "Lead management",
        "Appointment setting",
        "Social media management",
        "Meta ads",
        "GoHighLevel",
        "HubSpot",
        "Airtable",
        "CRM automation",
        "E-commerce support",
        "Website development",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          ...services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.summary,
              url: absoluteUrl(`/services/${s.slug}`),
            },
          })),
          ...plans.map((p) => ({
            "@type": "Offer",
            name: `${p.name} plan (${p.tagline})`,
            description: [p.description, p.hours].filter(Boolean).join(" "),
            url: absoluteUrl("/pricing"),
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: priceNumber(p.price),
              priceCurrency: "USD",
              unitText: "MONTH",
              ...(p.pricePrefix ? { minPrice: priceNumber(p.price) } : {}),
            },
          })),
          ...addOns.map((a) => ({
            "@type": "Offer",
            name: a.name,
            description: a.description,
            url: absoluteUrl("/pricing"),
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: priceNumber(a.price),
              priceCurrency: "USD",
            },
          })),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      name: AGENCY_NAME,
      url: absoluteUrl("/"),
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
  ];
}

/** FAQPage for a list of { q, a }. */
export const faqPage = (items, path) => ({
  "@type": "FAQPage",
  "@id": absoluteUrl(`${path}#faq`),
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** One service page. */
export const servicePage = (s) => ({
  "@type": "Service",
  "@id": absoluteUrl(`/services/${s.slug}#service`),
  name: s.title,
  description: s.summary,
  url: absoluteUrl(`/services/${s.slug}`),
  provider: { "@id": ORG_ID },
  areaServed,
  serviceType: s.title,
});

/** Wraps nodes in one JSON-LD document. */
export const jsonLd = (nodes) => ({ "@context": "https://schema.org", "@graph": nodes });
