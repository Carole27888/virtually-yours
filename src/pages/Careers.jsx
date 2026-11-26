import { ExternalLink, MapPin } from "lucide-react";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import CheckList from "../components/ui/CheckList.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { Text } from "../components/ui/Placeholder.jsx";
import CareersForm from "../components/forms/CareersForm.jsx";
import { isPlaceholder, site } from "../data/site.js";
import { Icon } from "../lib/icons.jsx";
import { pageMeta } from "../lib/seo.js";
import { benefits, careersIntro, requirements, roles } from "../data/careers.js";

export default function Careers() {
  return (
    <>
      <Seo {...pageMeta("careers")} />
      <PageHeader eyebrow={careersIntro.eyebrow} title={careersIntro.title} text={careersIntro.text} showCta={false}>
        <div className="mt-9">
          <Button href="#apply" size="lg" arrow>
            Apply now
          </Button>
        </div>
      </PageHeader>

      {/* Benefits */}
      <Section>
        <SectionHeading eyebrow="Why join us" title="Flexible remote work, with real support" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="card">
              <span className="icon-badge">
                <Icon name={b.icon} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Roles + requirements */}
      <Section tone="tint">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading eyebrow="Open roles" title="Roles we hire for" />
            <ul className="mt-10 space-y-4">
              {roles.map((r, i) => (
                <Reveal as="li" key={r.title} delay={i * 50} className="card flex flex-col gap-3 p-6! sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{r.summary}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 text-xs font-medium">
                    {r.type && (
                      <span className="rounded-full bg-paper-200 px-3 py-1 text-ink-700">
                        <Text>{r.type}</Text>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-primary-800">
                      <MapPin className="size-3" aria-hidden="true" />
                      {r.location}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="self-start rounded-3xl bg-white p-8 ring-1 ring-ink-200 lg:sticky lg:top-28">
            <h2 className="text-2xl font-bold">What we look for</h2>
            <CheckList items={requirements} className="mt-6" />
          </Reveal>
        </div>
      </Section>

      {/* Application */}
      <Section id="apply">
        <div className="mx-auto max-w-3xl">
          {isPlaceholder(site.forms.careersGoogleForm) ? (
            <>
              <SectionHeading
                eyebrow="Apply"
                title="Send us your application"
                text="Fill in the form below. It takes about five minutes."
              />
              <div className="mt-10 rounded-3xl border border-ink-200 bg-white p-6 sm:p-10">
                <CareersForm />
              </div>
            </>
          ) : (
            <>
              <SectionHeading
                eyebrow="Apply"
                title="Send us your application"
                text="Our application form takes about ten minutes. Have a link to your CV ready."
              />
              <div className="mt-10 rounded-3xl border border-ink-200 bg-white p-6 sm:p-10">
                <ol className="space-y-4 text-ink-700">
                  {[
                    "Upload your CV to Google Drive or Dropbox and copy a link that anyone can view.",
                    "Open the application form. It opens in a new tab.",
                    "Tell us about your skills and experience, paste your CV link and submit.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-900 font-display text-sm font-bold text-accent-300">
                        {i + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
                <a
                  href={site.forms.careersGoogleForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-white transition hover:bg-accent-600"
                >
                  Open the application form
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                <p className="mt-6 text-sm text-ink-500">
                  Trouble with the form? Email your CV to{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-ink-950 hover:text-accent-700">
                    {site.email}
                  </a>{" "}
                  with the role you are applying for.
                </p>
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
}
