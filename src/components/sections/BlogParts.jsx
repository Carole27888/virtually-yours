import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { parseInline } from "../../lib/markdown.js";
import { formatDate } from "../../lib/format.js";

/** Bold, italics and links inside a line of text. */
function Inline({ text }) {
  return parseInline(text).map((piece, i) => {
    if (typeof piece === "string") return piece;
    if (piece.type === "strong") return <strong key={i}>{piece.text}</strong>;
    if (piece.type === "em") return <em key={i}>{piece.text}</em>;
    const external = /^https?:\/\//.test(piece.href) && !piece.href.includes("virtuallyhandledco.com");
    if (!external && piece.href.startsWith("/")) {
      return (
        <Link key={i} to={piece.href}>
          {piece.text}
        </Link>
      );
    }
    return (
      <a key={i} href={piece.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {piece.text}
      </a>
    );
  });
}

/** The body of a post, from the blocks built in data/blog.js. */
export function PostBody({ blocks }) {
  return (
    <div className="prose-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i}>
                <Inline text={block.text} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={i}>
                <Inline text={block.text} />
              </h3>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "quote":
            return (
              <blockquote key={i}>
                <Inline text={block.text} />
              </blockquote>
            );
          case "img":
            return <img key={i} src={block.src} alt={block.alt} loading="lazy" />;
          case "hr":
            return <hr key={i} />;
          default:
            return (
              <p key={i}>
                <Inline text={block.text} />
              </p>
            );
        }
      })}
    </div>
  );
}

/** Card linking to a post. `featured` makes a wide version for the newest post. */
export function PostCard({ post, featured = false, as: H = "h2" }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`card card-hover group flex h-full flex-col overflow-hidden ${
        featured && post.image ? "lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-0" : featured ? "lg:p-12" : ""
      }`}
    >
      {post.image && (
        <img
          src={featured ? post.image : post.imageSmall}
          alt=""
          loading="lazy"
          width={featured ? 1600 : 800}
          height={featured ? 840 : 420}
          className={`-mx-6 -mt-6 mb-6 aspect-[40/21] w-[calc(100%+3rem)] max-w-none bg-paper-200 object-cover sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)] ${
            featured ? "lg:m-0 lg:h-full lg:w-full lg:aspect-auto" : ""
          }`}
        />
      )}
      <div className={featured && post.image ? "flex flex-col lg:py-12 lg:pr-12" : "contents"}>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800">{post.category}</span>
        <ArrowUpRight
          className="size-5 text-primary-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600"
          aria-hidden="true"
        />
      </div>
      {featured && <p className="mt-6 text-xs font-bold tracking-[0.18em] text-accent-700 uppercase">Latest post</p>}
      <H
        className={`font-bold leading-snug group-hover:text-accent-700 ${
          featured ? "mt-3 max-w-3xl text-3xl sm:text-4xl" : "mt-5 text-2xl"
        }`}
      >
        {post.title}
      </H>
      <p className={`mt-3 flex-1 leading-relaxed text-ink-600 ${featured ? "max-w-2xl text-lg" : ""}`}>{post.excerpt}</p>
      <p className="mt-6 border-t border-ink-200 pt-5 text-sm text-ink-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
      </p>
      </div>
    </Link>
  );
}
