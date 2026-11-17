import { Quote } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { Section, SectionHeading } from "../ui/Section.jsx";
import { PlaceholderBadge, Text, visibleItems } from "../ui/Placeholder.jsx";
import { testimonials } from "../../data/testimonials.js";
import { testimonialsIntro } from "../../data/home.js";

/** Hidden automatically if there are no testimonials to show. */
export default function Testimonials() {
  const items = visibleItems(testimonials);
  if (items.length === 0) return null;

  return (
    <Section tone="tint">
      <SectionHeading {...testimonialsIntro} align="center" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal as="figure" key={i} delay={i * 100} className="card flex flex-col">
            <div className="flex items-start justify-between">
              <Quote className="size-8 text-accent-400" aria-hidden="true" />
              {t.isPlaceholder && <PlaceholderBadge />}
            </div>
            <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink-800">
              <Text>{t.quote}</Text>
            </blockquote>
            <figcaption className="mt-6 border-t border-ink-200 pt-5">
              <p className="font-semibold text-ink-950">
                <Text>{t.name}</Text>
              </p>
              <p className="text-sm text-ink-500">
                <Text>{t.role}</Text> · <Text>{t.location}</Text>
              </p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
