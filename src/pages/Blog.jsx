import { Link } from "react-router";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Section } from "../components/ui/Section.jsx";
import { PlaceholderBadge } from "../components/ui/Placeholder.jsx";
import { pageMeta } from "../lib/seo.js";
import { formatDate } from "../lib/format.js";
import { blogIntro, posts } from "../data/blog.js";

export function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="card card-hover group flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800">{post.category}</span>
        {post.isSample && <PlaceholderBadge>Sample post</PlaceholderBadge>}
      </div>
      <h2 className="mt-5 text-2xl font-bold leading-snug group-hover:text-accent-700">{post.title}</h2>
      <p className="mt-3 flex-1 leading-relaxed text-ink-600">{post.excerpt}</p>
      <p className="mt-6 border-t border-ink-200 pt-5 text-sm text-ink-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
      </p>
    </Link>
  );
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Seo {...pageMeta("blog")} />
      <PageHeader eyebrow={blogIntro.eyebrow} title={blogIntro.title} text={blogIntro.text} showCta={false} />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
