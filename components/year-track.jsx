"use client";

import { useRef, useSyncExternalStore } from "react";
import { m, useInView } from "motion/react";

const ease = [0.16, 1, 0.3, 1];
const noSubscribe = () => () => {};
const thisYear = () => new Date().getFullYear(); // same clock as Date.now(); flips on Jan 1st (visitor's local time)

// Position of the "you are here" dot along a study period, from 0 (start year) to 1 (end year).
export function yearProgress(year, start, end) {
  return Math.min(1, Math.max(0, (year - start) / (end - start)));
}

// Progress line for the current education entry. The year is read in the browser, so the static build stays
// correct every year without a redeploy: 2026 → halfway, 2027 → ¾, 2028 → end, 2029+ → finished.
export default function YearTrack({ start, end }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  // Server render (and hydration) uses the start year; the real year applies right after, so no mismatch.
  const year = useSyncExternalStore(noSubscribe, thisYear, () => start);
  const at = inView ? yearProgress(year, start, end) : 0;
  const done = year > end;
  const move = { duration: 1.2, delay: 0.5, ease };

  return (
    <span ref={ref} aria-hidden className="absolute top-[5px] right-0 left-[5px] h-px">
      {/* Still to go — gone once the period is over */}
      {!done && (
        <span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.3)_0_4px,transparent_4px_9px)]" />
      )}
      {/* Finish line */}
      <span className="absolute top-1/2 right-0 size-[7px] translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-ink" />
      {/* Done so far */}
      <m.span className="absolute inset-0 origin-left bg-white/60" initial={{ scaleX: 0 }} animate={{ scaleX: at }} transition={move} />
      {/* You are here */}
      <m.span
        className={`absolute top-1/2 size-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ${done ? "" : "ring-4 ring-white/15"}`}
        initial={{ left: "0%" }}
        animate={{ left: `${at * 100}%` }}
        transition={move}
      />
    </span>
  );
}
