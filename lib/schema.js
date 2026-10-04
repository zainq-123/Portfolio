import { contact, education, experience, logos, site, skills } from "@/lib/data";

// JSON-LD builders. Only properties Zain approved, each verified against the schema.org vocabulary.
const personId = `${site.url}/#person`;
const abs = (path) => new URL(path, site.url).href;
// Looked up by name (not position) so reordering the Experience list can't change worksFor/publisher.
const zwdevs = experience.find((x) => x.company === "ZW_DEVS");
const studio = { "@type": "Organization", name: zwdevs.company, url: zwdevs.url };

export function person() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    url: site.url,
    image: abs("/zain.jpg"),
    jobTitle: site.role,
    description: site.description,
    email: contact.email,
    sameAs: contact.links.map((l) => l.href),
    worksFor: studio,
    // Finished studies are alumniOf; the current university is an affiliation until graduation.
    alumniOf: education.filter((e) => !e.current).map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
    affiliation: education.filter((e) => e.current).map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
    knowsAbout: [...logos.map((l) => l.name), ...skills.find((g) => g.title === "SEO").items],
    skills: skills.map((g) => g.title),
    mainEntityOfPage: site.url,
  };
}

// `items` are the visible breadcrumbs ({ name, href }), the last one being the current page.
export function breadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.href) })),
  };
}

export function blogPosting(post) {
  const url = abs(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", "@id": personId, name: site.name, url: site.url },
    publisher: studio,
    image: abs(post.image.src),
    wordCount: post.words,
    keywords: post.keywords,
    inLanguage: "en",
    mainEntityOfPage: url,
  };
}
