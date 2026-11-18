/**
 * PRICING
 * --------------------------------------------------------------
 * Prices are display text, so write them exactly as they should appear.
 * `pricePrefix` (optional) shows a small word such as "From" before the price.
 * `hours` can be null to hide the hours line.
 * `featured: true` highlights one plan as "Most popular".
 */

export const pricingIntro = {
  eyebrow: "Pricing",
  title: "Simple plans with a managed team behind every one",
  text: "Every plan includes a dedicated assistant, onboarding, SOPs, quality checks and weekly reporting. No long setup fees, no surprises.",
  currencyNote: "All prices in USD. Billed monthly.",
};

export const plans = [
  {
    name: "Starter",
    tagline: "Part-time VA",
    price: "$550",
    period: "/month",
    hours: "About 80 hours per month",
    description: "For business owners ready to hand off the admin that slows them down.",
    features: [
      "Dedicated part-time virtual assistant",
      "Inbox, calendar and admin support",
      "Onboarding and SOP setup",
      "Agency oversight and quality checks",
      "Weekly progress report",
      "Email and chat support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Full-time VA",
    price: "$1,000",
    period: "/month",
    hours: "About 160 hours per month",
    description: "For growing businesses that need a dedicated assistant every working day.",
    features: [
      "Everything in Starter",
      "Dedicated full-time virtual assistant",
      "Lead management and follow-ups",
      "Social media or e-commerce support",
      "CRM management",
      "Monthly strategy check-in",
    ],
    featured: true,
  },
  {
    name: "Premium",
    tagline: "Dedicated EA + systems setup",
    pricePrefix: "From",
    price: "$1,500",
    period: "/month",
    hours: null, // scoped on your discovery call
    description: "For founders and executives who want senior support and systems built to scale.",
    features: [
      "Everything in Growth",
      "Dedicated executive assistant",
      "CRM setup and automation included",
      "Custom workflows and integrations",
      "Priority support",
      "Quarterly systems review",
    ],
    featured: false,
  },
];

export const customTeam = {
  title: "Custom team",
  text: "Need more than one assistant, or a mix of specialists across admin, marketing and operations? We will build a managed team around your goals.",
  cta: "Contact us for a quote",
};

export const addOns = [
  {
    name: "Website build",
    price: "From $300",
    description: "A fast, mobile-friendly business website or booking system, built to convert.",
    icon: "MonitorSmartphone",
  },
  {
    name: "CRM setup",
    price: "From $250",
    description: "GoHighLevel, HubSpot or Airtable set up with pipelines, automations and training.",
    icon: "Workflow",
  },
  {
    name: "Ad management",
    price: "From $200/month",
    description: "Meta campaign setup, management and weekly reporting. Ad spend billed separately.",
    icon: "Megaphone",
  },
];

export const pricingFaqs = [
  { q: "Is there a minimum contract?", a: "No long-term contracts. Plans are month to month, and you can cancel anytime with 14 days' written notice." },
  { q: "Can I change plans later?", a: "Yes. You can move up or down as your needs change. We just ask for notice before your next billing cycle." },
  { q: "What if my assistant is sick or on leave?", a: "Our team provides continuity support so your work doesn't stall." },
  { q: "Are ad budgets and software subscriptions included?", a: "No. Ad spend and third-party tools are paid directly by you, so you keep full ownership of your accounts." },
];

/**
 * TIME-BACK CALCULATOR
 * Shown on /pricing. Visitors enter their own numbers, so the
 * results are always theirs. Plans and prices come from `plans` above.
 * `planHours` is the monthly hour limit used to suggest a plan.
 */
export const calculator = {
  eyebrow: "Time-back calculator",
  title: "What is your admin really costing you?",
  text: "Move the sliders to match your week. We will show you what that time is worth and which plan fits.",
  hoursLabel: "Hours a week you spend on tasks you could hand off",
  rateLabel: "What an hour of your time is worth",
  rateHint: "Think about what you earn, or could earn, in an hour of client work.",
  defaults: { hours: 10, rate: 75 },
  planHours: { Starter: 80, Growth: 160 },
  note: "An estimate based on your numbers. We confirm the right plan on your discovery call.",
};
