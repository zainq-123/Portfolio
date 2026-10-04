import Link from "next/link";
import { contact } from "@/lib/data";

const link = "tracking-[-0.03em] underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white";

// "Reach out." + footer — shared by the home sidebar and every case study.
export default function Contact() {
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="mt-12 scroll-mt-8 border-t border-line pt-12">
        <h2 id="contact-title" className="text-lg font-medium tracking-[-0.03em]">
          Reach out.
        </h2>
        <p className="mt-4 max-w-[440px] leading-[1.45] tracking-[-0.03em] text-muted">
          Planning a new website, or need your current one to load faster and rank higher? Tell me about your business
          and your goals — I&apos;ll reply with honest advice and a clear plan, then build you a site that looks great on
          every device and helps customers find you.
        </p>
        <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Project enquiry")}`} className={`mt-6 inline-block ${link}`}>
          {contact.email}
        </a>
        {/* Icon buttons: 44px touch targets; rel="me" marks the profiles as Zain's own. */}
        <ul className="mt-5 flex gap-2.5">
          {contact.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="me noopener"
                aria-label={`${l.label} (opens in a new tab)`}
                title={l.label}
                className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-[18px] fill-current">
                  <path d={l.icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 flex items-end justify-between border-t border-line pt-6 text-[13px] tracking-[-0.02em] text-muted">
        <div>
          <p>
            Designed &amp; built by{" "}
            <Link href="/" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              Zain
            </Link>
          </p>
          <p className="mt-1">© 2026 All rights reserved</p>
        </div>
        <a
          href="#top"
          aria-label="Back to top"
          className="grid size-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-3.5">
            <path d="M7 11.5v-9M3 6.5l4-4 4 4" />
          </svg>
        </a>
      </footer>
    </>
  );
}
