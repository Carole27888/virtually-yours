import Seo from "../components/Seo.jsx";
import Button from "../components/ui/Button.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { pageMeta } from "../lib/seo.js";
import { site } from "../data/site.js";
import { faqIntro, faqs } from "../data/faq.js";

/**
 * Every question is a heading with its answer fully visible, which is
 * what search engines and AI answer tools read best. The same questions
 * are published as FAQPage structured data (scripts/postbuild.mjs).
 */
export default function Faq() {
  return (
    <>
      <Seo {...pageMeta("faq")} />
      <PageHeader eyebrow={faqIntro.eyebrow} title={faqIntro.title} text={faqIntro.text} showCta={false} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <dl className="divide-y divide-ink-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-8 first:pt-0">
                <dt>
                  <h2 className="text-2xl font-bold">{f.q}</h2>
                </dt>
                <dd className="mt-3 text-lg leading-relaxed text-ink-700">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 rounded-2xl bg-paper-200 p-8">
            <h2 className="text-xl font-bold">Have a question we have not answered?</h2>
            <p className="mt-2 text-ink-600">
              Email us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-accent-700 underline underline-offset-4">
                {site.email}
              </a>{" "}
              or book a free discovery call.
            </p>
            <Button href={site.cta.href} arrow className="mt-6">
              {site.cta.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
