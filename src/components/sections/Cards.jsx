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

export function CaseStudyCard({ study }) {
  const industry = industries.find((i) => i.slug === study.industry);
  return (
    <Link to={`/case-studies/${study.slug}`} className="card card-hover group flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-ink-500 uppercase">
        {industry && <span className="rounded-full bg-paper-200 px-3 py-1 text-ink-700">{industry.shortName}</span>}
        <span>{study.location}</span>
      </div>
      <h3 className="mt-5 text-2xl font-bold leading-snug">{study.title}</h3>
      <p className="mt-3 leading-relaxed text-ink-600">{study.summary}</p>
      <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-ink-200 pt-6">
        {study.results.slice(0, 3).map((r) => (
          <div key={r.label}>
            <dt className="sr-only">{r.label}</dt>
            <dd className="font-display text-2xl font-extrabold text-accent-600">{r.value}</dd>
            <dd className="mt-1 text-xs leading-snug text-ink-500">{r.label}</dd>
          </div>
        ))}
      </dl>
      <span className="mt-auto pt-6 text-sm font-semibold text-ink-950 group-hover:text-accent-700">
        Read the case study
      </span>
    </Link>
  );
}

/** Small pill links to services, used on industry and case study pages. */
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
