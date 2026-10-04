import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";
import { posts } from "@/lib/posts";

// Per-article social preview: tag, title and byline in the site's font.
export const alt = `Article by ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const switzer = await readFile(join(process.cwd(), "app/fonts/Switzer-500.woff"));

// Prerender one image per article at build time instead of on each request.
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#121212",
          color: "#fff",
          fontFamily: "Switzer",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.25em", color: "#ababab", textTransform: "uppercase" }}>{p.tag}</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 1000 }}>{p.title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#ababab" }}>
          <span>{site.name} · Founder, ZW_DEVS</span>
          <span>{new URL(site.url).hostname}</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Switzer", data: switzer, style: "normal", weight: 500 }] }
  );
}
