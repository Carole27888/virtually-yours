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
    title: `${AGENCY_NAME} | Managed Virtual Assistants & Digital Services`,
    description: "Trained, vetted virtual assistants and specialists, managed for you. Admin, lead management, social media, ads, CRM automation, e-commerce and websites.",
    fullTitle: true, // do not append the agency name again
  },
  services: {
    title: "Services",
    description: "Virtual and executive assistants, lead management, social media, Meta ads, CRM automation, e-commerce support and websites. One managed agency.",
  },
  industries: {
    title: "Industries We Serve",
    description: "Virtual assistant and digital support for creative studios, real estate, professional services, health and wellness, e-commerce, startups and more.",
  },
  howItWorks: {
    title: "How It Works",
    description: "Discovery call, needs assessment, VA matching, onboarding with SOPs, then ongoing management and weekly reports. Here is how we work.",
  },
  pricing: {
    title: "Pricing",
    description: "Simple monthly plans for part-time VAs, full-time VAs and dedicated executive assistants, plus custom teams and add-ons.",
  },
  about: {
    title: "About Us",
    description: `Meet ${AGENCY_NAME}, a managed virtual assistant agency founded in Nairobi, Kenya by executive assistant and developer Carole Mutemi.`,
  },
  careers: {
    title: "Careers",
    description: "Join our remote team of virtual assistants and specialists. See open roles, requirements and benefits, and apply online.",
  },
  blog: {
    title: "Resources",
    description: "Practical guides on delegation, systems and growth for busy business owners.",
  },
  contact: {
    title: "Contact & Book a Call",
    description: "Book a free discovery call or send us a message. Tell us what you need and we will recommend the right support.",
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
  },
};
