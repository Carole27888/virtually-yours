import { CheckCircle2, ShieldCheck } from "lucide-react";
import Seo from "../components/Seo.jsx";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Container, Section, SectionHeading } from "../components/ui/Section.jsx";
import { IndustryCard, ServiceCard } from "../components/sections/Cards.jsx";
import { ProcessCompact } from "../components/sections/ProcessSteps.jsx";
import ResultsStrip from "../components/sections/ResultsStrip.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import { Icon } from "../lib/icons.jsx";
import { pageMeta } from "../lib/seo.js";
import { site } from "../data/site.js";
import { hero, industriesIntro, painPoints, servicesIntro } from "../data/home.js";
import { services } from "../data/services.js";
import { industries } from "../data/industries.js";
import { processIntro, processSteps } from "../data/process.js";

/** Illustrative "your week" card in the hero. No numbers, nothing invented. */
function HeroVisual() {
  const items = ["Inquiries answered", "Follow-ups sent", "Discovery calls booked", "CRM updated", "Weekly report delivered"];
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      <div className="relative rounded-3xl border border-white/15 bg-primary-800 p-6 pb-16 sm:p-8 sm:pb-16">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-white">This week, handled</p>
          <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-300">On track</span>
        </div>
        <ul className="mt-6 space-y-3">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-primary-100 motion-safe:animate-[fadeUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              <CheckCircle2 className="size-5 text-accent-300" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-ink-200 bg-white p-4 sm:-left-10">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary-900 text-accent-300">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink-950">Dedicated VA</p>
          <p className="text-xs text-ink-500">plus agency oversight</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Seo {...pageMeta("home")} />

      {/* Hero */}
      <section className="on-dark relative bg-primary-900 pt-36 pb-24 sm:pt-44 lg:pb-32">
        <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-200 sm:text-xl">{hero.text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={site.cta.href} size="lg" arrow>
                {site.cta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="outlineLight">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-sm text-primary-300">{hero.trustLine}</p>
            </div>
          </div>
          <HeroVisual />
        </Container>
      </section>

      {/* Pain points */}
      <Section>
        <SectionHeading eyebrow={painPoints.eyebrow} title={painPoints.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="card">
              <span className="icon-badge">
                <Icon name={p.icon} />
              </span>
              <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="tint">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading {...servicesIntro} />
          <Button href="/services" variant="outline" arrow className="self-start lg:self-auto">
            All services
          </Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80} className={i === services.length - 1 && services.length % 3 === 1 ? "lg:col-start-2" : ""}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section tone="dark">
        <SectionHeading {...industriesIntro} dark />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 70}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={processIntro.eyebrow} title={processIntro.title} text={processIntro.text} />
          <Button href="/how-it-works" variant="outline" arrow className="self-start lg:self-auto">
            See the full process
          </Button>
        </div>
        <div className="mt-16">
          <ProcessCompact steps={processSteps} />
        </div>
      </Section>

      <ResultsStrip />
      <Testimonials />
    </>
  );
}
