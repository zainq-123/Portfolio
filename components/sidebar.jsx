import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";
import DrawLine from "./draw-line";
import PillLink from "./pill-link";
import YearTrack from "./year-track";
import { contact, education, experience, logos, skills } from "@/lib/data";
import { posts } from "@/lib/posts";

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent("Project enquiry")}`;

// Server component: only PillLink and DrawLine ship JS. In-text links to case studies (internal linking).
const inline = "underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60";

// Entrance is the CSS `reveal` utility (runs on first paint, no JS wait → fast LCP); `--i` staggers it.
export default function Sidebar() {
  return (
    <div id="top" className="px-5 pt-5 pb-8 lg:pr-10">
      <header className="reveal flex items-center gap-5" style={{ "--i": 0 }}>
        <div className="relative size-[108px] shrink-0 overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04] hover:-rotate-2">
          <Image src="/zain.jpg" alt="Zain" fill sizes="108px" loading="eager" className="object-cover" />
        </div>
        <div>
          <h1 className="text-[28px] leading-none font-medium tracking-[-0.05em]">Zain</h1>
          <p className="mt-2 text-base tracking-[-0.03em] text-muted">Full-Stack Developer</p>
        </div>
      </header>

      <p className="reveal mt-8 max-w-[520px] text-xl leading-[1.3] tracking-[-0.03em]" style={{ "--i": 1 }}>
        I build fast, SEO-friendly websites{" "}
        <span className="text-muted">
          — from{" "}
          <Link href="/work/kairo" className={inline}>
            streetwear stores
          </Link>{" "}
          to{" "}
          <Link href="/work/rps-cafe" className={inline}>
            cafés
          </Link>{" "}
          and{" "}
          <Link href="/work/ghosts-games" className={inline}>
            retro game shops
          </Link>{" "}
          —
        </span>{" "}
        focused on performance, clean code, and smooth, purposeful motion.
      </p>

      <p className="reveal mt-7 flex items-center gap-2 text-sm tracking-[-0.03em] text-muted" style={{ "--i": 2 }}>
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 motion-reduce:hidden" />
          <span className="size-1.5 rounded-full bg-emerald-400" />
        </span>
        Available for work.
      </p>

      <div className="reveal mt-7" style={{ "--i": 3 }}>
        {/* Opens a Gmail draft to Zain with the subject filled in. */}
        <PillLink href={gmailCompose} beam external>
          Start a project
        </PillLink>
      </div>

      <section aria-labelledby="stack" className="reveal mt-12 border-y border-line py-10" style={{ "--i": 4 }}>
        <h2 id="stack" className="sr-only">
          Tech stack
        </h2>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          {/* Two copies of the list scroll by -50% for a seamless loop; reduced motion gets a static wrap. */}
          <ul className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:gap-y-4">
            {[...logos, ...logos].map((s, i) => (
              <li
                key={i}
                aria-hidden={i >= logos.length || undefined}
                className={`flex items-center gap-2.5 pr-10 text-[#8c8c8c] transition-colors duration-300 hover:text-white ${i >= logos.length ? "motion-reduce:hidden" : ""}`}
              >
                <svg viewBox={s.viewBox ?? "0 0 24 24"} aria-hidden className={`h-6 fill-current ${s.viewBox ? "w-auto" : "w-6"}`}>
                  <path d={s.icon} />
                </svg>
                <span className={s.viewBox ? "sr-only" : "text-[17px] font-medium tracking-[-0.04em] whitespace-nowrap"}>
                  {s.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about" className="reveal mt-10" style={{ "--i": 5 }}>
        <h2 id="about" className="text-lg font-medium tracking-[-0.03em]">
          About me.
        </h2>
        <p className="mt-4 max-w-[440px] leading-[1.4] tracking-[-0.03em] text-muted">
          I&apos;m Zain — an undergraduate student at the University of Central Punjab and a full-stack developer.
          Alongside Java, I work across the MERN stack and SEO, and I&apos;ve already built real projects that are live
          today: a full-stack clothing store, restaurant and café websites, and retro game shops.
        </p>
      </section>

      <section aria-labelledby="education" className="reveal mt-10" style={{ "--i": 6 }}>
        <h2 id="education" className="text-lg font-medium tracking-[-0.03em]">
          Education.
        </h2>
        {/* Connected dots: ●────● — each line spans its column + the gap to reach the next dot. The current
            entry is only as wide as its text, so its progress track ends exactly where the text ends. */}
        <ol className="mt-6 grid grid-cols-2 gap-x-12">
          {education.map((e, i) => (
            <li key={e.school} className={`relative ${e.current ? "w-fit" : ""}`}>
              {i < education.length - 1 && (
                <DrawLine className="absolute top-[5px] left-[5px] h-px w-[calc(100%+3rem)] origin-left bg-linear-to-r from-white/25 to-white/60" />
              )}
              {e.current && <YearTrack start={e.start} end={e.end} />}
              <span className="relative block size-[11px] rounded-full bg-white/45" />
              <p className="mt-4 text-[13px] tracking-[-0.02em] text-muted">
                {e.start} — {e.end}
              </p>
              <h3 className="mt-1 text-[15px] leading-snug font-medium tracking-[-0.03em]">{e.school}</h3>
              <p className="mt-0.5 text-[13px] tracking-[-0.02em] text-muted">{e.level}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills" className="reveal mt-10" style={{ "--i": 7 }}>
        <h2 id="skills" className="text-lg font-medium tracking-[-0.03em]">
          Skills.
        </h2>
        <ol className="mt-6 space-y-5">
          {skills.map((g, i) => (
            <li key={g.title} className="flex gap-3">
              <span className="tracking-[-0.03em] text-muted tabular-nums">{i + 1}.</span>
              <div>
                <h3 className="font-medium tracking-[-0.03em]">{g.title}</h3>
                <ul className="mt-1 flex flex-wrap gap-x-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-muted">
                  {g.items.map((s, j) => (
                    <li key={s} className="whitespace-nowrap">
                      {s}
                      {j < g.items.length - 1 && " •"}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="experience" className="reveal mt-10" style={{ "--i": 8 }}>
        <h2 id="experience" className="text-lg font-medium tracking-[-0.03em]">
          Experience.
        </h2>
        <ol className="mt-6 space-y-6">
          {experience.map((x) => (
            <li key={x.company} className="flex gap-4">
              {x.logo ? (
                <Image src={x.logo} alt="" width={44} height={44} unoptimized className="size-11 shrink-0 rounded-xl" />
              ) : (
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 font-mono text-xs font-medium"
                >
                  {x.mark}
                </span>
              )}
              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-x-2 tracking-[-0.03em]">
                  <span className="font-medium">{x.role}</span>
                  <span aria-hidden className="size-[3px] rounded-full bg-white/30" />
                  <a
                    href={x.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    {x.company}
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-3">
                      <path d="M3 11 11 3M4.5 3H11v6.5" />
                    </svg>
                  </a>
                </h3>
                {/* Dates on their own line, so a wrap never leaves a dangling separator dot. */}
                <p className="mt-1 flex items-center gap-1.5 text-sm tracking-[-0.02em] text-muted">
                  {x.current && <span aria-hidden className="size-1.5 rounded-full bg-emerald-400" />}
                  {x.period}
                </p>
                <p className="mt-2 max-w-[440px] text-sm leading-[1.6] tracking-[-0.01em] text-muted">{x.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Every article is one click from home (flat architecture) — real links in the initial HTML. */}
      <section aria-labelledby="writing" className="reveal mt-10" style={{ "--i": 9 }}>
        <h2 id="writing" className="text-lg font-medium tracking-[-0.03em]">
          Writing.
        </h2>
        <ul className="mt-5 space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex items-baseline justify-between gap-4">
                <span className="tracking-[-0.03em] decoration-white/40 underline-offset-4 group-hover:underline">{p.title}</span>
                <span className="shrink-0 text-sm text-muted">{p.tag}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="mt-5 inline-flex text-sm text-muted transition-colors hover:text-white">
          All writing →
        </Link>
      </section>

      <Contact />
    </div>
  );
}
