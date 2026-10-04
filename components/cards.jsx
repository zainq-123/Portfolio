import Image from "next/image";
import Link from "next/link";
import PostCover from "./post-cover";
import { projects } from "@/lib/data";
import { formatDate, posts } from "@/lib/posts";

// Server-rendered card lists, handed to the client <Showcase> tabs as props (no card JS ships).
// B&W until hovered/focused (hover-capable devices only) — same as the reference.
const mono =
  "transition duration-700 ease-out-expo [@media(hover:hover)]:grayscale group-hover:scale-[1.03] group-hover:grayscale-0 group-has-[a:focus-visible]:scale-[1.03] group-has-[a:focus-visible]:grayscale-0";

export function ProjectCards() {
  return projects.map((p, index) => (
    <li
      key={p.slug}
      className={`reveal group relative overflow-hidden rounded-xl bg-ink-2 [--reveal-blur:0px] ${p.featured ? "sm:col-span-2" : ""}`}
      style={{ "--i": index }}
    >
      <div className="relative aspect-[21/10]">
        <Image
          src={p.image}
          alt={`${p.title} — ${p.category} website`}
          fill
          sizes={p.featured ? "(min-width: 1024px) 70vw, 100vw" : "(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : undefined}
          className={`object-cover object-top ${mono}`}
        />
      </div>
      {/* Whole card opens the case study; the "View live" pill sits above it as its own link. */}
      <Link href={`/work/${p.slug}`} aria-label={`${p.title} — case study`} className="absolute inset-0 rounded-xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/75 via-black/25 to-transparent px-4 pt-16 pb-4 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-has-[a:focus-visible]:translate-y-0 group-has-[a:focus-visible]:opacity-100 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0">
        <h3 className="text-base font-medium tracking-[-0.03em]">{p.title}</h3>
        <span className="text-sm tracking-[-0.03em] text-white/80">{p.category}</span>
      </div>
      <a
        href={p.url}
        target="_blank"
        rel="noopener"
        aria-label={`View live: ${p.title} (opens in a new tab)`}
        className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 py-1.5 pr-3 pl-2.5 text-[13px] font-medium tracking-[-0.02em] backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
      >
        <span className="size-1.5 rounded-full bg-emerald-400" />
        View live
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-3">
          <path d="M3 11 11 3M4.5 3H11v6.5" />
        </svg>
      </a>
    </li>
  ));
}

// `Heading` is h3 under the home page's sections and h2 on the /blog index (one H1 per page, no skipped levels).
export function ArticleCards({ Heading = "h3" }) {
  return posts.map((a, index) => {
    const featured = index === 0;
    return (
      <li key={a.slug} className={`reveal [--reveal-blur:0px] ${featured ? "sm:col-span-2" : ""}`} style={{ "--i": index }}>
        <Link href={`/blog/${a.slug}`} className="group block">
          <PostCover
            post={a}
            className={featured ? "aspect-[21/9]" : "aspect-[16/10]"}
            sizes={featured ? "(min-width: 1024px) 70vw, 100vw" : "(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"}
            imgClassName={mono}
          />
          <p className="mt-4 flex flex-wrap items-center gap-x-2 text-[13px] tracking-[-0.02em] text-muted">
            <span className="text-white">{a.tag}</span>
            <span aria-hidden className="size-[3px] rounded-full bg-white/30" />
            {a.readTime}
            <span aria-hidden className="size-[3px] rounded-full bg-white/30" />
            <time dateTime={a.date}>{formatDate(a.date)}</time>
          </p>
          <Heading
            className={`mt-2 max-w-[30ch] leading-[1.15] font-medium tracking-[-0.04em] decoration-white/30 underline-offset-4 group-hover:underline ${featured ? "text-[clamp(24px,2.4vw,32px)]" : "text-[22px]"}`}
          >
            {a.title}
          </Heading>
          <p className="mt-2 max-w-[56ch] text-[15px] leading-[1.45] tracking-[-0.02em] text-muted">{a.excerpt}</p>
        </Link>
      </li>
    );
  });
}
