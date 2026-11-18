import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "../../lib/icons.jsx";
import { getService } from "../../data/services.js";
import { industries } from "../../data/industries.js";

export function ServiceCard({ service, detailed = false }) {
  return (
    <Link to={`/services/${service.slug}`} className="card card-hover group flex h-full flex-col">
      <div className="flex items-start justify-between">
        <span className="icon-badge">
          <Icon name={service.icon} />
        </span>
        <ArrowUpRight
          className="size-5 text-primary-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-ink-600">{service.summary}</p>
      {detailed && (
        <ul className="mt-5 space-y-2 border-t border-ink-200 pt-5 text-sm text-ink-700">
          {service.included.slice(0, 3).map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
              {i}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-auto pt-6 text-sm font-semibold text-ink-950 group-hover:text-accent-700">Learn more</span>
    </Link>
  );
}

export function IndustryCard({ industry }) {
  return (
    <Link
      to={`/industries#${industry.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/15 p-6 transition-colors duration-200 hover:border-white/40"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-400/10 text-accent-300 ring-1 ring-accent-400/20">
        <Icon name={industry.icon} className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-white">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-primary-300">{industry.summary}</p>
    </Link>
  );
}

/** Small pill links to services, used on industry pages. */
export function ServicePills({ slugs, dark = false }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {slugs.map(getService).filter(Boolean).map((s) => (
        <li key={s.slug}>
          <Link
            to={`/services/${s.slug}`}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
              dark
                ? "bg-white/5 text-primary-100 ring-1 ring-white/10 hover:ring-accent-400"
                : "bg-white text-ink-800 ring-1 ring-ink-300 hover:ring-primary-700"
            }`}
          >
            <Icon name={s.icon} className="size-4 text-accent-600" />
            {s.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
