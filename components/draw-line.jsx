"use client";

import { m } from "motion/react";

// The education timeline's connecting line, drawn left → right when it scrolls into view.
export default function DrawLine({ className }) {
  return (
    <m.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    />
  );
}
