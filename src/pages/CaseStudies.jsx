import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Section } from "../components/ui/Section.jsx";
import { CaseStudyCard } from "../components/sections/Cards.jsx";
import { pageMeta } from "../lib/seo.js";
import { caseStudies } from "../data/caseStudies.js";

export default function CaseStudies() {
  return (
    <>
      <Seo {...pageMeta("caseStudies")} />
      <PageHeader
        eyebrow="Case studies"
        title="Real businesses, real results"
        text="A look at the work behind the scenes, and what it made possible for our clients."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 100}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
