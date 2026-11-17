/**
 * SERVICES
 * --------------------------------------------------------------
 * Each entry creates a card on /services and a detail page at
 * /services/<slug>. Add, remove or reorder entries freely.
 *
 * icon: any icon name from https://lucide.dev/icons (PascalCase).
 */

export const services = [
  {
    slug: "virtual-executive-assistants",
    title: "Virtual & Executive Assistants",
    icon: "CalendarCheck",
    summary:
      "Inbox, calendar, admin, travel and executive support from a dedicated assistant who learns how you work.",
    intro:
      "Your time should go to the work only you can do. A dedicated assistant takes the inbox, the calendar and the never-ending admin off your plate, with our team behind them to keep quality high and nothing slipping.",
    included: [
      "Inbox management: triage, replies, filing and follow-up flags",
      "Calendar management: scheduling, rescheduling and time blocking",
      "Travel research, booking and itineraries",
      "Meeting prep, notes and action item tracking",
      "Document formatting, data entry and file organisation",
      "Personal and executive errands that can be handled online",
      "Vendor, client and team communication on your behalf",
    ],
    whoFor: [
      "Founders and CEOs whose inbox runs their day",
      "Busy professionals juggling clients, meetings and travel",
      "Small teams that need admin support without a full-time hire",
    ],
    process: [
      { title: "Map your week", text: "We look at where your hours go and agree which tasks move to your assistant first." },
      { title: "Set up access", text: "Secure access to the tools you use, with clear permissions and boundaries." },
      { title: "Document the way you like it", text: "We write SOPs for recurring tasks so your preferences are followed every time." },
      { title: "Hand over and scale up", text: "Start with a few tasks, then add more as trust and rhythm build." },
    ],
    faqs: [
      { q: "Will I work with the same assistant every day?", a: "Yes. You get a dedicated assistant who learns your business. Our team provides oversight, quality checks and continuity support so your work doesn't stall." },
      { q: "How do you keep my accounts secure?", a: "We use password managers and shared access rather than passing passwords around, follow least-privilege access, and sign confidentiality agreements as standard." },
      { q: "What time zone will my assistant work in?", a: "We match working hours to your business. We already support international clients across different time zones." },
    ],
  },
  {
    slug: "lead-management-appointment-setting",
    title: "Lead Management & Appointment Setting",
    icon: "PhoneCall",
    summary:
      "Fast inquiry replies, consistent follow-ups and booked calls, so warm leads never go cold.",
    intro:
      "Most leads are lost to slow replies and forgotten follow-ups, not to competitors. We respond quickly, follow up consistently and get qualified prospects onto your calendar, so you only show up for the conversations that matter.",
    included: [
      "Responding to new inquiries across email, forms and DMs",
      "Structured follow-up sequences by email, SMS and social DM",
      "Lead qualification using your criteria and scripts",
      "Booking discovery and sales calls directly into your calendar",
      "Reminders to reduce no-shows",
      "CRM updates so every lead has a clear status and next step",
      "Weekly pipeline summary",
    ],
    whoFor: [
      "Wedding and creative studios with a busy inquiry inbox",
      "Real estate agents handling buyer and seller leads",
      "Coaches and consultants who sell through discovery calls",
    ],
    process: [
      { title: "Review your pipeline", text: "We look at where leads come from today and where they drop off." },
      { title: "Write the playbook", text: "Reply templates, follow-up cadence and qualification questions in your voice." },
      { title: "Connect your tools", text: "Calendar, CRM and messaging channels set up so nothing is handled by memory." },
      { title: "Respond, follow up, book", text: "Your assistant works the pipeline daily and reports on it weekly." },
    ],
    faqs: [
      { q: "Will leads know they are talking to an assistant?", a: "That is your choice. Many clients prefer replies sent in their own name using approved templates. Others introduce their assistant as part of the team." },
      { q: "Which channels can you cover?", a: "Email, website forms, Instagram and Facebook DMs, WhatsApp and SMS, depending on the tools you already use." },
      { q: "Do you make cold calls?", a: "Our focus is warm leads: people who have already shown interest. Outreach to new prospects can be scoped on request." },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: "Share2",
    summary:
      "Content calendars, captions, scheduling and community management that keep you visible without eating your week.",
    intro:
      "Showing up consistently on social media builds trust long before a client gets in touch. We plan, write, schedule and engage, so your accounts stay active and on-brand while you focus on running the business.",
    included: [
      "Monthly content calendar aligned to your offers and seasons",
      "Caption writing in your brand voice",
      "Graphic design for posts and stories using your brand kit",
      "Scheduling across Instagram, Facebook, LinkedIn, TikTok and Pinterest",
      "Comment and DM management",
      "Hashtag and keyword research",
      "Monthly performance summary",
    ],
    whoFor: [
      "Creative studios that need a steady stream of portfolio content",
      "Coaches and service businesses building authority",
      "E-commerce brands promoting launches and products",
    ],
    process: [
      { title: "Brand and goals", text: "We learn your voice, audience and what you want social media to achieve." },
      { title: "Plan the month", text: "A content calendar you approve before anything goes live." },
      { title: "Create and schedule", text: "Captions and graphics prepared and scheduled ahead of time." },
      { title: "Engage and report", text: "Daily community management and a clear monthly summary." },
    ],
    faqs: [
      { q: "Do I need to approve every post?", a: "You approve the monthly calendar. After that you can review individual posts or let us run with it, whichever suits you." },
      { q: "Who creates the photos and videos?", a: "We work with your existing photos and video, stock assets and branded graphics. Original shoots can be organised separately." },
      { q: "How many platforms can you manage?", a: "As many as your plan covers. We currently manage up to four platforms for a single client." },
    ],
  },
  {
    slug: "digital-marketing-lead-generation",
    title: "Digital Marketing & Lead Generation",
    icon: "Megaphone",
    summary:
      "Meta ad campaigns, lead forms and clear reporting that turn ad spend into real conversations.",
    intro:
      "Ads only work when the whole path is in place: the right audience, a form that converts and someone ready to follow up. We set up and manage Meta campaigns and connect them to your follow-up process, so leads turn into conversations.",
    included: [
      "Campaign strategy and audience research",
      "Meta (Facebook and Instagram) ad setup and management",
      "Lead form and landing page setup",
      "Ad copy and creative briefs",
      "Lead routing into your CRM with instant notifications",
      "Budget monitoring and optimisation",
      "Weekly campaign reports in plain language",
    ],
    whoFor: [
      "Real estate agents and brokerages promoting listings and projects",
      "Service businesses ready to grow beyond referrals",
      "E-commerce stores launching products or offers",
    ],
    process: [
      { title: "Define the offer", text: "We agree on goals, budget, target audience and what counts as a qualified lead." },
      { title: "Build the funnel", text: "Ads, lead forms and CRM routing set up and tested before launch." },
      { title: "Launch and optimise", text: "Daily monitoring with adjustments to targeting, creative and budget." },
      { title: "Report and follow up", text: "Weekly reporting, with optional lead follow-up by your dedicated VA." },
    ],
    faqs: [
      { q: "Is ad spend included in your fee?", a: "No. Ad spend is paid directly to Meta from your own ad account. Our fee covers strategy, setup and management." },
      { q: "What kind of results can I expect?", a: "Results depend on your market, offer and budget. You can see what we achieved for a Dubai real estate client in our case studies." },
      { q: "Do you follow up with the leads too?", a: "We can. Pairing ads with our lead management service means every lead is contacted quickly." },
    ],
    relatedCaseStudy: "dubai-real-estate-meta-leads",
  },
  {
    slug: "crm-setup-automation",
    title: "CRM Setup & Automation",
    icon: "Workflow",
    summary:
      "GoHighLevel, Airtable and HubSpot set up properly, with workflows and integrations that do the busywork for you.",
    intro:
      "A good CRM is the difference between a business that runs on memory and one that runs on systems. We set up, clean up and automate your CRM so every lead, client and task has a clear place and next step.",
    included: [
      "CRM setup in GoHighLevel, HubSpot or Airtable",
      "Pipeline and stage design that matches how you actually sell",
      "Automated email and SMS follow-up workflows",
      "Forms, booking calendars and contracts connected to your CRM",
      "Integrations with Zapier, Make and native connectors",
      "Data import and clean-up from spreadsheets or old tools",
      "Training videos and documentation for you and your team",
    ],
    whoFor: [
      "Businesses still tracking leads in spreadsheets or inboxes",
      "Teams paying for a CRM they barely use",
      "Founders who want follow-ups to happen without thinking about them",
    ],
    process: [
      { title: "Audit", text: "We review your current tools, data and the steps a client goes through with you." },
      { title: "Design", text: "We map pipelines, automations and integrations before building anything." },
      { title: "Build and test", text: "Everything is built, connected and tested with real scenarios." },
      { title: "Train and hand over", text: "Recorded walkthroughs and written guides, with ongoing support available." },
    ],
    faqs: [
      { q: "Which CRM should I use?", a: "It depends on your business. We will recommend the right fit on your discovery call, and we are happy to work with what you already have." },
      { q: "Can you move my data from my old system?", a: "Yes. We import and clean up contacts, deals and history from spreadsheets or other CRMs." },
      { q: "Is this a one-off project or ongoing?", a: "Both. Many clients start with a setup project, then keep a VA on board to run and maintain the system." },
    ],
  },
  {
    slug: "ecommerce-support",
    title: "E-commerce Support",
    icon: "ShoppingBag",
    summary:
      "Shopify, Amazon and eBay listings, orders and customer service handled by people who know the platforms.",
    intro:
      "Running an online store means hundreds of small tasks every week. We keep listings accurate, orders moving and customers happy, so you can focus on products, marketing and growth.",
    included: [
      "Product listings and updates on Shopify, Amazon and eBay",
      "Product descriptions and basic SEO",
      "Order processing, tracking and fulfilment coordination",
      "Customer service by email and chat",
      "Returns, refunds and dispute handling",
      "Inventory updates and stock alerts",
      "Supplier and logistics communication",
    ],
    whoFor: [
      "Shopify store owners doing everything themselves",
      "Amazon and eBay sellers managing multiple listings",
      "Growing brands that need reliable back-office support",
    ],
    process: [
      { title: "Store walkthrough", text: "We learn your products, platforms, policies and suppliers." },
      { title: "Build the SOPs", text: "Customer service templates and step-by-step guides for every recurring task." },
      { title: "Take over daily tasks", text: "Listings, orders and inboxes handled every day." },
      { title: "Report and improve", text: "Weekly reporting with suggestions to save time or improve the customer experience." },
    ],
    faqs: [
      { q: "Can you cover customer service on weekends?", a: "Yes. We work Monday to Friday covering US and UK business hours, and weekend cover is available if needed. We agree your coverage when we scope your plan." },
      { q: "Do you work with other platforms?", a: "Most likely. Tell us what you use and we will confirm on your discovery call." },
      { q: "Can you help set up a new store?", a: "Yes. Store setup can be scoped as part of our Websites & Systems service." },
    ],
  },
  {
    slug: "websites-systems",
    title: "Websites & Systems",
    icon: "MonitorSmartphone",
    summary:
      "Business websites, booking systems, custom tools and dashboards built by a team that also runs operations.",
    intro:
      "Your website and internal tools should save you time, not create more work. Because our founder is a software developer as well as an executive assistant, we build systems that fit the way your business really runs.",
    included: [
      "Business websites that are fast, mobile friendly and easy to update",
      "Online booking and scheduling systems",
      "Client portals and intake forms",
      "Custom internal tools and dashboards",
      "Integrations between your website, CRM and payment tools",
      "Hosting, domain and email setup",
      "Ongoing maintenance and updates",
    ],
    whoFor: [
      "Service businesses that have outgrown a basic website",
      "Founders who need a custom tool but not a full development team",
      "Teams that want reporting dashboards in one place",
    ],
    process: [
      { title: "Scope", text: "We agree on goals, pages, features and timeline in writing." },
      { title: "Design", text: "Layouts and user flows you can review before development starts." },
      { title: "Build and test", text: "Built, tested on real devices and connected to your tools." },
      { title: "Launch and support", text: "Launch, training and optional ongoing maintenance." },
    ],
    faqs: [
      { q: "Do you use templates or custom code?", a: "Both, depending on what suits your budget and needs. We will recommend the best option on your discovery call." },
      { q: "Will I be able to edit the site myself?", a: "Yes. We set things up so routine updates do not need a developer, and we provide a short guide." },
      { q: "Can a VA keep it updated after launch?", a: "Yes. Pairing a website with an ongoing VA plan is a popular option." },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
