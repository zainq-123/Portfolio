"use client";

// next/image loader: serve the AVIFs pre-built by scripts/build-images.mjs instead of encoding on the server.
export default function imageLoader({ src, width }) {
  return `/_img${src.replace(/\.\w+$/, "")}-${width}.avif`;
}
