import { ChevronDown } from "lucide-react";

/** Accessible FAQ list built on native <details>. items: [{ q, a }] */
export default function Accordion({ items }) {
  return (
    <div className="divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5 sm:px-8">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              className="mt-1 size-5 shrink-0 text-accent-600 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 pr-10 leading-relaxed text-ink-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
