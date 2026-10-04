/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Desktop above this folder has its own lockfile + git repo; keep Next scoped to this project.
  turbopack: { root: import.meta.dirname },
  // Hide Next's dev-only "N" badge (it never ships to production anyway).
  devIndicators: false,
  // Serve AVIF first (smallest), WebP as the fallback.
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
