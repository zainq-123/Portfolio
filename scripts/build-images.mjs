// Pre-builds every responsive AVIF the site uses, so the server never encodes images at runtime.
// (Runtime encoding with sharp is what held Railway RAM at ~780 MB.) next/image points at these
// files through lib/image-loader.js. Runs before `next dev` and `next build`; unchanged images are skipped.
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import config from "../next.config.mjs";

const widths = [...config.images.imageSizes, ...config.images.deviceSizes];
const list = async (dir) =>
  (await readdir(path.join("public", dir))).filter((f) => /\.(png|jpe?g)$/i.test(f)).map((f) => `${dir}/${f}`);
const sources = ["zain.jpg", ...(await list("work")), ...(await list("blog"))];

let built = 0;
for (const src of sources) {
  const input = path.join("public", src);
  const { mtimeMs } = await stat(input);
  await Promise.all(
    widths.map(async (w) => {
      const out = path.join("public/_img", `${src.replace(/\.\w+$/, "")}-${w}.avif`);
      const existing = await stat(out).catch(() => null);
      if (existing && existing.mtimeMs >= mtimeMs) return;
      await mkdir(path.dirname(out), { recursive: true });
      // Wider than the source? Keep the source size (same as next/image, which never upscales).
      await sharp(input).resize({ width: w, withoutEnlargement: true }).avif({ quality: 55, effort: 2 }).toFile(out);
      built++;
    }),
  );
}
console.log(`images: built ${built} AVIF files, ${sources.length * widths.length - built} already up to date`);
