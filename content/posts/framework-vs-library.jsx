import Link from "next/link";

export const meta = {
  slug: "framework-vs-library",
  title: "Framework vs Library: The Real Difference, Explained",
  description:
    "Framework vs library explained simply: who calls whom, real examples like React, Next.js and Express, a side-by-side table, and how to choose for your project.",
  excerpt: "Who calls whom, why React is a library, and how to pick the right tool for your next project.",
  tag: "Fundamentals",
  cover: "Framework vs library",
  keywords: ["framework vs library", "inversion of control", "React", "Next.js", "Express.js", "JavaScript"],
  date: "2026-10-04",
  // Hero photo: CC0 (public domain) via Wikimedia Commons; credited on the article page.
  image: {
    src: "/blog/framework-vs-library.jpg",
    alt: "Developer writing code on a laptop",
    credit: "Tirza van Dijk",
    source: "https://commons.wikimedia.org/w/index.php?curid=61740057",
  },
  projects: ["kairo", "food-noche", "rps-cafe"],
  toc: [
    { id: "difference", label: "The real difference" },
    { id: "library", label: "What is a library?" },
    { id: "framework", label: "What is a framework?" },
    { id: "side-by-side", label: "Side by side" },
    { id: "pros-cons", label: "Pros and cons" },
    { id: "test", label: "A quick test" },
    { id: "react", label: "Is React a library or a framework?" },
    { id: "express-tailwind", label: "Express and Tailwind" },
    { id: "choose", label: "How to choose" },
    { id: "myths", label: "Common myths" },
    { id: "real-projects", label: "How I choose on real projects" },
    { id: "faq", label: "FAQ" },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        <strong>Short answer:</strong> The difference between a framework and a library is who is in control. You call
        a library when you need it, and your code stays in charge. A framework calls your code: it decides the structure
        and the flow, and you fill in the pieces it asks for. React is a library; Next.js is a framework built on it.
      </p>
      <p>
        People use the two words as if they mean the same thing, and the marketing pages don't help — Express calls
        itself a framework, React calls itself a library, and both are "just JavaScript". But the difference is real,
        and it changes how you build. Here it is in plain English, with the choices I make on client projects at{" "}
        <a href="https://zwdevs.com">ZW_DEVS</a>.
      </p>

      <h2 id="difference">What is the difference between a framework and a library?</h2>
      <p>
        It comes down to one idea called <strong>inversion of control</strong>. Programmers sometimes call it the
        Hollywood principle: "Don't call us, we'll call you."
      </p>
      <p>With a library, your code is the boss. You decide when to call a function and what to do with the result:</p>
      <pre>
        <code>{`import { formatDistance } from "date-fns"; // a library

const label = formatDistance(order.createdAt, new Date()); // you call it`}</code>
      </pre>
      <p>
        With a framework, the framework is the boss. You write small pieces of code, and the framework decides when to
        run them:
      </p>
      <pre>
        <code>{`import express from "express"; // a framework

const app = express();
app.get("/orders", (req, res) => res.json(orders)); // Express calls this when a request arrives
app.listen(3000);`}</code>
      </pre>
      <p>
        You never call that route handler yourself. Express does. That is the whole difference, and everything else
        follows from it.
      </p>

      <h2 id="library">What is a library?</h2>
      <p>
        A library is a collection of ready-made code that solves one kind of problem. You pull it in, use the parts you
        need, and ignore the rest. It doesn't care how your project is organised.
      </p>
      <ul>
        <li>
          <strong>React</strong> — builds user interfaces from components.
        </li>
        <li>
          <strong>GSAP</strong> and <strong>Framer Motion</strong> — animation.
        </li>
        <li>
          <strong>Lodash</strong> and <strong>date-fns</strong> — everyday helper functions.
        </li>
        <li>
          <strong>Axios</strong> — making HTTP requests.
        </li>
      </ul>
      <p>
        Libraries are easy to add and easy to swap. If you don't like an animation library, you can replace it without
        rewriting your app.
      </p>

      <h2 id="framework">What is a framework?</h2>
      <p>
        A framework gives you the skeleton of an application: where files go, how routing works, how data is loaded,
        how the app starts. You build inside its rules, and in return it handles a lot of hard work for you.
      </p>
      <ul>
        <li>
          <strong>Next.js</strong> — a React framework with routing, server rendering and build tooling.
        </li>
        <li>
          <strong>Angular</strong> — a complete front-end framework with its own way of doing almost everything.
        </li>
        <li>
          <strong>Express</strong> and <strong>NestJS</strong> — frameworks for Node.js servers.
        </li>
      </ul>
      <p>
        Frameworks save time on big projects and keep teams consistent. The price is that leaving one usually means a
        rewrite.
      </p>

      <h2 id="side-by-side">Framework vs library: side by side</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Library</th>
              <th scope="col">Framework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Who is in control</th>
              <td>Your code calls it</td>
              <td>It calls your code</td>
            </tr>
            <tr>
              <th scope="row">Scope</th>
              <td>One job</td>
              <td>The whole app's structure</td>
            </tr>
            <tr>
              <th scope="row">Rules</th>
              <td>Few — use it your way</td>
              <td>Many — follow its conventions</td>
            </tr>
            <tr>
              <th scope="row">Learning curve</th>
              <td>Usually gentle</td>
              <td>Steeper, but you learn it once</td>
            </tr>
            <tr>
              <th scope="row">Switching later</th>
              <td>Easy</td>
              <td>Often a rewrite</td>
            </tr>
            <tr>
              <th scope="row">Examples</th>
              <td>React, GSAP, Lodash, Axios</td>
              <td>Next.js, Angular, Express, NestJS</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="pros-cons">What are the pros and cons of each?</h2>
      <h3>Libraries</h3>
      <ul>
        <li>
          <strong>Pro:</strong> you stay in control and only add what you need, which keeps small projects small.
        </li>
        <li>
          <strong>Pro:</strong> they are easy to learn one at a time and easy to replace.
        </li>
        <li>
          <strong>Con:</strong> you make every structural decision yourself — routing, folder layout, data loading —
          and on a big project those decisions add up.
        </li>
        <li>
          <strong>Con:</strong> combining many libraries means more versions to keep compatible.
        </li>
      </ul>
      <h3>Frameworks</h3>
      <ul>
        <li>
          <strong>Pro:</strong> the hard, repetitive problems are already solved, so you build features sooner.
        </li>
        <li>
          <strong>Pro:</strong> shared conventions make it easy for a new developer to find their way around.
        </li>
        <li>
          <strong>Con:</strong> you have to learn the framework's way of doing things, and fighting it is painful.
        </li>
        <li>
          <strong>Con:</strong> you are tied to its upgrades and decisions, and leaving usually means rewriting.
        </li>
      </ul>

      <h2 id="test">A quick test: is it a library or a framework?</h2>
      <p>When you meet a new tool, ask three questions:</p>
      <ol>
        <li>
          <strong>Who starts the program?</strong> If the tool runs the app and calls your code, it is a framework.
        </li>
        <li>
          <strong>Does it tell you where files go?</strong> Required folders and naming rules point to a framework.
        </li>
        <li>
          <strong>Could you remove it in an afternoon?</strong> If yes, it is almost certainly a library.
        </li>
      </ol>

      <h2 id="react">Is React a library or a framework?</h2>
      <p>
        React is a <strong>library</strong>. Its own website calls it "the library for web and native user
        interfaces". It renders components and manages their state, but it doesn't decide how you route pages, load
        data or build your app.
      </p>
      <p>
        That is why the React team now recommends starting new apps with a framework built on React, such as
        Next.js. You still write React components; the framework adds routing, server rendering and the build
        pipeline. This portfolio is a good example: the components are React, and Next.js decides how they become
        fast, prerendered pages.
      </p>

      <h2 id="express-tailwind">Is Express a framework? What about Tailwind CSS?</h2>
      <p>
        Express is a framework, but a very small one — it describes itself as "unopinionated" and "minimalist". It
        controls the request flow and calls your handlers, yet leaves almost every other decision to you. That makes it
        feel library-like, which is why people argue about it.
      </p>
      <p>
        Tailwind CSS calls itself a "utility-first CSS framework", but in practice it behaves more like a toolkit: it
        gives you small classes and you decide how to combine them. Labels are less important than the question that
        matters — <strong>who is in charge of your code?</strong>
      </p>

      <h2 id="choose">Should you use a framework or a library?</h2>
      <p>Pick a <strong>library</strong> when:</p>
      <ul>
        <li>You are adding one capability — animation, dates, charts — to an existing project.</li>
        <li>You want maximum control and the project is small.</li>
        <li>You might want to swap the tool later.</li>
      </ul>
      <p>Pick a <strong>framework</strong> when:</p>
      <ul>
        <li>You are starting a full application and want routing, data loading and builds solved for you.</li>
        <li>SEO matters, and you need pages rendered as real HTML on the server.</li>
        <li>Several people will work on the code and need shared conventions.</li>
      </ul>

      <h2 id="myths">Common myths about frameworks and libraries</h2>
      <ul>
        <li>
          <strong>"Frameworks are always slower."</strong> Not true. A good framework often makes sites faster, because
          it handles code splitting, server rendering and image optimisation that most people never get around to
          doing by hand.
        </li>
        <li>
          <strong>"Libraries are only for small projects."</strong> Huge apps are built from libraries all the time.
          They just need a team that agrees on structure without a framework enforcing it.
        </li>
        <li>
          <strong>"You have to pick one."</strong> You almost never do. Nearly every modern project uses a framework for
          the skeleton and several libraries for specific jobs.
        </li>
      </ul>

      <h2 id="real-projects">How I choose on real projects</h2>
      <p>
        Most real projects use both. A few examples from my own work at{" "}
        <a href="https://zwdevs.com">ZW_DEVS, the web development studio I run</a>:
      </p>
      <ul>
        <li>
          <Link href="/work/kairo">Kairo</Link>, a full-stack menswear store, uses React (a library) for the interface,
          Express (a framework) for the API, Prisma (a library you call) to talk to the database, and Framer Motion for
          animation. You can try it at <a href="https://kairo.zwdevs.com">kairo.zwdevs.com</a>.
        </li>
        <li>
          <Link href="/work/food-noche">Food Noche</Link>, a cinematic restaurant site, pairs React with GSAP for
          scroll-driven storytelling.
        </li>
        <li>
          <Link href="/work/rps-cafe">R.P's Café</Link> uses no framework at all — just HTML, CSS and a little
          JavaScript — because a small café site doesn't need one, and the result loads instantly.
        </li>
      </ul>
      <p>
        The pattern: frameworks for the structure of big apps, libraries for specific jobs, and neither when plain code
        does the job. If you are deciding between a hand-built site and a platform, my comparison of{" "}
        <Link href="/blog/custom-website-vs-wordpress">custom websites vs WordPress</Link> goes deeper.
      </p>

      <h2 id="faq">Framework vs library FAQ</h2>
      <h3>What is the main difference between a framework and a library?</h3>
      <p>
        Control. You call a library from your code. A framework calls your code and sets the structure of your app.
      </p>
      <h3>Is Next.js a framework or a library?</h3>
      <p>Next.js is a framework. It is built on top of the React library and adds routing, rendering and tooling.</p>
      <h3>Is jQuery a library or a framework?</h3>
      <p>jQuery is a library. You call its functions whenever you need them, and it doesn't control your app.</p>
      <h3>Is Angular a framework or a library?</h3>
      <p>
        Angular is a framework — one of the most complete ones. It ships its own routing, forms, HTTP client and
        project structure, and it runs your components inside its own lifecycle.
      </p>
      <h3>Is Node.js a framework?</h3>
      <p>
        No. Node.js is a runtime: it lets JavaScript run outside the browser, on servers and in tools. Frameworks like
        Express and NestJS run on top of Node.js, and libraries like Prisma are used inside them.
      </p>
      <h3>Can I use a library inside a framework?</h3>
      <p>
        Yes, all the time. A Next.js app (framework) commonly uses GSAP or Framer Motion (libraries) for animation.
      </p>

      <p>
        Knowing who is in control makes tool choices much easier — and makes the docs make sense. Next, see how the
        framework choice affects search rankings in my <Link href="/blog/react-seo">React SEO guide</Link>, or how the
        database layer holds up under load in <Link href="/blog/prisma-connection-pooling">Prisma connection
        pooling</Link>. If you'd like help picking a stack for your project, <a href="https://zwdevs.com">ZW_DEVS</a> is
        happy to talk.
      </p>
    </>
  );
}
