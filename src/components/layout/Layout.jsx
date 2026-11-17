import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CtaBanner from "../sections/CtaBanner.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

/** Scrolls to the top on page change, or to #anchor when the URL has one. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a frame so the new page has rendered.
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const hideCta = pathname.startsWith("/contact");

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-accent-500 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      {!hideCta && <CtaBanner />}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
