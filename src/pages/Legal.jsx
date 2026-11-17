import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import { Container } from "../components/ui/Section.jsx";
import { Text } from "../components/ui/Placeholder.jsx";
import { pageMeta } from "../lib/seo.js";
import { privacyPolicy, termsOfService } from "../data/legal.js";

function LegalPage({ doc, seoKey }) {
  return (
    <>
      <Seo {...pageMeta(seoKey)} />
      <PageHeader eyebrow="Legal" title={doc.title} showCta={false}>
        <p className="mt-6 text-primary-300">
          Last updated: <Text>{doc.lastUpdated}</Text>
        </p>
      </PageHeader>
      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl!">
          <div className="prose-content">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4">
                    <Text>{p}</Text>
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}

export const Privacy = () => <LegalPage doc={privacyPolicy} seoKey="privacy" />;
export const Terms = () => <LegalPage doc={termsOfService} seoKey="terms" />;
