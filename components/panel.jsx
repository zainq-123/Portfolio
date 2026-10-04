"use client";

import { useRef } from "react";
import { LazyMotion, MotionConfig, m, useScroll, useTransform } from "motion/react";

// Motion's animation features download after the page is interactive (smaller initial JS → better LCP/INP).
const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

// One independently scrolling column (desktop) topped by a thin scroll-progress bar.
// Every animated component lives inside a Panel, so this is the one LazyMotion boundary (`strict`: m.* only).
export default function Panel({ children }) {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({ container: ref });
  // Motion reports progress 1 when there's nothing to scroll; at the top it should read 0.
  const scaleX = useTransform(() => (scrollY.get() > 0 ? scrollYProgress.get() : 0));

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <div ref={ref} data-scroll className="no-scrollbar relative motion-safe:scroll-smooth lg:h-dvh lg:overflow-y-auto lg:overscroll-contain">
          <m.div
            aria-hidden
            style={{ scaleX }}
            className="sticky top-0 z-30 -mb-[3px] h-[3px] origin-left bg-white max-lg:hidden"
          />
          {children}
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
