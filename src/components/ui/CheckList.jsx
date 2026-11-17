import { Check } from "lucide-react";

export default function CheckList({ items, className = "", dark = false }) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${
              dark ? "bg-accent-400/15 text-accent-300" : "bg-primary-100 text-primary-800"
            }`}
          >
            <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className={dark ? "text-primary-100" : "text-ink-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
