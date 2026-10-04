"use client";

import { m } from "motion/react";

const spring = { type: "spring", stiffness: 420, damping: 30 };
const arrowOut = { rest: { x: 0, y: 0 }, hover: { x: "120%", y: "-120%" } };
const arrowIn = { rest: { x: "-120%", y: "120%" }, hover: { x: 0, y: 0 } };

function Arrow({ variants }) {
  return (
    <m.svg
      variants={variants}
      transition={spring}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute inset-0 size-full"
    >
      <path d="M3 11 11 3M4.5 3H11v6.5" />
    </m.svg>
  );
}

// Pill link whose arrow flies out and back in on hover.
// `beam`: dark pill with a light running around its border ("Start a project"); otherwise solid white.
export default function PillLink({ href, children, beam = false, external = false }) {
  return (
    <m.a
      href={href}
      {...(external && { target: "_blank", rel: "noopener" })}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex overflow-hidden rounded-full p-px ${beam ? "bg-white/10" : "bg-white"}`}
    >
      {/* CSS spin, not Motion: an infinite JS rotate runs on the main thread every frame (hurt LCP/INP on mobile). */}
      {beam && (
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(transparent_0deg,transparent_250deg,rgba(255,255,255,0.9)_340deg,transparent_360deg)] motion-reduce:animate-none"
        />
      )}
      <span
        className={`relative flex items-center gap-2.5 rounded-full py-3 pr-5 pl-6 text-[15px] font-medium tracking-[-0.03em] transition-colors duration-300 ${beam ? "bg-[#141414] group-hover:bg-[#1c1c1c]" : "bg-white text-black group-hover:bg-white/85"}`}
      >
        {children}
        <span className="relative size-3.5 overflow-hidden">
          <Arrow variants={arrowOut} />
          <Arrow variants={arrowIn} />
        </span>
      </span>
    </m.a>
  );
}
