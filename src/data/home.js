/**
 * HOME PAGE COPY
 * --------------------------------------------------------------
 * Services, industries, process steps and testimonials are pulled
 * from their own data files. This file holds the copy that only
 * appears on the home page.
 */

import { AGENCY_NAME } from "./site.js";
import { plans } from "./pricing.js";

export const hero = {
  eyebrow: "Virtual assistants and digital services, managed for you",
  title: "Get your time back. We will handle the rest.",
  text: "Trained, vetted virtual assistants and specialists, backed by a team that manages onboarding, SOPs, quality and weekly reporting. You get the support. We make sure it works.",
  secondaryCta: { label: "Explore our services", href: "/services" },
  trustLine: "Supporting business owners in the US, UK and worldwide",
};

export const painPoints = {
  eyebrow: "Sound familiar?",
  title: "You started a business, not an admin job",
  items: [
    { icon: "Inbox", title: "Your inbox runs your day", text: "Hours disappear into email, scheduling and small tasks that never seem to end." },
    { icon: "Clock", title: "Leads slip through the cracks", text: "Inquiries wait too long for a reply and follow-ups get forgotten in busy weeks." },
    { icon: "Shuffle", title: "Systems held together with tape", text: "Spreadsheets, sticky notes and tools that do not talk to each other." },
    { icon: "UserX", title: "Hiring feels risky", text: "Freelancers come and go, and training someone new takes time you do not have." },
  ],
};

/** Plain summary at the top of /services, so people and AI tools can see what we do at a glance. */
export const servicesSummary = {
  title: "What we do",
  text: `${AGENCY_NAME} provides remote virtual assistants and digital specialists to small businesses in the United States, the United Kingdom and worldwide. We handle admin, inbox and calendar management, lead follow-up and appointment setting, social media, Meta ads, CRM setup and automation in GoHighLevel, HubSpot, Airtable or whichever CRM you use, e-commerce support, and websites. Every client gets a dedicated assistant, managed by our team, with plans from ${plans[0].price} a month.`,
};

export const servicesIntro = {
  eyebrow: "What we do",
  title: "One agency for the work behind your business",
  text: "Start with one service or combine several. Every client gets a dedicated assistant plus our team behind them.",
};

export const industriesIntro = {
  eyebrow: "Who we help",
  title: "Support built around your industry",
  text: "We learn your tools, your busy seasons and the clients you serve, whatever your industry.",
};

export const testimonialsIntro = {
  eyebrow: "Client words",
  title: "What our clients say",
};

export const finalCta = {
  title: "Ready to hand it off?",
  text: "Book a free discovery call. We will learn about your business, show you what to delegate first and recommend the right support.",
};
