// Site content. Articles live in /content/posts (see lib/posts.js).

export const site = {
  url: "https://zain.zwdevs.com",
  name: "Zain",
  role: "Full-Stack Developer",
  description:
    "Zain is a full-stack developer building fast, SEO-friendly websites with React, Express.js, Node.js, Prisma and MongoDB — plus SEO, AEO and GEO.",
};

// Each project is a card on the home page and a case study at /work/[slug].
// Covers are 2.1:1 screenshots of the live sites; `featured` spans both grid columns.
// "Next project" on a case study is simply the following entry (wrapping around).
export const projects = [
  {
    slug: "kairo",
    title: "Kairo",
    category: "Clothing E-commerce",
    url: "https://kairo.zwdevs.com",
    image: "/work/kairo.png",
    featured: true,
    tagline: "Fits built for the way you actually move — a full-stack menswear store, from the first scroll to Stripe checkout.",
    overview:
      "I designed and built Kairo end to end: a React storefront with shop filters, product pages, cart, wishlist and a journal, running on an Express + Prisma API with Stripe payments, Resend emails and a private admin dashboard — all served behind Cloudflare and Nginx.",
    meta: [
      { k: "Category", v: "Fashion · E-commerce" },
      { k: "Platform", v: "Web · Full-stack" },
      { k: "Tech stack", v: "React · Express · Prisma · Framer Motion" },
      { k: "Infrastructure", v: "Cloudflare · Nginx · Stripe · Resend" },
    ],
    build: {
      heading: "Built to sell, rank and hold up",
      items: [
        { icon: "shopping-bag", title: "Full-stack storefront", body: "Shop filters, product pages, cart, wishlist and a journal on the front end; an Express + Prisma API and a private admin dashboard behind it." },
        { icon: "search", title: "SEO, AEO & GEO", body: "On-page and technical SEO, JSON-LD schema markup, robots.txt, sitemap.xml and deliberate internal linking — built to rank on Google and get cited by AI answer engines." },
        { icon: "shield-check", title: "Security hardening", body: "Protection against XSS and SQL injection, with DDoS mitigation through Cloudflare in front of an Nginx-served app." },
        { icon: "credit-card", title: "Idempotent payments", body: "Stripe checkout on database transactions with idempotency, so the same order can never be processed twice — plus Resend for transactional emails." },
      ],
    },
    inside: {
      heading: "Inside the store",
      intro: "A closer look at the screens that turn browsing into buying.",
      items: [
        { eyebrow: "01 · Storefront", title: "Hot selling, right now", image: "/work/kairo-1.jpg", body: "The home page leads with what's moving — a live product grid with sale badges and wishlist toggles, choreographed with Framer Motion so the catalogue feels alive without slowing it down." },
        { eyebrow: "02 · Product page", title: "From size pick to checkout", image: "/work/kairo-2.jpg", body: "Every product page pairs sizes, quantity, add-to-cart and wishlist with recommendations, then hands off to Stripe — each with its own title, meta description and structured data for search." },
        { eyebrow: "03 · Shop", title: "Every piece, one filter away", image: "/work/kairo-3.jpg", body: "The shop lists the full men’s collection with season and category filters — baggy jeans, formal, hoodies, jackets and more. Cards show sale prices, badges and a wishlist toggle, and every category also has its own prerendered page so it can rank on its own." },
        { eyebrow: "04 · Journal", title: "Style guides that answer real questions", image: "/work/kairo-4.jpg", body: "The journal publishes practical menswear guides — like how to wear baggy jeans without looking sloppy — in an alternating left/right layout. Each article is prerendered with its own title, meta description and structured data, so search engines can index it like any other page." },
      ],
    },
  },
  {
    slug: "food-noche",
    title: "Food Noche",
    category: "Restaurant Website",
    url: "https://food-noche-website-production.up.railway.app/",
    image: "/work/food-noche.png",
    tagline: "Where the night finds its perfect bite — a cinematic, late-night restaurant experience built with obsessive restraint.",
    overview:
      "I designed and built Food Noche as a short film you scroll through — a dark, editorial 'Night' hero handing off to a light, aggressive-minimalist canvas, wired together with hand-tuned motion that never fights the content.",
    meta: [
      { k: "Category", v: "Food · Restaurant" },
      { k: "Platform", v: "Web · React" },
      { k: "Tech stack", v: "React · GSAP" },
      { k: "Duration", v: "8 Weeks" },
    ],
    build: {
      heading: "Motion, with discipline",
      items: [
        { icon: "flame", title: "Cinematic parallax hero", body: "A near-black 'Night' hero with scroll-linked parallax, an ambient ember-and-steam canvas, and a lime cursor trail lagging the pointer via spring physics." },
        { icon: "move-horizontal", title: "Scroll-linked storytelling", body: "GSAP-pinned chapters and clip-path image reveals turn the page into a narrative — The Bean, The Hour, The Table — one motion idea per section, never five." },
        { icon: "smile", title: "Spring-physics tilt cards", body: "Hand-written requestAnimationFrame springs drive 3D tilt, neon glow-on-hover and button micro-interactions across the dishes, blog and menu." },
        { icon: "list-filter", title: "Two-register design system", body: "A dark 'Night' register hands off to a light 'Aggressive Minimalist' canvas — a single electric-lime accent over Syne, Space Grotesk and Inter." },
      ],
    },
    inside: {
      heading: "A page that reads like a short film",
      intro: "A closer look at the screens and the motion that make it feel alive.",
      items: [
        { eyebrow: "01 · Signature brews & bites", title: "A neon 3D carousel", image: "/work/food-noche-1.jpg", body: "The signature line-up — Midnight Latte, Noche Cold Brew and Kinetic Espresso — lives in a perspective-driven 3D carousel with pointer-reactive tilt and a pulsing neon glow on the active card. It auto-advances, pauses on hover, and every slide is a spring-damped micro-interaction rather than a hard cut." },
        { eyebrow: "02 · Our history", title: "Two decades, one scroll", image: "/work/food-noche-2.jpg", body: "The history is a GSAP ScrollTrigger set-piece: each milestone panel pins, a black curtain wipes back to reveal the chapter, and the imagery skews subtly with scroll velocity. First Light, New Chapter, Holding Steady, Noche Palette — the whole brand history unfolds one curtain-reveal at a time." },
        { eyebrow: "03 · The full menu", title: "A menu you can order from", image: "/work/food-noche-3.jpg", body: "The full menu groups coffee and brews, small plates and more into clean sections. Every item has a photo, a short description, a price and an add-to-cart button, so browsing turns straight into ordering." },
        { eyebrow: "04 · Events", title: "After dark, on the calendar", image: "/work/food-noche-4.jpg", body: "The events page turns a night out into a plan — The Friends Plan, The Birthday Plan and The Date Night Plan — each listing what’s included with its own reserve button, set on the light canvas that takes over after the dark hero." },
      ],
    },
  },
  {
    slug: "rps-cafe",
    title: "R.P's Café",
    category: "Café Website",
    url: "https://rps-cafe-production.up.railway.app/",
    image: "/work/rps-cafe.png",
    tagline: "Good food. Great coffee. Every day. — a family-run café in Shipley, brought online with a menu you can order from.",
    overview:
      "I built R.P's Café a fast, framework-free website — hand-written HTML, CSS and JavaScript with a filterable menu, quick-view dishes, an online basket and a photo gallery.",
    meta: [
      { k: "Category", v: "Food · Café" },
      { k: "Platform", v: "Web" },
      { k: "Tech stack", v: "HTML · CSS · JavaScript" },
    ],
    build: {
      heading: "Light by design",
      items: [
        { icon: "utensils", title: "Filterable menu", body: "Breakfasts, sandwiches, cakes and drinks sorted into categories with instant filters, all driven by a single menu data file." },
        { icon: "eye", title: "Quick-view dishes", body: "Open any dish in a quick-view card for the details, without ever leaving the menu." },
        { icon: "shopping-basket", title: "Order online", body: "A slide-out basket and a short checkout flow that ends in an instant 'Order received' confirmation." },
        { icon: "image", title: "Gallery & story", body: "A photo gallery and an about page that show off the food, the space and the family behind the counter." },
      ],
    },
    inside: {
      heading: "Inside the café",
      intro: "The pages that bring regulars back.",
      items: [
        { eyebrow: "01 · Our favourites", title: "The dishes people come back for", image: "/work/rps-cafe-1.jpg", body: "Full English Breakfast, BLT Sandwich and Victoria Sponge lead the home page as warm, photo-first cards — each with a price and a quick 'View details'." },
        { eyebrow: "02 · The menu", title: "Filter, peek, add to basket", image: "/work/rps-cafe-2.jpg", body: "The full menu pairs category filters — breakfast, sandwiches, cakes, hot and cold drinks — with quick-view cards and a basket that follows you around the site." },
        { eyebrow: "03 · Gallery", title: "A look behind the counter", image: "/work/rps-cafe-3.jpg", body: "The gallery shows the food, the coffee and the café itself in a photo grid you can filter by food, coffee, café and cakes — a quick way for first-time visitors to see what they’re walking into." },
        { eyebrow: "04 · Order online", title: "Ordering, without the phone call", image: "/work/rps-cafe-4.jpg", body: "The order page lists the menu by category with a price and an add button on every dish. Items land in a basket that follows you around the site, and checkout ends with an instant order confirmation." },
      ],
    },
  },
  {
    slug: "ghosts-games",
    title: "Ghost's Games",
    category: "Retro Gaming Marketplace",
    url: "https://ghosts-games-production.up.railway.app/",
    image: "/work/ghosts-games.png",
    tagline: "Every cartridge has a story — a retro gaming marketplace for hand-graded games, consoles and collectables.",
    overview:
      "I designed and built the front end for Ghost's Games — a retro marketplace with modern polish: platform-by-platform browsing, trending finds, product filters, a cart and a sell-your-collection flow.",
    meta: [
      { k: "Category", v: "Retro Gaming · E-commerce" },
      { k: "Platform", v: "Web · Front end" },
      { k: "Tech stack", v: "React · Framer Motion" },
    ],
    build: {
      heading: "Nostalgia, engineered",
      items: [
        { icon: "layout-grid", title: "Shop by category", body: "Video games, collectables, Pokémon, toys, retro consoles and accessories — organised by platform, from Nintendo and Sega to PlayStation and Xbox." },
        { icon: "sliders-horizontal", title: "Filters & cart", body: "Product filters and an add-to-cart flow keep browsing quick across a deep catalogue." },
        { icon: "sparkles", title: "Motion with purpose", body: "Scroll-triggered reveals and hover micro-interactions bring the hero collage, the trending shelves and the 'Game Galaxy' to life." },
        { icon: "repeat", title: "Sell your collection", body: "A trade-in flow invites collectors to sell games gathering dust, backed by an FAQ on grading, authenticity and returns." },
      ],
    },
    inside: {
      heading: "Inside the marketplace",
      intro: "The sections that make a retro shop feel alive.",
      items: [
        { eyebrow: "01 · Trending finds", title: "What collectors are chasing", image: "/work/ghosts-games-1.jpg", body: "Trending finds surface the hottest cartridges and consoles — each card showing condition, platform and price, with a one-tap add to cart." },
        { eyebrow: "02 · Sell to us", title: "Turn dust into credit", image: "/work/ghosts-games-2.jpg", body: "'Got a collection gathering dust?' turns visitors into sellers with a free quote, followed by an FAQ covering grading, authenticity and returns." },
        { eyebrow: "03 · Shop by category", title: "Seven ways in", image: "/work/ghosts-games-3.jpg", body: "Shop by category splits the catalogue into seven clear doors — video games, collectables, Pokémon, toys, retro consoles, books and guides, and accessories — each with a live item count, so collectors jump straight to what they’re hunting." },
        { eyebrow: "04 · Game galaxy", title: "Explore the game galaxy", image: "/work/ghosts-games-4.jpg", body: "The Game Galaxy is a dense wall of cover art and collectables that makes browsing feel like flicking through a shelf at a favourite shop — the most playful corner of the site." },
      ],
    },
  },
  {
    slug: "keen4games",
    title: "Keen4Games",
    category: "Retro Game Store",
    url: "https://keen4games-production.up.railway.app/",
    image: "/work/keen4games.png",
    tagline: "Relive. Collect. Play. — curated retro games and consoles from the golden age of gaming.",
    overview:
      "I built the front end for Keen4Games, a Nintendo & PlayStation specialist that buys, sells and trades retro games — a React storefront with a featured collection, current deals, the shop's story and a newsletter for new drops.",
    meta: [
      { k: "Category", v: "Retro Gaming · E-commerce" },
      { k: "Platform", v: "Web · Front end" },
      { k: "Tech stack", v: "React · Framer Motion" },
    ],
    build: {
      heading: "Retro soul, modern build",
      items: [
        { icon: "gamepad-2", title: "Featured collection", body: "A curated shelf of classics, each card carrying its platform, price and a condition badge." },
        { icon: "tag", title: "Current offers", body: "'Deals worth blowing into a cartridge for' — bold offer cards that make promotions impossible to miss." },
        { icon: "book-open", title: "The shop's story", body: "How a shelf of childhood cartridges in Newcastle, NSW grew into a buy, sell & trade specialist." },
        { icon: "mail", title: "Newsletter", body: "New drops and retro news, straight to the inbox — a simple sign-up that keeps collectors coming back." },
      ],
    },
    inside: {
      heading: "Inside the shop",
      intro: "A closer look at the shelves and the story.",
      items: [
        { eyebrow: "01 · Featured collection", title: "Legendary games, timeless memories", image: "/work/keen4games-1.jpg", body: "The featured collection presents each classic — Zelda, Super Mario World, Metroid, Sonic 2 — with its platform, price and condition, so collectors can scan a shelf in seconds." },
        { eyebrow: "02 · Our story", title: "Fueling nostalgia, preserving history", image: "/work/keen4games-2.jpg", body: "The about section tells how a personal collection became a mission to help fellow gamers bring nostalgia home — with a newsletter for new drops right below." },
        { eyebrow: "03 · Current offers", title: "Deals worth blowing into a cartridge for", image: "/work/keen4games-3.jpg", body: "Current offers sit in bold, colour-coded cards, each with a short headline and a one-line explanation, so promotions stand out without turning the page into an advert." },
        { eyebrow: "04 · Newsletter", title: "Stay in the loop", image: "/work/keen4games-4.jpg", body: "The page closes with a newsletter sign-up for new drops and retro news, and a footer that organises shop, help and info links around a “Level up your collection” call to action." },
      ],
    },
  },
];

// Logo ticker — 24×24 paths from simple-icons; SEO uses a plain magnifier.
// A `viewBox` crop marks a wordmark logo — shown alone, its name kept for screen readers.
export const logos = [
  { name: "React", icon: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" },
  { name: "Node.js", icon: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" },
  { name: "Express.js", icon: "M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706-.557.74 4.873 6.682H.945V4.173h9.505l5.026 6.7.574-.772-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12 4.9 4.9 0 0 0-.75 1.581 7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389 1.77 0 2.739-.868.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734-.704.651-1.952.65-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869 3.5 3.5 0 0 1-.551-1.182 5 5 0 0 1-.17-1.133 9 9 0 0 0-.015-.286 4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924 4.9 4.9 0 0 0-.715-1.68z" },
  { name: "Prisma", icon: "M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" },
  { name: "MongoDB", icon: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" },
  { name: "Tailwind CSS", icon: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" },
  { name: "GSAP", viewBox: "0 7.4 24 9.2", icon: "M9.83,7.59C10.647,7.595 11.267,7.828 11.672,8.282C12.055,8.713 12.239,9.336 12.219,10.132L12.205,10.193C12.197,10.211 12.185,10.229 12.17,10.243C12.14,10.272 12.099,10.288 12.057,10.288L10.398,10.288C10.29,10.288 10.199,10.2 10.199,10.093C10.199,9.669 10.071,9.435 9.809,9.383L9.689,9.372C9.347,9.372 9.125,9.583 9.119,9.951C9.112,10.361 9.344,10.734 10.004,11.374C10.872,12.19 11.221,12.913 11.204,13.867C11.177,15.411 10.127,16.41 8.531,16.41C7.716,16.41 7.093,16.191 6.678,15.761C6.258,15.324 6.066,14.683 6.106,13.855C6.108,13.813 6.125,13.772 6.155,13.743C6.185,13.714 6.226,13.698 6.267,13.698L7.983,13.698C8.007,13.699 8.03,13.705 8.052,13.715C8.073,13.726 8.092,13.741 8.107,13.76C8.12,13.775 8.129,13.793 8.135,13.813C8.14,13.832 8.141,13.853 8.137,13.873C8.118,14.171 8.171,14.394 8.288,14.518C8.363,14.598 8.469,14.639 8.599,14.639C8.916,14.639 9.102,14.414 9.109,14.024C9.115,13.687 9.007,13.39 8.427,12.792C7.676,12.058 7.003,11.3 7.024,10.108C7.037,9.416 7.311,8.784 7.798,8.327C8.312,7.845 9.014,7.59 9.83,7.59ZM4.047,7.618C4.794,7.612 5.381,7.842 5.789,8.303C6.221,8.79 6.44,9.524 6.441,10.485C6.44,10.527 6.422,10.567 6.392,10.597C6.362,10.626 6.322,10.643 6.28,10.643L4.479,10.643C4.448,10.642 4.417,10.629 4.395,10.607C4.373,10.584 4.361,10.553 4.36,10.522C4.346,9.899 4.172,9.576 3.828,9.538L3.757,9.534C3.067,9.535 2.66,10.472 2.444,10.992C2.142,11.719 1.988,12.507 2.018,13.293C2.033,13.659 2.092,14.173 2.438,14.386C2.746,14.575 3.185,14.45 3.451,14.24C3.716,14.031 3.93,13.669 4.02,13.339C4.033,13.293 4.033,13.258 4.021,13.241C4.015,13.233 4.003,13.229 3.989,13.226L3.485,13.222C3.461,13.222 3.436,13.216 3.414,13.206C3.392,13.196 3.372,13.181 3.356,13.162C3.344,13.148 3.335,13.13 3.331,13.112C3.327,13.093 3.327,13.074 3.331,13.056L3.647,11.682C3.663,11.611 3.726,11.558 3.804,11.548L3.804,11.545L6.839,11.545C6.846,11.545 6.854,11.545 6.86,11.546C6.939,11.556 6.995,11.63 6.994,11.71L6.994,11.714L6.678,13.085C6.661,13.163 6.583,13.22 6.494,13.22L6.113,13.22C6.1,13.22 6.086,13.225 6.075,13.233C6.064,13.241 6.056,13.253 6.052,13.266C5.7,14.46 5.223,15.282 4.594,15.775C4.058,16.195 3.399,16.391 2.517,16.391C1.725,16.391 1.191,16.136 0.738,15.633C0.14,14.967 -0.107,13.879 0.043,12.566C0.313,10.103 1.589,7.618 4.047,7.618ZM21.016,7.75C23.026,7.75 24.03,8.662 23.999,10.461C23.962,12.569 22.678,14.119 20.745,14.477C20.47,14.527 20.191,14.547 19.912,14.545L18.978,14.541C18.963,14.541 18.948,14.547 18.937,14.558C18.926,14.568 18.92,14.583 18.92,14.598C18.92,14.608 18.922,14.618 18.928,14.627C18.933,14.636 18.941,14.643 18.95,14.648L19.744,15.062C19.809,15.096 19.835,15.153 19.82,15.226C19.815,15.249 19.618,16.139 19.613,16.159C19.596,16.237 19.533,16.282 19.442,16.282L17.739,16.282C17.715,16.282 17.69,16.277 17.668,16.267C17.646,16.257 17.626,16.241 17.61,16.223C17.598,16.208 17.589,16.191 17.585,16.173C17.58,16.155 17.581,16.135 17.585,16.116L19.481,7.875C19.5,7.789 19.581,7.751 19.653,7.751L21.016,7.75ZM17.273,7.762C17.292,7.77 17.31,7.781 17.324,7.795C17.338,7.81 17.351,7.828 17.358,7.847C17.366,7.866 17.369,7.886 17.369,7.906L17.358,16.119C17.361,16.138 17.36,16.158 17.355,16.177C17.35,16.196 17.34,16.213 17.328,16.228C17.313,16.245 17.295,16.259 17.274,16.268C17.254,16.277 17.232,16.282 17.21,16.281L15.397,16.281C15.377,16.282 15.356,16.277 15.337,16.27C15.318,16.262 15.3,16.25 15.286,16.236C15.272,16.221 15.26,16.204 15.253,16.185C15.245,16.166 15.241,16.146 15.241,16.125L15.28,15.328C15.282,15.241 15.28,15.217 15.229,15.211L15.161,15.209L13.447,15.209C13.323,15.209 13.314,15.22 13.27,15.334L12.914,16.191C12.882,16.252 12.818,16.281 12.722,16.281L10.927,16.281C10.818,16.281 10.74,16.173 10.781,16.072L14.499,7.873C14.524,7.824 14.562,7.75 14.648,7.75L17.214,7.75C17.234,7.75 17.254,7.754 17.273,7.762ZM15.5,9.985C15.492,9.953 15.466,9.956 15.445,9.998C15.43,10.028 15.416,10.06 15.405,10.091L14.121,13.274C14.114,13.294 14.109,13.31 14.105,13.322C14.104,13.328 14.103,13.335 14.104,13.341C14.105,13.347 14.108,13.353 14.111,13.358C14.115,13.363 14.12,13.367 14.126,13.37C14.131,13.373 14.137,13.376 14.143,13.376L15.215,13.39C15.334,13.38 15.34,13.374 15.352,13.253C15.354,13.21 15.506,10.022 15.5,9.985ZM20.112,9.582C20.097,9.582 20.083,9.588 20.072,9.599C20.061,9.609 20.055,9.624 20.054,9.639C20.054,9.649 20.057,9.659 20.062,9.668C20.068,9.677 20.075,9.685 20.084,9.69C20.097,9.697 20.869,10.104 20.926,10.135C20.968,10.158 20.969,10.198 20.955,10.267C20.948,10.298 20.415,12.642 20.416,12.644C20.419,12.647 20.435,12.655 20.515,12.655L20.551,12.655C21.446,12.619 21.934,11.561 21.952,10.534C21.961,9.979 21.772,9.638 21.429,9.588L21.358,9.582L20.112,9.582Z" },
  { name: "Framer Motion", icon: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" },
  { name: "Java", icon: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" },
  { name: "SEO", icon: "M10 3a7 7 0 1 1 0 14a7 7 0 1 1 0-14zM10 5a5 5 0 1 0 0 10a5 5 0 1 0 0-10zM14.6 16l1.4-1.4 6 6-1.4 1.4z" },
];

// "Skills." list, grouped the way Zain describes his work.
export const skills = [
  {
    title: "Full-Stack Development",
    items: ["React", "Express.js", "Node.js", "Prisma", "MongoDB", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  { title: "Java", items: ["GUI applications"] },
  { title: "SEO", items: ["AEO (Answer Engine Optimization)", "GEO (Generative Engine Optimization)"] },
];

// Social icons: 24×24 paths from simple-icons (same set as the skills ticker).
export const contact = {
  email: "zainq084@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/zainq-123", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-zain-858ba0294/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { label: "Instagram", href: "https://www.instagram.com/zain._.xd362/", icon: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" },
  ],
};

// Shown in this order (Zain's choice: internship first). `logo` (an image in /public/experience) is shown when
// there is one, otherwise the text `mark`.
export const experience = [
  {
    role: "MERN Stack Intern",
    company: "AmentoTech",
    url: "https://amentotech.com",
    logo: "/experience/amentotech.svg",
    period: "Jul — Sep 2025",
    body: "A three-month on-site internship in Lahore, working independently on both frontend and backend tasks — mostly backend: building APIs and integrating MongoDB.",
  },
  {
    role: "Founder",
    company: "ZW_DEVS",
    url: "https://zwdevs.com",
    mark: "ZW_",
    period: "2026 — Present",
    current: true,
    body: "Alongside my degree, I'm building ZW_DEVS — a small web studio that designs and builds fast, SEO-friendly websites for real businesses, with projects like Kairo, CarMania and Foodie-Woodie.",
  },
];

// `current` gets the yearly-moving progress dot (components/year-track.jsx).
export const education = [
  { school: "Roots Ivy International School", level: "College", start: 2022, end: 2024 },
  { school: "University of Central Punjab", level: "University", start: 2024, end: 2028, current: true },
];
