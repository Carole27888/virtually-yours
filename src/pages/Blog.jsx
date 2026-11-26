import { useSearchParams } from "react-router";
import Seo from "../components/Seo.jsx";
import Button from "../components/ui/Button.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Section } from "../components/ui/Section.jsx";
import { PostCard } from "../components/sections/BlogParts.jsx";
import { pageMeta } from "../lib/seo.js";
import { POSTS_PER_PAGE, blogIntro, categories, posts } from "../data/blog.js";

const chip = (active) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    active ? "bg-primary-900 text-white" : "border border-ink-300 bg-white text-ink-800 hover:border-ink-950"
  }`;

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const allCategories = categories();
  const active = allCategories.includes(params.get("category")) ? params.get("category") : null;
  const shown = Number(params.get("show")) || POSTS_PER_PAGE;

  const filtered = active ? posts.filter((p) => p.category === active) : posts;
  // The newest post gets a wide card on the unfiltered first view.
  const [featured, ...rest] = active ? [null, ...filtered] : filtered;
  const visible = rest.slice(0, shown);

  const update = (next) => {
    const p = new URLSearchParams(params);
    for (const [k, v] of Object.entries(next)) v ? p.set(k, v) : p.delete(k);
    setParams(p, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <Seo {...pageMeta("blog")} />
      <PageHeader eyebrow={blogIntro.eyebrow} title={blogIntro.title} text={blogIntro.text} showCta={false} />
      <Section>
        {posts.length === 0 ? (
          <p className="mx-auto max-w-xl text-center text-lg text-ink-600">Our first posts are on the way. Check back soon.</p>
        ) : (
          <>
            {allCategories.length > 1 && (
              <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
                <button type="button" className={chip(!active)} aria-pressed={!active} onClick={() => update({ category: null, show: null })}>
                  All posts
                </button>
                {allCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={chip(active === c)}
                    aria-pressed={active === c}
                    onClick={() => update({ category: c, show: null })}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {featured && (
              <Reveal className="mb-8">
                <PostCard post={featured} featured />
              </Reveal>
            )}

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>

            {rest.length > visible.length && (
              <div className="mt-14 text-center">
                <Button variant="outline" onClick={() => update({ show: String(shown + POSTS_PER_PAGE) })}>
                  Load more posts
                </Button>
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
}
