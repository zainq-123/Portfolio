import Breadcrumbs from "@/components/breadcrumbs";
import { ArticleCards } from "@/components/cards";
import Contact from "@/components/contact";
import Panel from "@/components/panel";
import { site } from "@/lib/data";

const title = "Writing: React SEO & Full-Stack Guides";
const description =
  "Practical guides on React SEO, full-stack development and choosing the right web stack — written by Zain, founder of ZW_DEVS, from real client projects.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", siteName: site.name, locale: "en_US", url: "/blog", title, description },
};

export default function Blog() {
  return (
    <main className="lg:grid lg:h-dvh lg:grid-cols-[minmax(360px,30%)_1fr] lg:overflow-hidden">
      <Panel>
        <div id="top" className="px-5 pt-5 pb-8 lg:pr-10">
          <div className="reveal" style={{ "--i": 0 }}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Writing", href: "/blog" }]} />
          </div>
          <p className="reveal mt-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-muted uppercase" style={{ "--i": 1 }}>
            <span aria-hidden className="h-px w-6 bg-white/30" />
            Writing
          </p>
          <h1 className="reveal mt-4 text-[clamp(32px,3vw,46px)] leading-[1.05] font-medium tracking-[-0.05em]" style={{ "--i": 2 }}>
            Notes on building fast, findable websites
          </h1>
          <p className="reveal mt-5 max-w-[520px] text-lg leading-[1.4] tracking-[-0.03em] text-muted" style={{ "--i": 3 }}>
            Practical guides on React SEO, full-stack development and choosing the right tools — written from real client
            projects at{" "}
            <a href="https://zwdevs.com" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              ZW_DEVS
            </a>
            .
          </p>
          <Contact />
        </div>
      </Panel>
      <Panel>
        <div className="px-5 pb-10 lg:pt-5 lg:pl-0">
          <ul className="grid gap-x-2 gap-y-12 sm:grid-cols-2">
            <ArticleCards Heading="h2" />
          </ul>
        </div>
      </Panel>
    </main>
  );
}
