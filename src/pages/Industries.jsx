import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Container } from "../components/ui/Section.jsx";
import { ServicePills } from "../components/sections/Cards.jsx";
import { Icon } from "../lib/icons.jsx";
import { pageMeta } from "../lib/seo.js";
import { industries } from "../data/industries.js";
import { industriesIntro } from "../data/home.js";

export default function Industries() {
  return (
    <>
      <Seo {...pageMeta("industries")} />
      <PageHeader eyebrow={industriesIntro.eyebrow} title={industriesIntro.title} text={industriesIntro.text}>
        <nav aria-label="Industries" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <a
                  href={`#${ind.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-primary-100 transition hover:border-accent-400 hover:text-white"
                >
                  <Icon name={ind.icon} className="size-4 text-accent-300" />
                  {ind.shortName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {industries.map((ind, i) => {
        return (
          <section
            key={ind.slug}
            id={ind.slug}
            aria-labelledby={`${ind.slug}-title`}
            className={`py-20 sm:py-24 ${i % 2 ? "bg-paper-200" : "bg-white"}`}
          >
            <Container>
              <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
                <div>
                  <span className="icon-badge">
                    <Icon name={ind.icon} />
                  </span>
                  <h2 id={`${ind.slug}-title`} className="mt-6 text-3xl font-bold sm:text-4xl">
                    {ind.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-600">{ind.summary}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="card">
                    <h3 className="text-sm font-semibold tracking-widest text-ink-500 uppercase">The challenge</h3>
                    <ul className="mt-5 space-y-3">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex gap-3 text-ink-700">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-ink-400" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card border-primary-200 bg-primary-50/50">
                    <h3 className="text-sm font-semibold tracking-widest text-accent-700 uppercase">How we help</h3>
                    <ul className="mt-5 space-y-3">
                      {ind.howWeHelp.map((h) => (
                        <li key={h} className="flex gap-3 text-ink-800">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="mb-4 text-sm font-semibold text-ink-950">Related services</h3>
                    <ServicePills slugs={ind.services} />
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}
    </>
  );
}
