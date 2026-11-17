/**
 * SITE SETTINGS
 * --------------------------------------------------------------
 * Change the agency name here and it updates everywhere:
 * logo, page titles, meta tags, footer, legal pages and copy.
 *
 * Anything in [SQUARE BRACKETS] is a placeholder. The site detects
 * bracketed values and renders them as safe, non-clickable
 * placeholders until you replace them.
 */

export const AGENCY_NAME = "Virtually Yours";

export const site = {
  name: AGENCY_NAME,
  tagline: "Virtual assistants and digital services, managed for you",
  description: `${AGENCY_NAME} is a full-service virtual assistant and digital services agency. Trained, vetted and managed VAs and specialists for business owners who want their time back.`,

  // Your live domain, no trailing slash. Used for canonical URLs, Open Graph and sitemap.xml.
  url: "https://www.example.com",

  email: "cmutemi27@gmail.com",
  location: "Nairobi, Kenya",
  serviceArea: "Serving clients worldwide",
  hours: "Monday to Friday, covering US and UK business hours. Weekends if needed.",

  founder: {
    name: "Carole Mutemi",
    title: "Founder",
  },

  // WhatsApp chat bubble (shown on every page).
  // number: international format, digits only (no +, spaces or dashes).
  // Set number to "" to hide the bubble.
  whatsapp: {
    number: "254795052260",
    display: "+254 795 052 260",
    message: `Hi ${AGENCY_NAME}, I'd like to know more about your services.`,
  },

  // Calendly: paste your full scheduling link, e.g. https://calendly.com/your-name/discovery-call
  calendlyUrl: "[CALENDLY LINK]",

  socials: {
    linkedin: "https://www.linkedin.com/in/caroline-mutemi-70b0422b2",
    instagram: "[INSTAGRAM]",
    facebook: "[FACEBOOK]",
  },

  // Formspree endpoints. Create two forms at https://formspree.io and paste the URLs here.
  forms: {
    contact: "https://formspree.io/f/[CONTACT_FORM_ID]",
    careers: "https://formspree.io/f/[CAREERS_FORM_ID]",
  },

  // The main call to action used on every page.
  cta: {
    label: "Book a free discovery call",
    href: "/contact#book",
    note: "30 minutes. No pressure, no obligation.",
  },

  // Default social share image (1200 x 630) in /public.
  ogImage: "/og-image.png",

  /**
   * Placeholder content (testimonials, team members) is flagged with
   * `isPlaceholder: true` in the data files. While this is true, those
   * items show with a visible "Placeholder" label. Set to false before
   * launch to hide any placeholder items that are still left.
   */
  showPlaceholders: false,
};

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

/** Link that opens a WhatsApp chat with the greeting pre-filled. */
export const whatsappUrl = () =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

/** True if a value is still an unreplaced [PLACEHOLDER]. */
export const isPlaceholder = (value) =>
  typeof value === "string" && /\[[^\]]+\]/.test(value);
