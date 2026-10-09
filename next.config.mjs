/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Desktop above this folder has its own lockfile + git repo; keep Next scoped to this project.
  turbopack: { root: import.meta.dirname },
  // Hide Next's dev-only "N" badge (it never ships to production anyway).
  devIndicators: false,
  // Serve AVIF first (smallest), WebP as the fallback.
  images: {
    formats: ["image/avif", "image/webp"],
    // Sources are ≤ 2000px wide, so the default 2048/3840 widths only re-encode the same pixels.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    // sharp starts one libvips thread per ~2 host cores; Railway hosts expose dozens, and every
    // thread keeps its own AVIF buffers → RAM jumped to 1.2 GB and never came back. One is enough here.
    imgOptConcurrency: 1,
    imgOptOperationCache: false,
  },
};

export default nextConfig;
