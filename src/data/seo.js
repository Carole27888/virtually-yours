/**
 * SEO FOR FIXED PAGES
 * --------------------------------------------------------------
 * Title and meta description for each page. The agency name is
 * appended to titles automatically ("Pricing | Virtually Handled Co.").
 *
 * Service and blog pages build their SEO from their
 * own data entries, so you do not need to add them here.
 */

import { AGENCY_NAME } from "./site.js";

export const pageSeo = {
  home: {
    title: `Virtual Assistant Agency | ${AGENCY_NAME}`,
    description: "Managed virtual assistant agency for small businesses in the US and UK. Remote VAs, executive assistants, lead follow-up, social media and GoHighLevel CRM.",
    fullTitle: true, // do not append the agency name again
  },
  services: {
    title: "Virtual Assistant & Digital Services",
    description: "Remote virtual and executive assistants, lead management, social media, Meta ads, CRM setup and automation, e-commerce support and websites.",
  },
  industries: {
    title: "Virtual Assistants by Industry",
    description: "Remote VA support for small businesses: creative studios, real estate, professional services, health and wellness, e-commerce stores and startups.",
  },
  howItWorks: {
    title: "How Our Managed VA Service Works",
    description: "From a free discovery call to a matched, trained virtual assistant: needs assessment, onboarding with SOPs, then ongoing management and weekly reports.",
  },
  pricing: {
    title: "Virtual Assistant Pricing & Plans",
    description: "Virtual assistant plans from $550 a month part-time, $1,000 full-time, and dedicated executive assistants from $1,500. Billed monthly, no long contract.",
  },
  about: {
    title: "About Our Virtual Assistant Agency",
    description: `${AGENCY_NAME} is a managed virtual assistant agency providing trained, vetted remote VAs and specialists to small businesses in the US and UK.`,
  },
  careers: {
    title: "Remote Virtual Assistant Jobs",
    description: "Join our remote team of virtual assistants, executive assistants and specialists. See open roles, requirements and benefits, and apply online.",
  },
  blog: {
    title: "Delegation & Productivity Blog",
    description: "Practical guides for small business owners on delegation, working with a virtual assistant, systems and growth. New posts every week.",
  },
  faq: {
    title: "Virtual Assistant FAQs",
    description: "What a virtual assistant does, what it costs, the hours we work, how we keep your data safe, GoHighLevel support and how to get started.",
  },
  contact: {
    title: "Book a Free Discovery Call",
    description: "Book a free 30-minute discovery call or send us a message. Tell us what you need and we will recommend the right virtual assistant support.",
  },
  privacy: {
    title: "Privacy Policy",
    description: `How ${AGENCY_NAME} collects, uses and protects your information.`,
  },
  terms: {
    title: "Terms of Service",
    description: `The terms that apply to the ${AGENCY_NAME} website and services.`,
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for could not be found.",
    noindex: true,
  },
};
