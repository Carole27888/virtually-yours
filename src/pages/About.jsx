import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import { Section, SectionHeading } from "../components/ui/Section.jsx";
import { PlaceholderBadge, Text, visibleItems } from "../components/ui/Placeholder.jsx";
import { Icon } from "../lib/icons.jsx";
import { pageMeta } from "../lib/seo.js";
import { aboutIntro, mission, story, teamIntro, values } from "../data/about.js";
import { founder, team } from "../data/team.js";

function initials(name) {
  if (name.startsWith("[")) return "?";
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamCard({ member }) {
  return (
    <div className="card flex h-full flex-col">
      {member.photo ? (
        <img src={member.photo} alt={`Portrait of ${member.name}`} className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-paper-200 font-display text-5xl font-bold text-primary-300" aria-hidden="true">
          {initials(member.name)}
        </div>
      )}
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold">
          <Text>{member.name}</Text>
        </h3>
        {member.isPlaceholder && <PlaceholderBadge />}
      </div>
      <p className="text-sm font-medium text-accent-700">
        <Text>{member.role}</Text>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">
        <Text>{member.bio}</Text>
      </p>
    </div>
  );
}

export default function About() {
  const members = visibleItems(team);

  return (
    <>
      <Seo {...pageMeta("about")} />
      <PageHeader eyebrow={aboutIntro.eyebrow} title={aboutIntro.title} text={aboutIntro.text} />

      {/* Story + mission */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">{story.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="on-dark self-start rounded-3xl bg-primary-900 p-8 sm:p-10">
            <p className="eyebrow">{mission.title}</p>
            <p className="mt-5 font-display text-2xl leading-snug font-semibold text-white">{mission.text}</p>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="tint">
        <SectionHeading eyebrow="Our values" title="What you can count on" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70} className="card">
              <span className="icon-badge">
                <Icon name={v.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <Section>
        <div className={founder.photo ? "grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20" : "max-w-3xl"}>
          {founder.photo && (
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 hidden translate-x-4 translate-y-4 rounded-3xl bg-primary-900 sm:block" aria-hidden="true" />
            <img
              src={founder.photo}
              alt={founder.photoAlt}
              loading="lazy"
              width="800"
              height="800"
              className="relative aspect-square w-full rounded-3xl object-cover"
            />
          </Reveal>
          )}
          <Reveal delay={120}>
            <p className="eyebrow">Meet the founder</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{founder.name}</h2>
            <p className="mt-2 font-medium text-accent-700">
              {founder.role}
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              {founder.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Team */}
      {members.length > 0 && (
        <Section tone="tint">
          <SectionHeading eyebrow="Our people" title={teamIntro.title} text={teamIntro.text} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((m, i) => (
              <Reveal key={i} delay={i * 70}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="text-ink-700">Want to join the team?</p>
            <Button href="/careers" variant="outline" arrow>
              See open roles
            </Button>
          </div>
        </Section>
      )}
    </>
  );
}
