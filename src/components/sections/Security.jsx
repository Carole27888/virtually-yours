import { Link } from "react-router";
import Reveal from "../ui/Reveal.jsx";
import { Section, SectionHeading } from "../ui/Section.jsx";
import { Icon } from "../../lib/icons.jsx";
import { securityIntro, securityPractices } from "../../data/security.js";

/** "Your data is safe with us" section. Content lives in data/security.js. */
export default function Security({ tone = "tint" }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading {...securityIntro} />
          <p className="mt-6 text-sm text-ink-500">
            Want the details?{" "}
            <Link to="/privacy" className="font-semibold text-ink-950 underline-offset-4 hover:text-accent-700 hover:underline">
              Read our privacy policy
            </Link>
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {securityPractices.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 2) * 80} className="card">
              <span className="icon-badge">
                <Icon name={p.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
