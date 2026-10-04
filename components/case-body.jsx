import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";
import Reveal from "./reveal";

function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-muted uppercase">
      <span aria-hidden className="h-px w-6 bg-white/30" />
      {children}
    </p>
  );
}

const heading = "mt-4 text-[clamp(32px,3.6vw,52px)] leading-[1.05] font-medium tracking-[-0.05em]";

// Right column of a case study: hero shot → "The build" cards → alternating image/text rows → next project.
// Server component; only the <Reveal> wrappers ship JS.
export default function CaseBody({ project: p, next }) {
  return (
    <div className="px-5 pb-10 lg:pt-5 lg:pl-0">
      {/* The page's LCP image: no entrance animation, fetched first. */}
      <div className="relative aspect-[21/10] overflow-hidden rounded-xl bg-ink-2">
        <Image
          src={p.image}
          alt={`${p.title} — home page`}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-top"
        />
      </div>

      <section aria-labelledby="build" className="pt-24 lg:px-8">
        <Reveal>
          <Eyebrow>The build</Eyebrow>
          <h2 id="build" className={heading}>
            {p.build.heading}
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {p.build.items.map((f, i) => (
            <Reveal
              key={f.title}
              as="li"
              delay={(i % 2) * 0.08}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]"
            >
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/85">
                <Icon name={f.icon} className="size-5" />
              </span>
              <h3 className="mt-6 text-[17px] font-medium tracking-[-0.03em]">{f.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] tracking-[-0.01em] text-muted">{f.body}</p>
              <p className="mt-auto pt-6 font-mono text-[11px] tracking-widest text-white/50">
                {String(i + 1).padStart(2, "0")}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-labelledby="inside" className="pt-28 lg:px-8">
        <Reveal>
          <Eyebrow>Inside the build</Eyebrow>
          <h2 id="inside" className={heading}>
            {p.inside.heading}
          </h2>
          <p className="mt-4 max-w-[420px] leading-[1.5] tracking-[-0.02em] text-muted">{p.inside.intro}</p>
        </Reveal>

        {/* Zig-zag on wide screens: image left / text right, then text left / image right. Stacks below 1280px,
            where the 70% column is too narrow for two columns. */}
        <div className="mt-14 space-y-20">
          {p.inside.items.map((row, i) => (
            <Reveal key={row.title} as="article" className="grid items-center gap-8 xl:grid-cols-2 xl:gap-12">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 ${i % 2 ? "xl:order-2" : ""}`}>
                <Image
                  src={row.image}
                  alt={`${p.title} — ${row.title}`}
                  fill
                  sizes="(min-width: 1280px) 35vw, (min-width: 1024px) 70vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <Eyebrow>{row.eyebrow}</Eyebrow>
                <h3 className="mt-4 text-[clamp(26px,2.4vw,36px)] leading-[1.1] font-medium tracking-[-0.04em]">{row.title}</h3>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.65] tracking-[-0.01em] text-muted">{row.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-28 flex items-end justify-between gap-6 border-t border-line pt-8 lg:mx-8"
      >
        <div>
          <p className="text-sm tracking-[-0.02em] text-muted">Next project</p>
          <p className="mt-2 text-[clamp(32px,4vw,56px)] leading-none font-medium tracking-[-0.05em] transition-colors duration-300 group-hover:text-white/70">
            {next.title}
          </p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-black transition-transform duration-500 ease-out-expo group-hover:-rotate-45">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-4">
            <path d="M2.5 7h9M7.5 3l4 4-4 4" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
