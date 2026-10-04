import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./breadcrumbs";
import Contact from "./contact";
import { projects } from "@/lib/data";
import { formatDate } from "@/lib/posts";

const dot = <span aria-hidden className="size-[3px] rounded-full bg-white/30" />;
const heading = "text-lg font-medium tracking-[-0.03em]";

// Left column of an article: breadcrumbs, H1, meta, author (ZW_DEVS backlink), table of contents, related work.
export default function PostSidebar({ post }) {
  const related = projects.filter((p) => post.projects?.includes(p.slug));
  return (
    <div id="top" className="px-5 pt-5 pb-8 lg:pr-10">
      <div className="reveal" style={{ "--i": 0 }}>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Writing", href: "/blog" },
            { name: post.cover, href: `/blog/${post.slug}` },
          ]}
        />
      </div>

      <p className="reveal mt-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-muted uppercase" style={{ "--i": 1 }}>
        <span aria-hidden className="h-px w-6 bg-white/30" />
        {post.tag}
      </p>
      <h1 className="reveal mt-4 text-[clamp(30px,2.6vw,42px)] leading-[1.08] font-medium tracking-[-0.045em]" style={{ "--i": 2 }}>
        {post.title}
      </h1>
      <p className="reveal mt-5 max-w-[520px] text-lg leading-[1.4] tracking-[-0.03em] text-muted" style={{ "--i": 3 }}>
        {post.excerpt}
      </p>
      <p className="reveal mt-5 flex flex-wrap items-center gap-x-2 text-sm text-muted" style={{ "--i": 4 }}>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {dot}
        {post.readTime}
      </p>

      <div className="reveal mt-8 flex items-center gap-3 border-y border-line py-6" style={{ "--i": 5 }}>
        <Image src="/zain.jpg" alt="" width={44} height={44} className="size-11 rounded-xl object-cover ring-1 ring-white/10" />
        <div className="text-sm leading-snug tracking-[-0.02em]">
          <p>
            Written by{" "}
            <Link href="/" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Zain
            </Link>
          </p>
          <p className="text-muted">
            Founder,{" "}
            <a href="https://zwdevs.com" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              ZW_DEVS
            </a>
          </p>
        </div>
      </div>

      <nav aria-labelledby="toc" className="reveal mt-10" style={{ "--i": 6 }}>
        <h2 id="toc" className={heading}>
          On this page.
        </h2>
        <ol className="mt-4 space-y-2 text-[15px] tracking-[-0.02em]">
          {post.toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-muted transition-colors hover:text-white">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {related.length > 0 && (
        <section aria-labelledby="related-work" className="mt-10">
          <h2 id="related-work" className={heading}>
            Related work.
          </h2>
          <ul className="mt-4 space-y-2.5">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="group inline-flex flex-wrap items-center gap-x-2 tracking-[-0.03em]">
                  <span className="decoration-white/40 underline-offset-4 group-hover:underline">{p.title}</span>
                  {dot}
                  <span className="text-sm text-muted">{p.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Contact />
    </div>
  );
}
