/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Desktop above this folder has its own lockfile + git repo; keep Next scoped to this project.
  turbopack: { root: import.meta.dirname },
  // Hide Next's dev-only "N" badge (it never ships to production anyway).
  devIndicators: false,
  // Images are AVIFs pre-built at build time (scripts/build-images.mjs reads these widths), so the
  // server never runs sharp — runtime encoding is what held Railway RAM at ~780 MB.
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
    // Sources are ≤ 2000px wide, so 2048/3840 would only repeat the same pixels.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    // Not content-hashed, so not "immutable": 30 days. Replacing an image? Give the file a new name.
    return [{ source: "/_img/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }] }];
  },
};

export default nextConfig;
