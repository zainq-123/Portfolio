import localFont from "next/font/local";
import { site } from "@/lib/data";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-400.woff2", weight: "400" },
    { path: "./fonts/Switzer-500.woff2", weight: "500" },
  ],
  variable: "--font-switzer",
});

const title = `${site.name} — ${site.role}`;

// Site-wide defaults; pages add their own canonical URL and Open Graph details.
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Zain",
    "Full-Stack Developer",
    "React Developer",
    "Express.js",
    "Node.js",
    "Prisma",
    "MongoDB",
    "SEO",
    "AEO",
    "GEO",
    "Framer Motion",
    "GSAP",
    "Portfolio",
  ],
  openGraph: { type: "website", url: "/", siteName: site.name, locale: "en_US", title, description: site.description },
  twitter: { card: "summary_large_image", title, description: site.description },
  // No snippet length limit, large image previews — lets search results and AI Overviews quote freely.
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Proves ownership to Google Search Console. Removing it un-verifies the property.
  verification: { google: "b-Ne_VO9h7UyGZ7FekkP1eNDixZ8ede32x2oJ8mEaYE" },
};

export const viewport = { themeColor: "#121212" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${switzer.variable} antialiased motion-safe:scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
