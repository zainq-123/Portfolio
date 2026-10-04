import CaseBody from "@/components/case-body";
import CaseSidebar from "@/components/case-sidebar";
import Panel from "@/components/panel";
import { projects, site } from "@/lib/data";

// Only the projects in lib/data.js exist; anything else 404s. All pages are prerendered at build.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  const title = `${p.title} — Case Study`;
  return {
    title,
    description: p.tagline,
    alternates: { canonical: `/work/${p.slug}` },
    // Page-level openGraph replaces the layout's, so siteName/locale are repeated here.
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: `/work/${p.slug}`,
      title,
      description: p.tagline,
      images: [{ url: p.image, alt: `${p.title} — home page` }],
    },
    twitter: { card: "summary_large_image", title, description: p.tagline, images: [p.image] },
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="lg:grid lg:h-dvh lg:grid-cols-[minmax(360px,30%)_1fr] lg:overflow-hidden">
      <Panel>
        <CaseSidebar project={projects[i]} />
      </Panel>
      <Panel>
        <CaseBody project={projects[i]} next={next} />
      </Panel>
    </main>
  );
}
