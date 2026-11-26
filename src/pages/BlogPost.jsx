import { useParams } from "react-router";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import { Container, Section } from "../components/ui/Section.jsx";
import { PostBody, PostCard } from "../components/sections/BlogParts.jsx";
import { absoluteUrl, postMeta } from "../lib/seo.js";
import { formatDate } from "../lib/format.js";
import { AGENCY_NAME, site } from "../data/site.js";
import { getPost, posts } from "../data/blog.js";
import NotFound from "./NotFound.jsx";

/** Up to three other posts, same category first, then the newest. */
function related(post) {
  const others = posts.filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, 3);
}

/** Article details for Google (structured data). */
function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: AGENCY_NAME, logo: { "@type": "ImageObject", url: absoluteUrl(site.logo.src) } },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(site.ogImage),
  };
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const more = related(post);

  return (
    <>
      <Seo {...postMeta(post)} />
      <script type="application/ld+json">{JSON.stringify(articleSchema(post))}</script>
      <PageHeader eyebrow={post.category} title={post.title} back={{ label: "All posts", href: "/blog" }} showCta={false}>
        <p className="mt-6 text-primary-300">
          By {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
        </p>
      </PageHeader>

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl!">
          {post.excerpt && <p className="mb-8 font-display text-xl leading-relaxed text-ink-950">{post.excerpt}</p>}
          <PostBody blocks={post.body} />
        </Container>
      </article>

      {more.length > 0 && (
        <Section tone="tint">
          <h2 className="text-3xl font-bold">Keep reading</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} as="h3" />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
