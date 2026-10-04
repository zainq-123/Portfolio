// Rate limit: each visitor (IP) can request at most 15 pages per rolling minute.
// Static files, images and link prefetches are excluded by the matcher below,
// so one page load counts as one request, not the dozens of files it pulls in.
const LIMIT = 15;
const WINDOW = 60_000;

// ponytail: in-memory, per server instance — right for one Railway replica.
// Scale out to more replicas → move this to Redis or a Cloudflare rate-limiting rule.
const hits = new Map(); // ip -> timestamps of this IP's requests in the last minute
let lastSweep = 0;

// Cloudflare sets cf-connecting-ip; Railway sets x-real-ip / x-forwarded-for.
function clientIp(headers) {
  return (
    headers.get("cf-connecting-ip") ??
    headers.get("x-real-ip") ??
    headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

export function proxy(request) {
  const now = Date.now();
  const ip = clientIp(request.headers);
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);

  if (recent.length >= LIMIT) {
    const retryAfter = Math.ceil((recent[0] + WINDOW - now) / 1000);
    return new Response("Too many requests. Please wait a minute and try again.", {
      status: 429,
      headers: { "Retry-After": String(retryAfter), "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  recent.push(now);
  hits.set(ip, recent);

  // Once a minute, forget visitors who have gone quiet so the map can't grow forever.
  if (now - lastSweep > WINDOW) {
    lastSweep = now;
    for (const [key, times] of hits) if (now - times.at(-1) >= WINDOW) hits.delete(key);
  }
}

export const config = {
  matcher: [
    {
      // Pages only: skip build files, optimized images, any file with an extension
      // (robots.txt, sitemap.xml, icon.svg, /public images) and OG images.
      source: "/((?!_next/static|_next/image|.*\\..*|.*opengraph-image).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
