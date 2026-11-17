/**
 * CASE STUDIES
 * --------------------------------------------------------------
 * Each entry creates a card on /case-studies and a page at
 * /case-studies/<slug>.
 *
 * Client names are kept anonymous. Only add a name, logo or quote
 * with the client's written permission.
 *
 * TO ADD A CASE STUDY: copy the TEMPLATE at the bottom of this file,
 * paste it into the `caseStudies` array, fill it in, and remove the
 * comment markers.
 */

export const caseStudies = [
  {
    slug: "dubai-real-estate-meta-leads",
    title: "50 leads and 6 closed sales in one month from a Meta lead campaign",
    client: "Real estate agency",
    location: "Dubai, UAE",
    industry: "real-estate", // slug from industries.js
    services: ["digital-marketing-lead-generation", "lead-management-appointment-setting"],
    summary:
      "A Meta lead generation campaign running at AED 200 per day generated 50 leads in its first month. 15 were qualified and 6 became closed sales.",
    challenge:
      "The agency wanted a dependable source of new buyer leads from paid social, with a clear way to tell serious buyers apart from casual browsers.",
    approach: [
      "Set up a Meta lead campaign with a daily budget of AED 200",
      "Built lead forms designed to capture the details needed to qualify each lead",
      "Followed up with leads and qualified them against agreed criteria",
      "Passed qualified leads to the sales team and tracked them through to close",
      "Reported on spend, leads and outcomes throughout the month",
    ],
    results: [
      { value: "50", label: "Leads in one month" },
      { value: "15", label: "Qualified leads" },
      { value: "6", label: "Closed sales" },
      { value: "AED 200", label: "Daily ad budget" },
    ],
    quote: null, // { text: "...", author: "Name, Role" } with permission only
  },
  {
    slug: "nyc-wedding-studio-back-office",
    title: "A full back office managed for a New York City wedding studio",
    client: "Wedding photography studio",
    location: "New York City, USA",
    industry: "wedding-creative-studios",
    services: [
      "lead-management-appointment-setting",
      "crm-setup-automation",
      "social-media-management",
      "virtual-executive-assistants",
    ],
    summary:
      "We took over the studio's back office end to end: inquiries, follow-ups, booking calls, gallery delivery, CRM management and social media across four platforms.",
    challenge:
      "Running a busy wedding studio means shooting, editing and meeting couples while the inbox keeps filling up. The studio needed one team to handle the whole client journey behind the scenes.",
    approach: [
      "Replied to new inquiries and ran consistent follow-ups",
      "Booked consultation calls directly into the studio's calendar",
      "Managed the CRM so every couple had a clear status and next step",
      "Handled gallery delivery and related client communication",
      "Planned and managed social media across four platforms",
    ],
    results: [
      { value: "End to end", label: "Client journey managed" },
      { value: "4", label: "Social platforms managed" },
      { value: "1", label: "Team handling the back office" },
    ],
    quote: null,
  },

  /* ---------------- TEMPLATE: copy from here ----------------
  {
    slug: "short-url-friendly-name",
    title: "Headline result in one sentence",
    client: "Type of business (keep anonymous unless approved)",
    location: "City, Country",
    industry: "real-estate", // slug from industries.js
    services: ["virtual-executive-assistants"], // slugs from services.js
    summary: "Two sentences: what we did and the outcome.",
    challenge: "What the client was struggling with before.",
    approach: [
      "Step one",
      "Step two",
    ],
    results: [
      { value: "00", label: "What the number measures" },
    ],
    quote: null, // { text: "Quote text", author: "Name, Role, Company" }
  },
  ---------------- TEMPLATE: copy to here ---------------- */
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
