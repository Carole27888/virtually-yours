import { Link } from "react-router";
import { AGENCY_NAME, site } from "../../data/site.js";

/**
 * The logo image is public/logo.png, shown exactly as supplied.
 * If your logo is a symbol without the name, set
 * `logo.showName: true` in src/data/site.js to print the name beside it.
 */
export default function Logo({ dark = false, className = "" }) {
  const { src, showName } = site.logo;
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label={`${AGENCY_NAME} home`}>
      <img src={src} alt={showName ? "" : AGENCY_NAME} className="h-10 w-auto max-w-48 object-contain" />
      {showName && (
        <span className={`font-display text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink-950"}`}>
          {AGENCY_NAME}
        </span>
      )}
    </Link>
  );
}
