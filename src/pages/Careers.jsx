import { MapPin } from "lucide-react";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import CheckList from "../components/ui/CheckList.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { Text } from "../components/ui/Placeholder.jsx";
import CareersForm from "../components/forms/CareersForm.jsx";
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
          <SectionHeading
            eyebrow="Apply"
            title="Send us your application"
            text="Fill in the form below. It takes about five minutes."
          />
          <div className="mt-10 rounded-3xl border border-ink-200 bg-white p-6 sm:p-10">
            <CareersForm />
          </div>
        </div>
      </Section>
    </>
  );
}
