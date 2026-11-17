/**
 * LEGAL PAGES
 * --------------------------------------------------------------
 * PLACEHOLDER TEXT ONLY. This is a starting structure, not legal
 * advice. Have both documents reviewed by a qualified lawyer,
 * especially regarding GDPR (EU clients) and Kenya's Data
 * Protection Act, 2019.
 */

import { AGENCY_NAME, site } from "./site.js";

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "17 November 2026",
  sections: [
    { heading: "Who we are", body: [`${AGENCY_NAME} ("we", "us") is a virtual assistant and digital services agency based in ${site.location}. You can contact us at ${site.email}.`] },
    { heading: "Information we collect", body: ["We collect the information you choose to give us. Through our contact form this is your name, email address, business name, the services you are interested in, your budget range and your message. Through our job application form this is your name, email address, country, skills, experience, portfolio link and CV. If you book a call, Calendly collects the details you enter when booking."] },
    { heading: "How we use your information", body: ["We use your information to reply to your inquiry, arrange and hold discovery calls, provide the services you engage us for, and review job applications. We do not sell your information or use it for unrelated marketing."] },
    { heading: "Third-party services", body: ["We use trusted third parties to run this website: Formspree to receive form submissions, Calendly to schedule calls and Vercel to host the site. Each processes your information under its own privacy policy."] },
    { heading: "Data retention", body: ["Client data is kept for the duration of the service and deleted within 90 days after it ends, or sooner on request. Job applications are kept for up to 12 months, then deleted."] },
    { heading: "Your rights", body: [`You can ask us at any time to see, correct or delete the personal information we hold about you. Email ${site.email} and we will respond as soon as we can.`] },
    { heading: "Cookies", body: ["This website does not use analytics or advertising cookies. If you use the booking calendar on our Contact page, Calendly may set its own cookies to make scheduling work."] },
    { heading: "Changes to this policy", body: ["We may update this policy from time to time. The latest version will always be on this page."] },
  ],
};

export const termsOfService = {
  title: "Terms of Service",
  lastUpdated: "17 November 2026",
  sections: [
    { heading: "Agreement", body: [`These terms apply to your use of this website and to services provided by ${AGENCY_NAME}. Client engagements are also governed by a separate service agreement.`] },
    { heading: "Services", body: ["Services are scoped on a discovery call and agreed in writing before work begins. Each engagement is set out in a proposal or service agreement that describes the work, hours and fees."] },
    { heading: "Payment", body: ["Services are billed monthly in advance in USD. Invoices are due within 7 days, paid by bank transfer, Wise or PayPal."] },
    { heading: "Confidentiality", body: ["We treat all client information as confidential. Our team signs confidentiality agreements as standard, and access to client accounts and data is limited to the people who need it to do the work."] },
    { heading: "Cancellation", body: ["Either party may end the service with 14 days' written notice. Fees for the current billing period are non-refundable."] },
    { heading: "Limitation of liability", body: ["Our total liability is limited to the fees paid in the month before the claim."] },
    { heading: "Governing law", body: ["These terms are governed by the laws of Kenya."] },
    { heading: "Contact", body: [`Questions about these terms? Email us at ${site.email}.`] },
  ],
};
