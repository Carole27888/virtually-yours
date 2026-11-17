/**
 * CONTACT PAGE
 * Form endpoint and Calendly link live in site.js.
 */

export const contactIntro = {
  eyebrow: "Contact",
  title: "Let's talk about what you need",
  text: "We reply within 24 hours on business days.",
};

export const contactOptions = {
  budgets: [
    "Under $550 per month",
    "$550 to $1,000 per month",
    "$1,000 to $1,500 per month",
    "$1,500 or more per month",
    "Not sure yet",
  ],
  // Service names are pulled from services.js. These are extra options.
  extraServices: ["Custom team", "Not sure yet"],
};

export const bookingSection = {
  title: "Book your free discovery call",
  text: "Pick a time that suits you. 30 minutes, no pressure, no obligation.",
  // Shown instead of `text` while the Calendly link in site.js is not set.
  textWithoutCalendly: "Tell us what you need and we'll be in touch.",
};
