import { Clock, Mail, MapPin } from "lucide-react";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { SafeLink, Text } from "../components/ui/Placeholder.jsx";
import CalendlyEmbed from "../components/CalendlyEmbed.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import { pageMeta } from "../lib/seo.js";
import { isPlaceholder, site } from "../data/site.js";
import { processSteps } from "../data/process.js";
import { bookingSection, contactIntro } from "../data/contact.js";

export default function Contact() {
  const emailHref = isPlaceholder(site.email) ? site.email : `mailto:${site.email}`;

  return (
    <>
      <Seo {...pageMeta("contact")} />
      <PageHeader eyebrow={contactIntro.eyebrow} title={contactIntro.title} showCta={false}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-200 sm:text-xl">
          <Text>{contactIntro.text}</Text>
        </p>
      </PageHeader>

      {/* Booking */}
      <Section id="book" tone="tint">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <SectionHeading
              eyebrow="Discovery call"
              title={bookingSection.title}
              text={isPlaceholder(site.calendlyUrl) ? bookingSection.textWithoutCalendly : bookingSection.text}
            />
            <h3 className="mt-10 text-sm font-semibold tracking-widest text-ink-500 uppercase">What happens next</h3>
            <ol className="mt-5 space-y-4">
              {processSteps.slice(0, 3).map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-900 font-display text-sm font-bold text-accent-300">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-950">{s.title}</p>
                    <p className="text-sm text-ink-600">{s.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <CalendlyEmbed />
        </div>
      </Section>

      {/* Message form */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <SectionHeading eyebrow="Send a message" title="Prefer to write?" text="Tell us a little about your business and we will get back to you." />
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3">
                <span className="icon-badge size-10">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <SafeLink href={emailHref} className="font-medium text-ink-950 hover:text-accent-700">
                  <Text>{site.email}</Text>
                </SafeLink>
              </li>
              <li className="flex items-center gap-3">
                <span className="icon-badge size-10">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-medium text-ink-950">{site.location}</span>
                  <span className="block text-sm text-ink-600">{site.serviceArea}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="icon-badge size-10 shrink-0">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-ink-950">{site.hours}</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-ink-200 bg-white p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
