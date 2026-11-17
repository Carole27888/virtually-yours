import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-accent-500 text-white hover:bg-accent-600",
  dark: "bg-primary-900 text-white hover:bg-primary-800",
  outline: "border border-ink-300 bg-white text-ink-950 hover:border-ink-950",
  outlineLight: "border border-white/25 text-white hover:border-white hover:bg-white/5",
  link: "text-ink-950 underline-offset-4 hover:text-accent-700 hover:underline px-0! py-0!",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Renders a router Link for internal paths, a plain <a> for external
 * URLs, or a <button> when no href is given.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (!href) {
    return (
      <button className={cls} {...rest}>
        {content}
      </button>
    );
  }
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link to={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
