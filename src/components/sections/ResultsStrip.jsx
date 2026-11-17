import { Link } from "react-router";
import Reveal from "../ui/Reveal.jsx";
import { Section, SectionHeading } from "../ui/Section.jsx";
import { results } from "../../data/home.js";

export default function ResultsStrip() {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <SectionHeading eyebrow={results.eyebrow} title={results.title} dark />
      <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {results.items.map((r, i) => (
          <Reveal as="li" key={r.label} delay={i * 90} className="bg-primary-900">
            <Link to={r.href} className="group block h-full p-8 transition hover:bg-white/[0.03]">
              <p className="font-display text-5xl font-extrabold text-accent-300 sm:text-6xl">{r.value}</p>
              <p className="mt-4 text-sm leading-relaxed text-primary-200 group-hover:text-white">{r.label}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
