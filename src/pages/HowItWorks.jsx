import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { ProcessTimeline } from "../components/sections/ProcessSteps.jsx";
import { Icon } from "../lib/icons.jsx";
import FirstMonth from "../components/sections/FirstMonth.jsx";
import Security from "../components/sections/Security.jsx";
import { pageMeta } from "../lib/seo.js";
import { processIntro, processSteps } from "../data/process.js";

const included = [
  { icon: "UserCheck", title: "Dedicated assistant", text: "One trained, vetted person who learns your business." },
  { icon: "FileText", title: "Documented SOPs", text: "Your processes written down, so work is done your way." },
  { icon: "ShieldCheck", title: "Quality checks", text: "Regular reviews by our team, not just your VA." },
  { icon: "BarChart3", title: "Weekly reports", text: "A clear summary of what got done and what is next." },
];

export default function HowItWorks() {
  return (
    <>
      <Seo {...pageMeta("howItWorks")} />
      <PageHeader eyebrow={processIntro.eyebrow} title={processIntro.title} text={processIntro.text} />

      <Section>
        <ProcessTimeline steps={processSteps} />
      </Section>

      <FirstMonth tone="tint" />

      <Section>
        <SectionHeading
          eyebrow="Included with every plan"
          title="More than an assistant. A managed service."
          text="Hiring a freelancer gets you a person. Working with us gets you a person plus the structure that makes delegation work."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="card text-center">
              <span className="icon-badge">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Security tone="tint" />
    </>
  );
}
