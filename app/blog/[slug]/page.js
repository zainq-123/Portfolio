import Link from "next/link";
import JsonLd from "@/components/json-ld";
import Panel from "@/components/panel";
import PostCover from "@/components/post-cover";
import PostSidebar from "@/components/post-sidebar";
import { site } from "@/lib/data";
import { posts } from "@/lib/posts";
import { blogPosting } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    // Page-level openGraph replaces the layout's, so siteName/locale are repeated here.
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: `/blog/${p.slug}`,
      title: p.title,
      description: p.description,
      publishedTime: p.date,
      authors: [site.url],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = posts.find((x) => x.slug === slug);
  const others = posts.filter((x) => x.slug !== slug);

  return (
    <main className="lg:grid lg:h-dvh lg:grid-cols-[minmax(360px,30%)_1fr] lg:overflow-hidden">
      <JsonLd data={blogPosting(post)} />
      <Panel>
        <PostSidebar post={post} />
      </Panel>
      <Panel>
        <div className="px-5 pb-12 lg:pt-5 lg:pl-0">
          <figure>
            <PostCover post={post} hero className="aspect-[21/9]" sizes="(min-width: 1024px) 70vw, 100vw" />
            <figcaption className="mt-3 text-xs tracking-[-0.01em] text-muted">
              Photo:{" "}
              <a href={post.image.source} className="underline decoration-white/30 underline-offset-2 hover:text-white">
                {post.image.credit}
              </a>{" "}
              · CC0 via Wikimedia Commons
            </figcaption>
          </figure>

          <article className="prose-article mx-auto mt-12 max-w-[68ch] lg:px-2">
            <post.Body />
          </article>

          {/* Studio call-to-action — the ZW_DEVS backlink every article carries. */}
          <aside className="mx-auto mt-16 max-w-[68ch] rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-[11px] font-medium tracking-[0.25em] text-muted uppercase">Work with ZW_DEVS</p>
            <p className="mt-3 text-xl leading-[1.35] tracking-[-0.03em]">
              Need a fast, SEO-friendly website or a full-stack app?{" "}
              <a href="https://zwdevs.com" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                ZW_DEVS
              </a>{" "}
              designs and builds them — from storefronts like{" "}
              <a href="https://kairo.zwdevs.com" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                Kairo
              </a>{" "}
              to restaurant sites.
            </p>
          </aside>

          <section aria-labelledby="more-writing" className="mx-auto mt-16 max-w-[68ch]">
            <h2 id="more-writing" className="text-lg font-medium tracking-[-0.03em]">
              More writing.
            </h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/blog/${o.slug}`} className="group flex items-baseline justify-between gap-4 py-4">
                    <span className="tracking-[-0.03em] decoration-white/40 underline-offset-4 group-hover:underline">{o.title}</span>
                    <span className="shrink-0 text-sm text-muted">{o.readTime}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Panel>
    </main>
  );
}
