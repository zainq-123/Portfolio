import Link from "next/link";
import Breadcrumbs from "./breadcrumbs";
import Contact from "./contact";
import PillLink from "./pill-link";
import { projects } from "@/lib/data";
import { posts } from "@/lib/posts";

const dot = <span aria-hidden className="size-[3px] rounded-full bg-white/30" />;

// Left column of a case study — mirrors the reference's project page: back, title, live link, details.
export default function CaseSidebar({ project: p }) {
  const related = posts.filter((a) => a.projects.includes(p.slug));
  return (
    <div id="top" className="px-5 pt-5 pb-8 lg:pr-10">
      <div className="reveal" style={{ "--i": 0 }}>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: p.title, href: `/work/${p.slug}` }]} />
      </div>

      <p className="reveal mt-12 flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-muted uppercase" style={{ "--i": 1 }}>
        <span aria-hidden className="h-px w-6 bg-white/30" />
        Case study
      </p>
      <h1 className="reveal mt-4 text-[clamp(34px,3.2vw,48px)] leading-none font-medium tracking-[-0.05em]" style={{ "--i": 2 }}>
        {p.title}
      </h1>
      <p className="reveal mt-5 max-w-[520px] text-xl leading-[1.3] tracking-[-0.03em] text-muted" style={{ "--i": 3 }}>
        {p.tagline}
      </p>
      <div className="reveal mt-8" style={{ "--i": 4 }}>
        <PillLink href={p.url} external>
          View live site
        </PillLink>
      </div>

      <dl className="reveal mt-12 space-y-2.5 border-y border-line py-10" style={{ "--i": 5 }}>
        {p.meta.map((m) => (
          <div key={m.k} className="flex flex-wrap items-center gap-x-2 tracking-[-0.03em]">
            <dt className="text-muted">{m.k}</dt>
            {dot}
            <dd>{m.v}</dd>
          </div>
        ))}
        {/* Visible domain link — a descriptive backlink to the live project. */}
        <div className="flex flex-wrap items-center gap-x-2 tracking-[-0.03em]">
          <dt className="text-muted">Website</dt>
          {dot}
          <dd>
            <a href={p.url} target="_blank" rel="noopener" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {new URL(p.url).hostname}
            </a>
          </dd>
        </div>
      </dl>

      <section aria-labelledby="overview" className="reveal mt-10" style={{ "--i": 6 }}>
        <h2 id="overview" className="text-lg font-medium tracking-[-0.03em]">
          Overview.
        </h2>
        <p className="mt-4 max-w-[460px] leading-[1.45] tracking-[-0.03em] text-muted">{p.overview}</p>
      </section>

      {/* Every case study links to every other one (internal linking). */}
      <section aria-labelledby="more-work" className="reveal mt-10" style={{ "--i": 7 }}>
        <h2 id="more-work" className="text-lg font-medium tracking-[-0.03em]">
          More work.
        </h2>
        <ul className="mt-4 space-y-2.5">
          {projects
            .filter((o) => o.slug !== p.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link href={`/work/${o.slug}`} className="group inline-flex flex-wrap items-center gap-x-2 tracking-[-0.03em]">
                  <span className="decoration-white/40 underline-offset-4 group-hover:underline">{o.title}</span>
                  {dot}
                  <span className="text-sm text-muted">{o.category}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-writing" className="reveal mt-10" style={{ "--i": 8 }}>
          <h2 id="related-writing" className="text-lg font-medium tracking-[-0.03em]">
            Related writing.
          </h2>
          <ul className="mt-4 space-y-2.5">
            {related.map((a) => (
              <li key={a.slug}>
                <Link href={`/blog/${a.slug}`} className="tracking-[-0.03em] decoration-white/40 underline-offset-4 hover:underline">
                  {a.title}
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
