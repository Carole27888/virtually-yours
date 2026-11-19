import { isPlaceholder, site } from "../../data/site.js";

/** Visible label for placeholder content (testimonials, team, sample posts). */
export function PlaceholderBadge({ children = "Placeholder" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900 ring-1 ring-amber-200">
      {children}
    </span>
  );
}

/**
 * Renders text, highlighting any [PLACEHOLDER] tokens so they are easy to
 * spot and replace.
 */
export function Text({ children }) {
  if (typeof children !== "string" || !isPlaceholder(children)) return children;
  const parts = children.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span key={i} className="placeholder-chip">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/**
 * A link that becomes plain, non-clickable text while its URL is still
 * a [PLACEHOLDER].
 */
export function SafeLink({ href, children, className = "", ...rest }) {
  if (isPlaceholder(href)) {
    return (
      <span
        className={`${className} cursor-default opacity-50`}
        title={site.showPlaceholders ? `Replace ${href} in src/data/site.js` : "Coming soon"}
        role={rest["aria-label"] ? "img" : undefined}
        aria-label={rest["aria-label"]}
      >
        {children}
      </span>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Filters out placeholder items when showPlaceholders is false in site.js. */
export const visibleItems = (items) =>
  site.showPlaceholders ? items : items.filter((i) => !i.isPlaceholder);
