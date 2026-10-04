import { projects, site } from "@/lib/data";
import { posts } from "@/lib/posts";

// Every page on the site: home, case studies, the writing index and each article (with its real date).
export default function sitemap() {
  return [
    { url: site.url },
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` })),
    { url: `${site.url}/blog` },
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
