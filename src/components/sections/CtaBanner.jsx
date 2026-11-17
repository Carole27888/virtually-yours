import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import { Container } from "../ui/Section.jsx";
import { site } from "../../data/site.js";
import { finalCta } from "../../data/home.js";

/** "Book a free discovery call" banner shown above the footer on every page. */
export default function CtaBanner() {
  return (
    <section className="bg-paper py-20 sm:py-24" aria-labelledby="cta-heading">
      <Container>
        <Reveal className="on-dark rounded-3xl bg-primary-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-200">{finalCta.text}</p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <Button href={site.cta.href} size="lg" arrow>
                {site.cta.label}
              </Button>
              <p className="text-sm text-primary-300">{site.cta.note}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
