import Reveal from "../ui/Reveal.jsx";
import { Section, SectionHeading } from "../ui/Section.jsx";
import { firstMonth, firstMonthIntro } from "../../data/process.js";

/**
 * "Your first 30 days" timeline. Vertical on phones, horizontal
 * on large screens. Content lives in data/process.js.
 */
export default function FirstMonth({ tone = "tint" }) {
  const last = firstMonth.length - 1;
  return (
    <Section tone={tone}>
      <SectionHeading {...firstMonthIntro} />
      <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
        {/* connecting line */}
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-ink-300 lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" aria-hidden="true" />
        {firstMonth.map((stage, i) => (
          <Reveal as="li" key={stage.when} delay={i * 90} className="relative pl-10 lg:pt-10 lg:pl-0">
            <span
              className={`absolute top-0.5 left-0 size-[15px] rounded-full border-2 lg:top-0 ${
                i === last ? "border-accent-500 bg-accent-500" : "border-primary-900 bg-paper-200"
              }`}
              aria-hidden="true"
            />
            <p className="text-xs font-bold tracking-[0.18em] text-accent-700 uppercase">{stage.when}</p>
            <h3 className="mt-2 text-xl font-bold">{stage.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{stage.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
