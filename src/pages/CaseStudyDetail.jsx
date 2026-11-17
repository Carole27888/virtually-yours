import { useParams } from "react-router";
import { Quote } from "lucide-react";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Container, Section } from "../components/ui/Section.jsx";
import { CaseStudyCard, ServicePills } from "../components/sections/Cards.jsx";
import { caseStudyMeta } from "../lib/seo.js";
import { caseStudies, getCaseStudy } from "../data/caseStudies.js";
import { industries } from "../data/industries.js";
import NotFound from "./NotFound.jsx";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <NotFound />;

  const industry = industries.find((i) => i.slug === study.industry);
  const others = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <Seo {...caseStudyMeta(study)} />
      <PageHeader
        eyebrow={`Case study · ${study.location}`}
        title={study.title}
        text={study.summary}
        back={{ label: "All case studies", href: "/case-studies" }}
        showCta={false}
      />

      {/* Results */}
      <div className="relative z-10 -mt-12">
        <Container>
          <dl className={`grid gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 sm:grid-cols-2 ${study.results.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {study.results.map((r) => (
              <div key={r.label} className="bg-white p-8">
                <dt className="text-sm text-ink-500">{r.label}</dt>
                <dd className="mt-2 font-display text-4xl font-extrabold text-accent-600">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 self-start rounded-3xl bg-paper-200 p-8 lg:sticky lg:top-28">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-ink-500 uppercase">Client</h2>
              <p className="mt-2 font-semibold text-ink-950">{study.client}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-ink-500 uppercase">Location</h2>
              <p className="mt-2 font-semibold text-ink-950">{study.location}</p>
            </div>
            {industry && (
              <div>
                <h2 className="text-xs font-semibold tracking-widest text-ink-500 uppercase">Industry</h2>
                <p className="mt-2 font-semibold text-ink-950">{industry.name}</p>
              </div>
            )}
            <div>
              <h2 className="mb-3 text-xs font-semibold tracking-widest text-ink-500 uppercase">Services</h2>
              <ServicePills slugs={study.services} />
            </div>
          </aside>

          <div className="space-y-14">
            <Reveal>
              <h2 className="text-3xl font-bold">The challenge</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">{study.challenge}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-3xl font-bold">What we did</h2>
              <ol className="mt-6 space-y-4">
                {study.approach.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-900 font-display text-sm font-bold text-accent-300">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-lg text-ink-700">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            {study.quote && (
              <Reveal as="figure" className="rounded-3xl bg-primary-900 p-10 text-white">
                <Quote className="size-10 text-accent-400" aria-hidden="true" />
                <blockquote className="mt-4 font-display text-2xl leading-snug">{study.quote.text}</blockquote>
                <figcaption className="mt-6 text-primary-300">{study.quote.author}</figcaption>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="tint">
          <h2 className="text-3xl font-bold">More case studies</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {others.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
