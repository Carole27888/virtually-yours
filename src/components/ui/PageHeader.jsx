import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Container } from "./Section.jsx";
import Button from "./Button.jsx";
import { site } from "../../data/site.js";

/** Dark hero band used at the top of inner pages. */
export default function PageHeader({ eyebrow, title, text, back, showCta = true, children }) {
  return (
    <header className="on-dark relative bg-primary-900 pt-36 pb-20 sm:pt-40 sm:pb-24">
      <Container className="relative">
        <div className="max-w-3xl">
          {back && (
            <Link
              to={back.href}
              className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-primary-300 transition hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {back.label}
            </Link>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-200 sm:text-xl">{text}</p>}
          {children}
          {showCta && (
            <div className="mt-9">
              <Button href={site.cta.href} size="lg" arrow>
                {site.cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
