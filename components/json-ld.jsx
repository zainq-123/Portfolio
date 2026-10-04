// Structured data, rendered the way the Next.js JSON-LD guide recommends: "<" is escaped so the
// payload can never close the script tag early.
export default function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
