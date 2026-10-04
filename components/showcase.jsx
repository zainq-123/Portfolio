"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";

// Lists fade out on tab switch; entrances are the CSS `reveal` utility on each card.
const leave = { opacity: 0, filter: "blur(6px)", transition: { duration: 0.25 } };

const tabs = [
  { id: "work", label: "Work", icon: <path d="M2 2h4.5v4.5H2zM9.5 2H14v4.5H9.5zM2 9.5h4.5V14H2zM9.5 9.5H14V14H9.5z" /> },
  {
    id: "writing",
    label: "Writing",
    icon: <path d="M2.5 3.5h11M2.5 8h11M2.5 12.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  },
];

// Work / Writing tabs. The card lists (and their counts) arrive pre-rendered from the server.
export default function Showcase({ work, writing, counts }) {
  const [tab, setTab] = useState("work");

  function select(id, e) {
    setTab(id);
    e.currentTarget.closest("[data-scroll]")?.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="px-5 pb-5 lg:pt-5 lg:pl-0">
      {/* Floating Work / Writing switch — sticky, takes no layout space. */}
      <div className="sticky top-6 z-20 flex h-0 items-start justify-end">
        <nav
          aria-label="Showcase"
          className="mt-4 mr-4 flex gap-1 rounded-full border border-white/10 bg-ink/70 p-1 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={tab === t.id}
              onClick={(e) => select(t.id, e)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-[-0.03em] transition-colors duration-300 ${tab === t.id ? "text-black" : "text-white/70 hover:text-white"}`}
            >
              {tab === t.id && (
                <m.span
                  layoutId="showcase-tab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  className="absolute inset-0 rounded-full bg-white"
                />
              )}
              <span className="relative flex items-center gap-2">
                <svg viewBox="0 0 16 16" aria-hidden className="size-3.5 fill-current">
                  {t.icon}
                </svg>
                {t.label}
                <sup className="-ml-1 text-[10px] opacity-60">{String(counts[t.id]).padStart(2, "0")}</sup>
              </span>
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        {tab === "work" ? (
          <m.ul key="work" exit={leave} className="grid gap-2 sm:grid-cols-2">
            {work}
          </m.ul>
        ) : (
          <m.ul key="writing" exit={leave} className="grid gap-x-2 gap-y-12 sm:grid-cols-2">
            {writing}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
