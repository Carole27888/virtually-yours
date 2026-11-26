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

export const AGENCY_NAME = "Virtually Handled Co.";

export const site = {
  name: AGENCY_NAME,
  tagline: "Virtual assistants and digital services, managed for you",
  description: `${AGENCY_NAME} is a full-service virtual assistant and digital services agency. Trained, vetted and managed VAs and specialists for business owners who want their time back.`,

  // Your logo, shown as-is in the header and footer and used as the favicon.
  // Set showName to true if the image is a symbol only (no agency name in it).
  logo: {
    src: "/logo.png",
    showName: true,
  },

  // Your live domain, no trailing slash. Used for canonical URLs, Open Graph and sitemap.xml.
  url: "https://www.virtuallyhandledco.com",

  email: "info@virtuallyhandledco.com",
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
    number: "254115733862",
    display: "+254 115 733 862",
    message: `Hi ${AGENCY_NAME}, I'd like to know more about your services.`,
  },

  // Calendly: paste your full scheduling link, e.g. https://calendly.com/your-name/discovery-call
  calendlyUrl: "https://calendly.com/virtuallyhandledco/discovery-call",

  // Social media. Paste the full link to each profile, e.g. https://www.instagram.com/yourname
  // Icons still set to a [PLACEHOLDER] show dimmed and are not clickable.
  // Set a link to null to remove that icon completely.
  socials: {
    instagram: "[INSTAGRAM]",
    facebook: "[FACEBOOK]",
    linkedin: "[LINKEDIN]",
    tiktok: "[TIKTOK]",
    x: "[X]",
  },

  // Formspree endpoints. Create two forms at https://formspree.io and paste the URLs here.
  forms: {
    contact: "https://formspree.io/f/mjywrdzl",
    // Not used while careersGoogleForm (below) is set. Kept as a fallback.
    careers: "https://formspree.io/f/[CAREERS_FORM_ID]",
    // CV file uploads need a paid Formspree plan. While this is false, the
    // careers form asks for a link to the CV (Google Drive, Dropbox) instead.
    allowFileUploads: false,
    // Job applications: paste your Google Form link here (the "Send" link, ending in /viewform).
    // While this is a [PLACEHOLDER], the Careers page uses the Formspree form above instead.
    careersGoogleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdJ-UHfLihwc9WnhuolDbHHD0cMxBIvEjwSXTBSLVArJ9rxHA/viewform",
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
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
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
