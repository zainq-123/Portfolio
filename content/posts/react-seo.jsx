import Link from "next/link";

export const meta = {
  slug: "react-seo",
  title: "React SEO: How to Make React Apps Rank on Google",
  description:
    "React SEO made practical: rendering, meta tags, JSON-LD, sitemaps, Core Web Vitals and AI crawlers — what a React app needs to rank on Google and get cited.",
  excerpt: "Rendering, metadata, structured data, Core Web Vitals and AI crawlers — what a React app needs to rank and get cited.",
  tag: "SEO",
  cover: "React SEO",
  keywords: ["React SEO", "Next.js SEO", "server-side rendering", "structured data", "Core Web Vitals", "AI crawlers"],
  date: "2026-10-04",
  // Hero photo: CC0 (public domain) via Wikimedia Commons; credited on the article page.
  image: {
    src: "/blog/react-seo.jpg",
    alt: "Close-up of JavaScript code in a code editor on a laptop screen",
    credit: "Marc Mueller",
    source: "https://commons.wikimedia.org/w/index.php?curid=61739566",
  },
  projects: ["kairo"],
  toc: [
    { id: "why-hard", label: "Why React is hard for SEO" },
    { id: "google", label: "Does Google index React?" },
    { id: "ai-crawlers", label: "How AI crawlers see React" },
    { id: "rendering", label: "Choose a rendering strategy" },
    { id: "metadata", label: "Meta tags in React" },
    { id: "structured-data", label: "Structured data (JSON-LD)" },
    { id: "crawlable", label: "Links, sitemap and robots.txt" },
    { id: "core-web-vitals", label: "Core Web Vitals" },
    { id: "check", label: "Check what Google sees" },
    { id: "mistakes", label: "Common mistakes" },
    { id: "checklist", label: "React SEO checklist" },
    { id: "faq", label: "FAQ" },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        <strong>Short answer:</strong> React SEO works when search engines receive real HTML, not an empty page that
        waits for JavaScript. Render your pages on the server or prerender them at build time (Next.js does both), give
        every page its own title, description and canonical URL, add structured data, link pages with real{" "}
        <code>&lt;a&gt;</code> tags, and keep Core Web Vitals fast.
      </p>
      <p>
        React is a great way to build interfaces, but out of the box it is a poor way to get found. Building SEO into
        React sites like the <Link href="/work/kairo">Kairo</Link> store taught me that it is never one magic plugin.
        It is a handful of decisions made early. Here they are, in the order they matter — the same process behind
        every <a href="https://zwdevs.com">SEO-friendly React website we build at ZW_DEVS</a>.
      </p>

      <h2 id="why-hard">Why is React bad for SEO by default?</h2>
      <p>
        A plain React app uses <strong>client-side rendering</strong>. The server sends an almost empty HTML file — a
        single <code>&lt;div id="root"&gt;</code> — and the browser builds the whole page with JavaScript. Visitors see
        the result a moment later. Crawlers that don't run JavaScript see nothing: no headings, no text, no links.
      </p>
      <pre>
        <code>{`<!-- What a crawler gets from a client-rendered React app -->
<body>
  <div id="root"></div>
  <script src="/assets/index.js"></script>
</body>`}</code>
      </pre>
      <p>Everything else in this guide is about making sure that never happens to the pages you want ranked.</p>

      <h2 id="google">Does Google index React websites?</h2>
      <p>
        Yes, Google can run JavaScript. It crawls the HTML first, then puts the page in a queue to be rendered with a
        modern version of Chrome, and indexes what appears. But rendering costs Google time and resources, so it can
        happen later than the crawl, and anything that fails during rendering is simply missing.
      </p>
      <p>
        Google is also the best case. Social networks like LinkedIn, X and WhatsApp don't run JavaScript when they
        build link previews, so your Open Graph tags must be in the HTML or your shared links show up blank. Relying on
        client-side rendering means relying on every crawler being as patient as Google.
      </p>

      <h2 id="ai-crawlers">How do AI crawlers see React apps?</h2>
      <p>
        This is the part most React SEO guides skip, and it matters more every month. When ChatGPT, Claude or
        Perplexity answer a question, they can only quote pages their crawlers could read. A 2024 analysis by Vercel
        and MERJ found that the major AI crawlers download JavaScript files but don't execute them. For them, a
        client-rendered React app is the empty page above.
      </p>
      <p>
        So if you want to appear in AI answers — what people now call AEO (answer engine optimisation) or GEO
        (generative engine optimisation) — server-rendered HTML is not optional. Clear headings, direct answers near the
        top of the page, and question-style sections like the FAQ at the end of this article make your content easy to
        quote.
      </p>

      <h2 id="rendering">Which rendering strategy is best for React SEO?</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Strategy</th>
              <th scope="col">What crawlers get</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Client-side rendering (CSR)</th>
              <td>Empty HTML until JavaScript runs</td>
              <td>Dashboards and pages behind a login</td>
            </tr>
            <tr>
              <th scope="row">Static generation (SSG)</th>
              <td>Full HTML, built once at deploy</td>
              <td>Marketing pages, blogs, portfolios, product pages</td>
            </tr>
            <tr>
              <th scope="row">Server-side rendering (SSR)</th>
              <td>Full HTML, built per request</td>
              <td>Pages that change constantly or are personalised</td>
            </tr>
            <tr>
              <th scope="row">Prerendering a SPA</th>
              <td>Full HTML for known routes</td>
              <td>Existing Vite or Create React App projects</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For a new project, the easy answer is <strong>Next.js</strong>, which lets you choose per page. This portfolio
        is fully static: every page, including this article, is generated as HTML at build time and served from a CDN.
        For an existing Vite single-page app, prerendering your public routes gets you most of the benefit without a
        rewrite — Kairo is a Vite + React app whose product, category and journal pages are prerendered to HTML.
      </p>

      <h2 id="metadata">How do you add meta tags in React?</h2>
      <p>
        Every page needs a unique <code>&lt;title&gt;</code>, a meta description, a canonical URL and Open Graph tags.
        In Next.js you export them from the page, and they are rendered into the HTML for you:
      </p>
      <pre>
        <code>{`// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: \`/blog/\${slug}\` },
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}`}</code>
      </pre>
      <p>
        In a Vite or Create React App project, a library like <code>react-helmet-async</code> sets the same tags — but
        only crawlers that run JavaScript will see them, unless you prerender. Keep titles under about 60 characters and
        descriptions around 150–160 so they don't get cut off in results.
      </p>

      <h2 id="structured-data">How do you add structured data to a React app?</h2>
      <p>
        Structured data tells search engines what a page is about — an article, a product, a person, a breadcrumb trail
        — in a format they don't have to guess. Use JSON-LD in a script tag:
      </p>
      <pre>
        <code>{`const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  datePublished: post.date,
  author: { "@type": "Person", name: "Zain" },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>`}</code>
      </pre>
      <p>
        Only use properties that really exist on schema.org, check them with Google's Rich Results Test, and never mark
        up content that isn't visible on the page.
      </p>

      <h2 id="crawlable">How do you make React pages crawlable?</h2>
      <ul>
        <li>
          <strong>Use real links.</strong> Crawlers follow <code>&lt;a href&gt;</code> tags, not{" "}
          <code>onClick</code> handlers. Next.js <code>&lt;Link&gt;</code> and React Router's <code>&lt;Link&gt;</code>{" "}
          both render proper anchor tags.
        </li>
        <li>
          <strong>Keep the structure flat.</strong> Every important page should be one to three clicks from the home
          page, and pages should link to related pages. On this site, every case study and article is linked directly
          from the home page.
        </li>
        <li>
          <strong>Publish a sitemap.</strong> In Next.js, an <code>app/sitemap.js</code> file generates{" "}
          <code>sitemap.xml</code> from your real routes, so it never goes out of date.
        </li>
        <li>
          <strong>Write a deliberate robots.txt.</strong> You can let search and AI answer bots in while blocking
          crawlers that only collect training data. This site allows Googlebot, OAI-SearchBot, Claude-SearchBot and
          PerplexityBot, and blocks GPTBot, ClaudeBot and Google-Extended — so it can be cited without becoming
          training data.
        </li>
      </ul>

      <h2 id="core-web-vitals">How do Core Web Vitals affect React SEO?</h2>
      <p>
        Core Web Vitals measure how fast and stable a page feels, and Google uses them as a ranking signal. There are
        three: <strong>LCP</strong> (how fast the main content appears, aim for 2.5 seconds or less),{" "}
        <strong>INP</strong> (how quickly the page responds to clicks and taps, 200 ms or less — it replaced FID in
        March 2024) and <strong>CLS</strong> (how much the layout jumps, 0.1 or less). React apps usually struggle with
        the first two because they ship a lot of JavaScript.
      </p>
      <ul>
        <li>
          <strong>Ship less JavaScript.</strong> Render static parts on the server and only make interactive pieces
          client components. Lazy-load heavy libraries — this site loads its animation engine after the page is
          interactive.
        </li>
        <li>
          <strong>Don't hide your main content behind animations.</strong> A lesson from building this portfolio: an
          entrance animation that started at <code>opacity: 0</code> made Lighthouse report no LCP at all on mobile,
          because invisible content doesn't count as painted. Animating position and blur instead fixed it.
        </li>
        <li>
          <strong>Optimise images.</strong> Serve AVIF or WebP at the right size, give images fixed dimensions to avoid
          layout shift, load the hero image eagerly with high priority, and lazy-load the rest.
        </li>
        <li>
          <strong>Avoid long tasks.</strong> Infinite JavaScript animations and big re-renders block the main thread
          and hurt INP. Use CSS animations for anything that loops.
        </li>
      </ul>

      <h2 id="check">How do you check what Google sees on your React site?</h2>
      <p>
        Never trust what you see in your own browser — your browser runs JavaScript, has your cookies, and is fast.
        Check what a crawler gets instead:
      </p>
      <ol>
        <li>
          <strong>View the page source</strong> (Ctrl+U or Cmd+Option+U), not DevTools. DevTools shows the page after
          JavaScript ran; the source shows what arrives over the network. If your headings and text aren't in the
          source, many crawlers will never see them.
        </li>
        <li>
          <strong>Use the URL Inspection tool</strong> in Google Search Console. "Test live URL" shows the HTML Google
          rendered and a screenshot, plus any resources it couldn't load.
        </li>
        <li>
          <strong>Run the Rich Results Test</strong> to confirm your structured data is valid and detected.
        </li>
        <li>
          <strong>Run Lighthouse or PageSpeed Insights</strong> in mobile mode. It checks basic SEO and gives you
          Core Web Vitals in a lab setting; Search Console shows the real-user numbers once you have traffic.
        </li>
      </ol>

      <h2 id="mistakes">What are the most common React SEO mistakes?</h2>
      <ul>
        <li>
          <strong>Hash routing.</strong> URLs like <code>/#/pricing</code> look like one page to search engines. Use
          real paths like <code>/pricing</code>.
        </li>
        <li>
          <strong>The same title on every page.</strong> A single-page app often keeps the title from{" "}
          <code>index.html</code> everywhere, so every page competes with every other one.
        </li>
        <li>
          <strong>Soft 404s.</strong> A missing page that still returns status 200 with a "not found" message confuses
          Google. Return a real 404 status for pages that don't exist.
        </li>
        <li>
          <strong>Content that only loads on interaction.</strong> Text inside tabs, accordions or "load more" buttons
          that is fetched only after a click may never be indexed. Render it in the HTML and hide it with CSS if needed.
        </li>
        <li>
          <strong>Blocking JavaScript or CSS in robots.txt.</strong> Google needs those files to render the page.
          Block crawlers from private areas, not from your assets.
        </li>
      </ul>

      <h2 id="checklist">React SEO checklist</h2>
      <ol>
        <li>Public pages are server-rendered or prerendered — check with "View source", not DevTools.</li>
        <li>Every page has a unique title, meta description and canonical URL.</li>
        <li>Open Graph tags are in the HTML, with a 1200×630 image.</li>
        <li>Structured data uses real schema.org properties and matches visible content.</li>
        <li>Navigation uses real links, and important pages are within three clicks of home.</li>
        <li>
          <code>sitemap.xml</code> and <code>robots.txt</code> are generated and correct.
        </li>
        <li>LCP under 2.5 s, INP under 200 ms and CLS under 0.1 on mobile.</li>
        <li>Content answers real questions clearly, with headings that match how people search.</li>
      </ol>

      <h2 id="faq">React SEO FAQ</h2>
      <h3>Is React good for SEO?</h3>
      <p>
        React is fine for SEO when pages are server-rendered or prerendered. A purely client-rendered React app is
        weak for SEO, because many crawlers only see an empty page.
      </p>
      <h3>Do I need Next.js for React SEO?</h3>
      <p>
        No, but it is the easiest route. You can prerender a Vite single-page app instead, as long as every public page
        ends up as real HTML.
      </p>
      <h3>Can Google crawl client-side rendered React?</h3>
      <p>
        Usually, yes — Google renders JavaScript, but later than it crawls, and failures leave pages empty. Social
        previews and AI crawlers generally can't.
      </p>
      <h3>How do I get my React site into AI Overviews and AI answers?</h3>
      <p>
        Serve real HTML, answer the question directly near the top of the page, use clear question-style headings, add
        accurate structured data, and allow search and answer bots in your robots.txt.
      </p>

      <p>
        React SEO isn't a trick; it is a set of habits: real HTML, honest metadata, real links and fast pages. If you
        are still deciding how to build, compare a{" "}
        <Link href="/blog/custom-website-vs-wordpress">custom website vs WordPress</Link>, or read why{" "}
        <Link href="/blog/framework-vs-library">React is a library and Next.js is a framework</Link>. And if you want a
        React site that is built to rank from day one, <a href="https://zwdevs.com">ZW_DEVS</a> can build it with you.
      </p>
    </>
  );
}
