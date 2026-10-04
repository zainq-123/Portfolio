import * as customVsWordpress from "@/content/posts/custom-website-vs-wordpress";
import * as frameworkVsLibrary from "@/content/posts/framework-vs-library";
import * as prismaPooling from "@/content/posts/prisma-connection-pooling";
import * as reactSeo from "@/content/posts/react-seo";

// Visible text of a JSX tree. Post bodies are plain functions with no hooks, so calling one just returns elements.
const textOf = (node) =>
  node == null || typeof node === "boolean"
    ? ""
    : typeof node === "string" || typeof node === "number"
      ? `${node} `
      : Array.isArray(node)
        ? node.map(textOf).join("")
        : textOf(node.props?.children);

// Each post module exports `meta` and a server-rendered `Body`. Order = listing order (first is featured).
// Word count and read time (~230 wpm) are measured from the article itself, so they never go stale.
export const posts = [reactSeo, customVsWordpress, frameworkVsLibrary, prismaPooling].map((m) => {
  const words = textOf(m.default()).split(/\s+/).filter(Boolean).length;
  return { ...m.meta, words, readTime: `${Math.round(words / 230)} min read`, Body: m.default };
});

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
