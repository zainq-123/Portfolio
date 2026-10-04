import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";

// Social preview (WhatsApp, LinkedIn, X…) generated at build time in the site's own font and colours.
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The OG renderer can't read woff2, so it gets a woff copy of Switzer.
const switzer = await readFile(join(process.cwd(), "app/fonts/Switzer-500.woff"));
const photo = await readFile(join(process.cwd(), "public/zain.jpg"), "base64");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: 88,
          background: "#121212",
          color: "#fff",
          fontFamily: "Switzer",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={`data:image/jpeg;base64,${photo}`} width={320} height={320} alt="" style={{ borderRadius: 44 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: "-0.05em" }}>{site.name}</div>
          <div style={{ fontSize: 42, marginTop: 18, color: "#ababab", letterSpacing: "-0.03em" }}>{site.role}</div>
          <div style={{ fontSize: 26, marginTop: 56, color: "#ababab" }}>React · Express.js · Prisma · SEO / AEO / GEO</div>
          <div style={{ fontSize: 26, marginTop: 14 }}>{new URL(site.url).hostname}</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Switzer", data: switzer, style: "normal", weight: 500 }] }
  );
}
