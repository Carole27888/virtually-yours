import { CalendarCheck, Mail } from "lucide-react";
import { isPlaceholder, site } from "../data/site.js";

/**
 * Embeds your Calendly booking page. Set `calendlyUrl` in
 * src/data/site.js. Until then a placeholder box is shown.
 */
export default function CalendlyEmbed() {
  const url = site.calendlyUrl;

  // Live-site fallback while the Calendly link is not set yet.
  if (isPlaceholder(url) && !site.showPlaceholders) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-ink-200 bg-white p-10 text-center">
        <span className="icon-badge">
          <CalendarCheck className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-xl font-bold text-ink-950">Request your discovery call</p>
        <p className="mt-2 max-w-sm text-sm text-ink-600">
          Email us with a few times that suit you and we will confirm your free 30-minute call.
        </p>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Discovery call request")}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
        >
          <Mail className="size-4" aria-hidden="true" />
          {site.email}
        </a>
      </div>
    );
  }

  if (isPlaceholder(url)) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-300 bg-white p-10 text-center">
        <span className="icon-badge">
          <CalendarCheck className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-xl font-bold text-ink-950">Calendly booking calendar</p>
        <p className="mt-2 max-w-sm text-sm text-ink-600">
          Add your Calendly link as <code className="placeholder-chip">calendlyUrl</code> in{" "}
          <code className="placeholder-chip">src/data/site.js</code> and your booking calendar will appear here.
        </p>
      </div>
    );
  }

  const src = `${url}${url.includes("?") ? "&" : "?"}hide_gdpr_banner=1&primary_color=c2603e`;
  return (
    <iframe
      src={src}
      title="Book a free discovery call"
      loading="lazy"
      className="h-[700px] w-full rounded-2xl border border-ink-200 bg-white"
    />
  );
}
