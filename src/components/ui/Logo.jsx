import { Link } from "react-router";
import { AGENCY_NAME, site } from "../../data/site.js";

/**
 * The logo image is public/logo.png, shown exactly as supplied.
 * On dark backgrounds it sits on a small off-white tile so its
 * colours stay readable without being changed.
 * `logo.showName` in src/data/site.js prints the name beside it.
 */
export default function Logo({ dark = false, className = "" }) {
  const { src, showName } = site.logo;
  // The first word stays plain; the rest ("Handled Co.") is clay.
  const [first, ...others] = AGENCY_NAME.trim().split(/\s+/);
  const rest = others.join(" ");
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label={`${AGENCY_NAME} home`}>
      <span className={`inline-flex shrink-0 ${dark ? "rounded-lg bg-paper p-1.5" : ""}`}>
        <img
          src={src}
          alt={showName ? "" : AGENCY_NAME}
          width="232"
          height="179"
          className={`w-auto object-contain ${dark ? "h-7" : "h-10"}`}
        />
      </span>
      {showName && (
        <span className={`font-display text-base font-bold tracking-tight whitespace-nowrap sm:text-lg ${dark ? "text-white" : "text-ink-950"}`}>
          {first}
          {rest && (
            <>
              {" "}
              <span className={dark ? "text-accent-400" : "text-accent-600"}>{rest}</span>
            </>
          )}
        </span>
      )}
    </Link>
  );
}
