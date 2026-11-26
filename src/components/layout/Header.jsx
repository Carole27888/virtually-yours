import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import { Container } from "../ui/Section.jsx";
import { mainNav, site } from "../../data/site.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the page changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-ink-200 bg-paper" : "bg-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6 py-3">
        <Logo dark={!solid} />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      solid
                        ? isActive
                          ? "text-accent-700"
                          : "text-ink-700 hover:text-ink-950"
                        : isActive
                          ? "text-accent-300"
                          : "text-primary-100 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button href={site.cta.href}>{site.cta.label}</Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex size-11 items-center justify-center rounded-full xl:hidden ${
              solid ? "text-ink-950 hover:bg-paper-200" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink-200 bg-white xl:hidden">
          <Container className="py-6">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-ink-200">
                {[...mainNav, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }].map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-4 font-display text-xl font-semibold ${isActive ? "text-accent-700" : "text-ink-950"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href={site.cta.href} size="lg" arrow className="mt-8 w-full">
              {site.cta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
