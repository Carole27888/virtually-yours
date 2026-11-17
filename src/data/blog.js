/**
 * BLOG / RESOURCES
 * --------------------------------------------------------------
 * Each post creates a card on /blog and a page at /blog/<slug>.
 * The two posts below are SAMPLE PLACEHOLDERS. Edit or replace
 * them before launch.
 *
 * Body blocks:
 *   { type: "p",  text: "..." }
 *   { type: "h2", text: "..." }
 *   { type: "ul", items: ["...", "..."] }
 *   { type: "ol", items: ["...", "..."] }
 *   { type: "quote", text: "..." }
 */

export const blogIntro = {
  eyebrow: "Resources",
  title: "Practical guides for busy business owners",
  text: "Ideas and how-tos on delegation, systems and growth.",
};

export const posts = [
  {
    slug: "signs-you-are-ready-to-hire-a-virtual-assistant",
    title: "5 signs you are ready to hire a virtual assistant",
    excerpt: "If you are always busy but never quite catching up, it might be time to delegate. Here is how to tell.",
    date: "2026-01-15",
    author: "Carole Mutemi",
    category: "Delegation",
    readingTime: "4 min read",
    isSample: true,
    body: [
      { type: "p", text: "Most business owners wait too long to get help. They tell themselves it will be quicker to do it themselves, until the to-do list is running their life. Here are five signs it is time to bring in a virtual assistant." },
      { type: "h2", text: "1. Your inbox decides your day" },
      { type: "p", text: "If you start each morning planning to do focused work and end it having only answered email, you are spending your best hours on tasks someone else could handle." },
      { type: "h2", text: "2. Leads wait too long for a reply" },
      { type: "p", text: "Speed matters. When inquiries sit for a day or two, potential clients often move on to whoever responded first." },
      { type: "h2", text: "3. You keep putting off the same tasks" },
      { type: "p", text: "Invoices, social media posts, CRM updates. If the same jobs roll over week after week, they are a good place to start delegating." },
      { type: "h2", text: "4. You cannot take a day off" },
      { type: "p", text: "If everything stops when you step away, your business depends on you for tasks that do not need you." },
      { type: "h2", text: "5. You know what to delegate, but not who to trust" },
      { type: "p", text: "This is where a managed agency helps. You get a vetted assistant plus a team that handles training, quality checks and continuity support so your work doesn't stall." },
      { type: "h2", text: "Where to start" },
      { type: "ul", items: ["List every task you do in a typical week", "Mark the ones only you can do", "Everything else is a candidate to delegate"] },
    ],
  },
  {
    slug: "how-to-write-an-sop-your-va-can-follow",
    title: "How to write an SOP your virtual assistant can actually follow",
    excerpt: "Clear standard operating procedures are the secret to delegating with confidence. Here is a simple format that works.",
    date: "2026-02-10",
    author: "Carole Mutemi",
    category: "Systems",
    readingTime: "5 min read",
    isSample: true,
    body: [
      { type: "p", text: "A standard operating procedure (SOP) is a written guide to doing a task the same way every time. Good SOPs make delegation faster, reduce mistakes and mean your business does not rely on memory." },
      { type: "h2", text: "Keep it to one task" },
      { type: "p", text: "An SOP should cover one clear task, such as replying to a new inquiry or publishing a blog post. If it covers several, split it up." },
      { type: "h2", text: "Use a simple structure" },
      { type: "ol", items: ["Purpose: why this task matters", "When: what triggers the task and how often", "Tools: links and logins needed", "Steps: numbered, one action per step", "Quality check: what done looks like"] },
      { type: "h2", text: "Show, do not just tell" },
      { type: "p", text: "A short screen recording alongside written steps makes an SOP much easier to follow, especially for tasks with many clicks." },
      { type: "quote", text: "If a new team member cannot complete the task from your SOP alone, the SOP needs another pass." },
      { type: "h2", text: "Review it regularly" },
      { type: "p", text: "Tools and preferences change. Ask your assistant to flag any step that no longer matches reality and update the SOP as you go." },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
