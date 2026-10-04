"use client";

import { m } from "motion/react";

// Scroll-into-view reveal for below-the-fold content. A tiny client island, so the
// content inside it can stay server-rendered (less JS to download and hydrate).
export default function Reveal({ as = "div", delay = 0, className, children }) {
  const Tag = m[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
