/**
 * FREQUENTLY ASKED QUESTIONS
 * --------------------------------------------------------------
 * Shown on /faq (all questions) and on the home page (`onHome: true`).
 * Also published as FAQPage structured data for Google and AI tools.
 *
 * Writing rule: the first sentence must answer the question fully on
 * its own. Only state facts that are true. Prices and hours are read
 * from pricing.js and site.js so they never go out of date.
 */
import { AGENCY_NAME, site } from "./site.js";
import { addOns, plans, pricingFaqs } from "./pricing.js";

const plan = (name) => plans.find((p) => p.name === name) || {};
const price = (p) => `${p.pricePrefix ? `${p.pricePrefix.toLowerCase()} ` : ""}${p.price} a month`;
const starter = plan("Starter");
const growth = plan("Growth");
const premium = plan("Premium");
const crmSetup = addOns.find((a) => a.name === "CRM setup");

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions business owners ask us",
  text: "Straight answers about what we do, what it costs and how working with us works.",
};

export const faqs = [
  {
    q: "What does a virtual assistant do?",
    a: `A virtual assistant handles the day-to-day tasks that keep a business running, such as email, calendar management, lead follow-up, social media, CRM updates and customer service, working remotely. At ${AGENCY_NAME}, you get a dedicated assistant who learns your business, plus an agency team that trains them, checks the quality of their work and covers for them when they are away.`,
    onHome: true,
  },
  {
    q: `How much does a virtual assistant cost with ${AGENCY_NAME}?`,
    a: `Plans start at ${starter.price} a month for a part-time virtual assistant (${String(starter.hours).toLowerCase()}). A full-time assistant is ${growth.price} a month (${String(growth.hours).toLowerCase()}), and a dedicated executive assistant with systems setup is ${price(premium)}. All prices are in US dollars, billed monthly, with no long-term contract.`,
    onHome: true,
  },
  {
    q: "What hours do your virtual assistants work?",
    // Keep in step with `hours` in site.js.
    a: "Our assistants work Monday to Friday, covering US and UK business hours, and weekend cover is available if needed. We agree your exact coverage and time zone when we scope your plan, so your assistant is available when your business needs them.",
    onHome: true,
  },
  {
    q: "Is my data safe with a virtual assistant?",
    a: "Yes, your data is protected: every assistant signs a confidentiality agreement before seeing any of your information, logins are shared through a password manager rather than by email or chat, and we use two-step verification on the accounts we work in. Your assistant only gets the access their work requires, everything stays in your own accounts, and access is removed the same day if we stop working together.",
    onHome: true,
  },
  {
    q: "How do I get started?",
    a: `Book a free 30-minute discovery call through our website. On the call we learn about your business and what you want to hand off, then we recommend a plan, match you with a trained, vetted assistant and handle onboarding, including documenting how you like things done.`,
    onHome: true,
  },
  {
    q: "Do you work with GoHighLevel?",
    a: `Yes, we set up and manage GoHighLevel, as well as HubSpot and Airtable. Our CRM setup and automation service covers pipelines, workflows, integrations and training, and a one-off CRM setup starts ${crmSetup ? crmSetup.price.replace(/^From/, "from") : "at an agreed price"}. A virtual assistant can then run and maintain the system for you.`,
    onHome: true,
  },
  {
    q: "What services do you offer?",
    a: `${AGENCY_NAME} offers virtual and executive assistants, lead management and appointment setting, social media management, digital marketing and lead generation, CRM setup and automation, e-commerce support, and websites and systems. You can combine services under one managed plan.`,
  },
  {
    q: "Who do you work with?",
    a: "We work with busy business owners, founders and small teams, including creative studios and wedding photographers, real estate professionals, professional services firms, health and wellness businesses, e-commerce stores and startups. If your industry is not listed, we can still help.",
  },
  {
    q: "Where are you based?",
    a: `${AGENCY_NAME} is based in ${site.location} and works remotely with clients worldwide, covering US and UK business hours.`,
  },
  {
    q: "Will I work with the same assistant every day?",
    a: "Yes, you get one dedicated assistant who learns your business. Our team provides oversight, quality checks and continuity support behind them, so your work does not stall if they are unavailable.",
  },
  ...pricingFaqs,
];

/** The shorter set shown on the home page. */
export const homeFaqs = faqs.filter((f) => f.onHome);
