/**
 * HOME PAGE COPY
 * --------------------------------------------------------------
 * Services, industries, process steps and testimonials are pulled
 * from their own data files. This file holds the copy that only
 * appears on the home page.
 */

export const hero = {
  eyebrow: "Virtual assistants and digital services, managed for you",
  title: "Get your time back. We will handle the rest.",
  text: "Trained, vetted virtual assistants and specialists, backed by a team that manages onboarding, SOPs, quality and weekly reporting. You get the support. We make sure it works.",
  secondaryCta: { label: "Explore our services", href: "/services" },
  trustLine: "Supporting international clients from Nairobi, Kenya",
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

export const servicesIntro = {
  eyebrow: "What we do",
  title: "One agency for the work behind your business",
  text: "Start with one service or combine several. Every client gets a dedicated assistant plus our team behind them.",
};

export const industriesIntro = {
  eyebrow: "Who we help",
  title: "Support built around your industry",
  text: "We know the tools, the busy seasons and the clients you serve.",
};

/**
 * RESULTS HIGHLIGHTS
 * Only use real, verifiable numbers here. These come from the
 * case studies and founder background.
 */
export const results = {
  eyebrow: "Results",
  title: "Real work, real outcomes",
  items: [
    { value: "50", label: "Leads in one month for a Dubai real estate client", href: "/case-studies/dubai-real-estate-meta-leads" },
    { value: "6", label: "Closed sales from a single month of Meta ads", href: "/case-studies/dubai-real-estate-meta-leads" },
    { value: "4", label: "Social platforms managed for a New York wedding studio", href: "/case-studies/nyc-wedding-studio-back-office" },
    { value: "3+", label: "Years supporting international clients", href: "/about" },
  ],
};

export const testimonialsIntro = {
  eyebrow: "Client words",
  title: "What our clients say",
};

export const finalCta = {
  title: "Ready to hand it off?",
  text: "Book a free discovery call. We will learn about your business, show you what to delegate first and recommend the right support.",
};
