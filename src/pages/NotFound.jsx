import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Button from "../components/ui/Button.jsx";
import { pageSeo } from "../data/seo.js";

export default function NotFound() {
  return (
    <>
      <Seo {...pageSeo.notFound} path="/404" noindex />
      <PageHeader eyebrow="404" title="We could not find that page" text="It may have moved, or the link may be out of date." showCta={false}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/" size="lg" arrow>
            Back to home
          </Button>
          <Button href="/services" size="lg" variant="outlineLight">
            Explore services
          </Button>
        </div>
      </PageHeader>
    </>
  );
}
