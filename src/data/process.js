/**
 * HOW IT WORKS
 * --------------------------------------------------------------
 * Used on /how-it-works (full detail) and the home page (summary).
 */

export const processIntro = {
  eyebrow: "How it works",
  title: "From first call to fully supported, in five clear steps",
  text: "You get a dedicated assistant plus an agency behind them. Here is exactly how we get you there.",
};

export const processSteps = [
  {
    title: "Discovery call",
    icon: "PhoneCall",
    summary: "A relaxed 30-minute call to understand your business and where you are stretched thin.",
    details: [
      "We learn about your business, goals and current workload",
      "You tell us what is taking up too much of your time",
      "We give you an honest view of whether we are the right fit",
    ],
  },
  {
    title: "Needs assessment",
    icon: "ClipboardList",
    summary: "We map the tasks, tools and hours you need, then recommend the right plan.",
    details: [
      "A clear list of tasks to delegate, in priority order",
      "A review of the tools and systems you already use",
      "A recommended plan and written proposal",
    ],
  },
  {
    title: "VA matching",
    icon: "UserCheck",
    summary: "We match you with a trained, vetted assistant whose skills fit your work.",
    details: [
      "Matched on skills, industry experience and working hours",
      "Every VA is vetted and trained before working with clients",
      "You meet your assistant before work begins",
    ],
  },
  {
    title: "Onboarding & SOPs",
    icon: "FileText",
    summary: "We set up access and document your processes so work is done your way from day one.",
    details: [
      "Secure access to your tools and accounts",
      "Standard operating procedures written for recurring tasks",
      "A structured first few weeks with regular check-ins",
    ],
  },
  {
    title: "Ongoing management & weekly reports",
    icon: "BarChart3",
    summary: "Agency oversight, quality checks and a weekly report, so you always know what got done.",
    details: [
      "Weekly reports on completed work and priorities",
      "Regular quality checks by our team",
      "Continuity support so your work doesn't stall",
      "A single point of contact for feedback and changes",
    ],
  },
];

/**
 * YOUR FIRST 30 DAYS
 * Shown on /how-it-works after the five steps. Describes what
 * happens once a client signs up.
 */
export const firstMonthIntro = {
  eyebrow: "Your first 30 days",
  title: "What happens after you say yes",
  text: "No guesswork. Here is how your first month with your assistant unfolds.",
};

export const firstMonth = [
  {
    when: "Day 1",
    title: "Kickoff",
    text: "A welcome call with your assistant and your account lead. We set up secure access to your tools and agree on the priorities for week one.",
  },
  {
    when: "Week 1",
    title: "Learning your business",
    text: "Your assistant learns your workflows and takes on the first tasks, with regular check-ins. You receive your first weekly report.",
  },
  {
    when: "Week 2",
    title: "Taking the load",
    text: "Recurring tasks are fully handed over. We write the SOPs for how you like things done and review them with you.",
  },
  {
    when: "Weeks 3 to 4",
    title: "Running smoothly",
    text: "Your assistant works independently from your SOPs, and our team runs its first quality check on the work.",
  },
  {
    when: "Day 30",
    title: "Your 30-day review",
    text: "We sit down together to look at what is working, what is next and whether your hours or plan should change.",
  },
];
