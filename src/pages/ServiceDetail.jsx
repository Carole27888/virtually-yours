import { Link, useParams } from "react-router";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import CheckList from "../components/ui/CheckList.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { Icon } from "../lib/icons.jsx";
import { serviceMeta } from "../lib/seo.js";
import { getService, services } from "../data/services.js";
import NotFound from "./NotFound.jsx";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Seo {...serviceMeta(service)} />
      <PageHeader eyebrow="Service" title={service.title} text={service.intro} back={{ label: "All services", href: "/services" }} />

      {/* What's included + who it's for */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="What's included" title="Everything we can take off your plate" />
            <CheckList items={service.included} className="mt-10 sm:columns-1" />
          </Reveal>
          <Reveal delay={120} className="self-start rounded-3xl bg-paper-200 p-8 sm:p-10">
            <span className="icon-badge bg-white">
              <Icon name={service.icon} />
            </span>
            <h2 className="mt-6 text-2xl font-bold">Who it's for</h2>
            <ul className="mt-6 space-y-4">
              {service.whoFor.map((w) => (
                <li key={w} className="border-l-2 border-accent-400 pl-4 text-ink-700">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section tone="dark">
        <SectionHeading eyebrow="Our process" title="How we get started" dark />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="font-display text-4xl font-extrabold text-accent-400/80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-300">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Accordion items={service.faqs} />
        </div>
      </Section>

      {/* Other services */}
      <Section tone="tint" className="py-16! sm:py-20!">
        <h2 className="text-2xl font-bold">Explore other services</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink-800 ring-1 ring-ink-300 transition hover:ring-primary-700"
              >
                <Icon name={s.icon} className="size-4 text-accent-600" />
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
