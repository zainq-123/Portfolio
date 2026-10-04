import Link from "next/link";
import JsonLd from "./json-ld";
import { breadcrumbs } from "@/lib/schema";

// Visible trail, e.g. Home / Writing / React SEO — the last item is the current page. The same items feed the
// BreadcrumbList JSON-LD, so what users see and what search engines read can't drift apart.
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbs(items)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm tracking-[-0.02em] text-muted">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-white/30">
                /
              </span>
            )}
            {i < items.length - 1 ? (
              <Link href={c.href} className="transition-colors hover:text-white">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
