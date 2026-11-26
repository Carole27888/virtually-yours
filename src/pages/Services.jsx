import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import { Section } from "../components/ui/Section.jsx";
import { ServiceCard } from "../components/sections/Cards.jsx";
import { pageMeta } from "../lib/seo.js";
import { services } from "../data/services.js";
import { servicesIntro, servicesSummary } from "../data/home.js";

export default function Services() {
  return (
    <>
      <Seo {...pageMeta("services")} />
      <PageHeader eyebrow="Services" title={servicesIntro.title} text={servicesIntro.text} />

      <Section>
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{servicesSummary.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{servicesSummary.text}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
          <Reveal delay={160} className="flex flex-col justify-center rounded-2xl bg-primary-50 p-8 ring-1 ring-primary-100">
            <h2 className="text-2xl font-bold">Not sure where to start?</h2>
            <p className="mt-3 leading-relaxed text-ink-700">
              Most clients begin with one area and add more over time. On a free discovery call we will help you decide what to hand off first.
            </p>
            <Button href="/how-it-works" variant="link" arrow className="mt-6 self-start">
              See how it works
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
