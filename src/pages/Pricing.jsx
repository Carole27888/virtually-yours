import { Users } from "lucide-react";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import CheckList from "../components/ui/CheckList.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { Text } from "../components/ui/Placeholder.jsx";
import { Icon } from "../lib/icons.jsx";
import { pageMeta } from "../lib/seo.js";
import { site } from "../data/site.js";
import { addOns, customTeam, plans, pricingFaqs, pricingIntro } from "../data/pricing.js";

function PlanCard({ plan }) {
  const featured = plan.featured;
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
        featured ? "on-dark bg-primary-900 text-primary-100 lg:-my-4 lg:py-14" : "card"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-accent-500 px-3.5 py-1 text-xs font-bold tracking-wide text-white uppercase">
          Most popular
        </span>
      )}
      <h2 className={`text-2xl font-bold ${featured ? "text-white" : ""}`}>{plan.name}</h2>
      <p className={`mt-1 text-sm font-semibold ${featured ? "text-accent-300" : "text-accent-700"}`}>{plan.tagline}</p>
      <p className={`mt-4 text-sm leading-relaxed ${featured ? "text-primary-300" : "text-ink-600"}`}>{plan.description}</p>
      <p className="mt-8 flex items-baseline gap-1">
        {plan.pricePrefix && (
          <span className={`mr-1 text-sm font-medium ${featured ? "text-primary-300" : "text-ink-500"}`}>{plan.pricePrefix}</span>
        )}
        <span className={`font-display text-4xl font-extrabold ${featured ? "text-white" : "text-ink-950"}`}>
          <Text>{plan.price}</Text>
        </span>
        <span className={featured ? "text-primary-300" : "text-ink-500"}>{plan.period}</span>
      </p>
      {plan.hours && (
        <p className={`mt-1 text-sm ${featured ? "text-primary-300" : "text-ink-500"}`}>
          <Text>{plan.hours}</Text>
        </p>
      )}
      <CheckList items={plan.features} dark={featured} className="mt-8 mb-10 text-sm" />
      <Button href={site.cta.href} variant={featured ? "primary" : "dark"} arrow className="mt-auto w-full">
        Get started
      </Button>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <Seo {...pageMeta("pricing")} />
      <PageHeader eyebrow={pricingIntro.eyebrow} title={pricingIntro.title} text={pricingIntro.text} showCta={false} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-500">
          <Text>{pricingIntro.currencyNote}</Text>
        </p>

        <Reveal className="mt-16 flex flex-col items-start gap-6 rounded-3xl bg-primary-50 p-8 ring-1 ring-primary-100 sm:p-10 md:flex-row md:items-center">
          <span className="icon-badge size-14 shrink-0 bg-white">
            <Users className="size-6" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{customTeam.title}</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-700">{customTeam.text}</p>
          </div>
          <Button href={site.cta.href} variant="dark" arrow>
            {customTeam.cta}
          </Button>
        </Reveal>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Add-ons" title="Projects to pair with any plan" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {addOns.map((a, i) => (
            <Reveal key={a.name} delay={i * 80} className="card">
              <span className="icon-badge">
                <Icon name={a.icon} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{a.name}</h3>
              <p className="mt-1 font-semibold text-accent-700">
                <Text>{a.price}</Text>
              </p>
              <p className="mt-3 leading-relaxed text-ink-600">{a.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Pricing questions" />
          <Accordion items={pricingFaqs} />
        </div>
      </Section>
    </>
  );
}
