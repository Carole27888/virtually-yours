/**
 * INDUSTRIES
 * --------------------------------------------------------------
 * Each entry becomes a section on /industries (linkable with
 * /industries#<slug>) and a card on the home page.
 * `services` lists service slugs from services.js.
 */

export const industries = [
  {
    slug: "wedding-creative-studios",
    name: "Wedding Photographers & Creative Studios",
    shortName: "Creative Studios",
    icon: "Camera",
    summary:
      "Inquiries answered fast, clients guided smoothly from first email to final gallery.",
    challenges: [
      "Inquiries pile up during busy shoot and editing seasons",
      "Couples book whoever replies first",
      "Contracts, questionnaires and gallery delivery take hours each week",
      "Social media goes quiet when you are behind the camera",
    ],
    howWeHelp: [
      "Same-day inquiry replies and structured follow-ups",
      "Booking consultation calls straight into your calendar",
      "Client workflows in your CRM, from contract to final gallery",
      "Gallery delivery and client communication",
      "Social media content and scheduling across your platforms",
    ],
    services: [
      "lead-management-appointment-setting",
      "social-media-management",
      "crm-setup-automation",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate Agents & Brokerages",
    shortName: "Real Estate",
    icon: "Building2",
    summary:
      "A steady flow of qualified leads, with follow-up that never drops the ball.",
    challenges: [
      "Leads from ads and portals go cold before anyone calls",
      "Agents spend hours on admin instead of showings",
      "Listings, CRM records and marketing are hard to keep up to date",
      "Ad spend is hard to connect to real results",
    ],
    howWeHelp: [
      "Meta lead campaigns with clear, weekly reporting",
      "Fast lead response and qualification",
      "Booking viewings and calls for your agents",
      "CRM management and pipeline updates",
      "Listing and social media support",
    ],
    services: [
      "digital-marketing-lead-generation",
      "lead-management-appointment-setting",
      "crm-setup-automation",
    ],
  },
  {
    slug: "coaches-service-businesses",
    name: "Coaches & Service Businesses",
    shortName: "Coaches & Services",
    icon: "Users",
    summary:
      "More discovery calls on your calendar and far less admin between sessions.",
    challenges: [
      "Every hour on admin is an hour not spent with clients",
      "Discovery calls are booked by hand over long email threads",
      "Content and newsletters get pushed back week after week",
      "Onboarding new clients is inconsistent",
    ],
    howWeHelp: [
      "Inbox and calendar management",
      "Lead follow-up and discovery call booking",
      "Automated client onboarding in your CRM",
      "Social media and newsletter support",
      "Invoicing and client admin",
    ],
    services: [
      "virtual-executive-assistants",
      "lead-management-appointment-setting",
      "social-media-management",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce Stores",
    shortName: "E-commerce",
    icon: "ShoppingCart",
    summary:
      "Listings, orders and customer service handled, so you can focus on growth.",
    challenges: [
      "Customer emails pile up and response times slip",
      "Listing updates across platforms are slow and repetitive",
      "Orders, returns and suppliers need daily attention",
      "Marketing gets squeezed out by operations",
    ],
    howWeHelp: [
      "Shopify, Amazon and eBay listing management",
      "Customer service and returns handling",
      "Order and inventory tracking",
      "Social media and ad campaign support",
      "Supplier communication",
    ],
    services: [
      "ecommerce-support",
      "social-media-management",
      "digital-marketing-lead-generation",
    ],
  },
  {
    slug: "startups-founders",
    name: "Startups & Founders",
    shortName: "Startups",
    icon: "Rocket",
    summary:
      "Executive-level support and the systems to scale, without a big hiring budget.",
    challenges: [
      "Founders are stuck doing admin instead of building",
      "Processes live in people's heads, not in documents",
      "Tools are scattered and nothing talks to each other",
      "Hiring in-house is slow and expensive at an early stage",
    ],
    howWeHelp: [
      "Dedicated executive assistant support",
      "SOPs and process documentation",
      "CRM, automation and tool integrations",
      "Custom dashboards and internal tools",
      "Research, reporting and project coordination",
    ],
    services: [
      "virtual-executive-assistants",
      "crm-setup-automation",
      "websites-systems",
    ],
  },
];
