import { Link } from "react-router";
import { AGENCY_NAME } from "../../data/site.js";

/** Text logo built from AGENCY_NAME. */
export default function Logo({ dark = false, className = "" }) {
  const initial = AGENCY_NAME.trim().charAt(0).toUpperCase();
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${AGENCY_NAME} home`}>
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-lg bg-accent-500 font-display text-lg font-extrabold text-white transition-transform group-hover:-rotate-6"
      >
        {initial}
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink-950"}`}>
        {AGENCY_NAME}
      </span>
    </Link>
  );
}
