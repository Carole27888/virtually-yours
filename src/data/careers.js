/**
 * CAREERS PAGE
 * --------------------------------------------------------------
 * Roles, requirements, benefits and the options shown in the
 * application form. Review the benefits list so it matches what
 * you actually offer.
 */

import { AGENCY_NAME } from "./site.js";

export const careersIntro = {
  eyebrow: "Join our team",
  title: "Build a remote career with clients around the world",
  text: `${AGENCY_NAME} is growing a team of skilled, reliable virtual assistants and specialists. If you take pride in your work and love keeping things organised, we would like to hear from you.`,
};

export const roles = [
  {
    title: "Virtual Assistant",
    type: "Part-time or full-time",
    location: "Remote",
    summary: "Inbox, calendar, admin and client communication for busy business owners.",
  },
  {
    title: "Executive Assistant",
    type: "Part-time or full-time",
    location: "Remote",
    summary: "High-level support for founders and executives, including travel, meetings and projects.",
  },
  {
    title: "Lead Management & Appointment Setter",
    type: "Part-time or full-time",
    location: "Remote",
    summary: "Respond to inquiries, follow up with leads and book calls for client sales teams.",
  },
  {
    title: "Social Media Manager",
    type: "Part-time or full-time",
    location: "Remote",
    summary: "Plan, create and schedule content and manage online communities.",
  },
  {
    title: "CRM & Automation Specialist",
    type: "Part-time or full-time",
    location: "Remote",
    summary: "Build and maintain CRMs and workflows in GoHighLevel, HubSpot and Airtable.",
  },
  {
    title: "E-commerce Assistant",
    type: "Part-time or full-time",
    location: "Remote",
    summary: "Manage listings, orders and customer service on Shopify, Amazon and eBay.",
  },
];

export const requirements = [
  "Excellent written and spoken English",
  "Reliable internet connection and a quiet place to work",
  "A laptop or computer that can run modern business tools",
  "Strong organisation and attention to detail",
  "Clear, proactive communication",
  "Experience in a relevant role (requirements vary by position)",
  "Availability to work hours that overlap with client time zones",
];

export const benefits = [
  { icon: "Globe", title: "Flexible remote work", text: "Work from home with international clients." },
  { icon: "GraduationCap", title: "Training and SOPs", text: "Structured onboarding and clear processes so you are set up to succeed." },
];

/** Options used in the application form. */
export const applicationOptions = {
  skills: [
    "Inbox & calendar management",
    "Executive support",
    "Lead follow-up & appointment setting",
    "Social media management",
    "Graphic design (Canva)",
    "Meta ads",
    "GoHighLevel",
    "HubSpot",
    "Airtable",
    "Zapier / Make",
    "Shopify",
    "Amazon / eBay",
    "Customer service",
    "Bookkeeping",
    "Web design",
  ],
  experience: [
    "Less than 1 year",
    "1 to 2 years",
    "3 to 5 years",
    "More than 5 years",
  ],
};
