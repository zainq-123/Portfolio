import Image from "next/image";

// Article hero photo. Cards pass the B&W-until-hover classes; the article page passes `hero`
// (colour, fetched first — it's that page's LCP element).
export default function PostCover({ post, sizes, hero = false, className = "", imgClassName = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 ${className}`}>
      <Image
        src={post.image.src}
        alt={post.image.alt}
        fill
        sizes={sizes}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : undefined}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
