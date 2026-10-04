# Personal Portfolio — Zain

Portfolio and blog of Zain, full-stack developer and founder of [ZW_DEVS](https://zwdevs.com).
Live at **[zain.zwdevs.com](https://zain.zwdevs.com)**.

## Stack

- [Next.js](https://nextjs.org) (App Router) — every page is prerendered as static HTML
- Tailwind CSS, Framer Motion (`motion`)
- Images served as AVIF via `next/image`

## What's inside

- Case studies for each project at `/work/[slug]`
- Blog at `/blog` with SEO-focused articles
- Meta tags, Open Graph images, JSON-LD (Person, BreadcrumbList, BlogPosting)
- `robots.txt` and `sitemap.xml`, generated from `app/robots.js` and `app/sitemap.js`
- Rate limit of 15 page requests per minute per IP (`proxy.js`)

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where to edit

- `lib/data.js` — profile, projects, skills, experience, education, contact
- `content/posts/` — blog articles
