import Reveal from "../ui/Reveal.jsx";
import CheckList from "../ui/CheckList.jsx";
import { Icon } from "../../lib/icons.jsx";

/** Compact horizontal steps (home page). */
export function ProcessCompact({ steps }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 80} className="relative">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-900 font-display text-sm font-bold text-accent-300">
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < steps.length - 1 && <span className="hidden h-px flex-1 bg-ink-300 lg:block" aria-hidden="true" />}
          </div>
          <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.summary}</p>
        </Reveal>
      ))}
    </ol>
  );
}

/** Detailed vertical timeline (How It Works page). */
export function ProcessTimeline({ steps }) {
  return (
    <ol className="relative mx-auto max-w-4xl">
      <span className="absolute top-2 bottom-2 left-6 w-px bg-ink-300 sm:left-8" aria-hidden="true" />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} className="relative pb-14 pl-18 last:pb-0 sm:pl-24">
          <span className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-2xl bg-primary-900 text-accent-300 sm:size-16">
            <Icon name={step.icon} className="size-6 sm:size-7" />
          </span>
          <p className="text-sm font-semibold tracking-widest text-accent-700 uppercase">Step {i + 1}</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{step.title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-600">{step.summary}</p>
          <div className="card mt-6">
            <CheckList items={step.details} />
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
