import { useParams } from "react-router";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import { Container, Section } from "../components/ui/Section.jsx";
import { PlaceholderBadge } from "../components/ui/Placeholder.jsx";
import { postMeta } from "../lib/seo.js";
import { formatDate } from "../lib/format.js";
import { getPost, posts } from "../data/blog.js";
import { PostCard } from "./Blog.jsx";
import NotFound from "./NotFound.jsx";

/** Renders one body block from blog.js. */
function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo {...postMeta(post)} />
      <PageHeader eyebrow={post.category} title={post.title} back={{ label: "All resources", href: "/blog" }} showCta={false}>
        <p className="mt-6 text-primary-300">
          By {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
        </p>
      </PageHeader>

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl!">
          {post.isSample && (
            <div className="mb-10 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
              <PlaceholderBadge>Sample post</PlaceholderBadge>
              <span>This is placeholder content. Edit or replace it in src/data/blog.js.</span>
            </div>
          )}
          <p className="mb-8 font-display text-xl leading-relaxed text-ink-950">{post.excerpt}</p>
          <div className="prose-content">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </article>

      {more.length > 0 && (
        <Section tone="tint">
          <h2 className="text-3xl font-bold">Keep reading</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
