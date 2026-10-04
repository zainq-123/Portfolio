import Link from "next/link";

export const meta = {
  slug: "prisma-connection-pooling",
  title: "Prisma Connection Pooling: A Practical Guide (2026)",
  description:
    "How Prisma connection pooling works in Prisma 6 and 7, how to size the pool, fix P2024 timeouts and run Prisma safely on serverless with PgBouncer.",
  excerpt: "How the pool works, what changed in Prisma 7, how to size it, and how to stop timeouts on serverless.",
  tag: "Backend",
  cover: "Connection pooling",
  keywords: ["Prisma connection pooling", "Prisma 7", "connection pool size", "PgBouncer", "serverless", "PostgreSQL"],
  date: "2026-10-04",
  // Hero photo: CC0 (public domain) via Wikimedia Commons; credited on the article page.
  image: {
    src: "/blog/prisma-connection-pooling.jpg",
    alt: "Aisle of server racks in a data center",
    credit: "Derrick Coetzee",
    source: "https://commons.wikimedia.org/w/index.php?curid=17445617",
  },
  projects: ["kairo"],
  toc: [
    { id: "what-is-connection-pooling", label: "What is connection pooling?" },
    { id: "how-it-works", label: "How Prisma connection pooling works" },
    { id: "prisma-7", label: "What changed in Prisma 7?" },
    { id: "pool-size", label: "How big should the pool be?" },
    { id: "too-many-clients", label: "The mistake that breaks most apps" },
    { id: "serverless", label: "Prisma on serverless" },
    { id: "long-running", label: "Long-running servers" },
    { id: "monitor", label: "Monitoring the pool" },
    { id: "errors", label: "Common errors and fixes" },
    { id: "faq", label: "FAQ" },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        <strong>Short answer:</strong> Prisma connection pooling keeps a small set of database connections open and
        shares them between your queries, so each request doesn't pay the cost of opening a new connection. In Prisma 6
        you size the pool with <code>connection_limit</code> in the database URL. In Prisma 7 the pool belongs to your
        driver adapter (for example <code>pg</code>) and defaults to 10 connections.
      </p>
      <p>
        If your app is fast on your laptop but starts throwing timeouts the day real users arrive, the problem is
        usually not your queries. It is your connections. This guide explains how Prisma handles them, what changed in
        Prisma 7, how to pick a pool size, and how to keep serverless functions from flooding your database. It is the
        same checklist I use on <a href="https://zwdevs.com">full-stack projects at ZW_DEVS</a>, my web studio.
      </p>

      <h2 id="what-is-connection-pooling">What is connection pooling (and why does Prisma need it)?</h2>
      <p>
        Opening a database connection is slow and expensive. Your app has to open a network connection, often do a
        TLS handshake, and log in. On the database side, PostgreSQL starts a whole new process for every connection. Do
        that for every request and your database spends more time saying hello than answering questions.
      </p>
      <p>
        A <strong>connection pool</strong> fixes this. It opens a few connections once, keeps them alive, and lends
        them to queries one at a time. When a query finishes, its connection goes back to the pool for the next one.
        Think of it like a small fleet of shared bikes: nobody buys a new bike for every trip.
      </p>
      <p>
        The catch is that databases have a hard limit. PostgreSQL allows{" "}
        <a href="https://www.postgresql.org/docs/current/runtime-config-connection.html">100 connections by default</a>
        , and managed plans are often lower. Your pool has to fit inside that limit, together with everything else that
        talks to the same database.
      </p>

      <h2 id="how-it-works">How does Prisma connection pooling work?</h2>
      <p>
        Every <code>PrismaClient</code> you create gets its own pool. The pool is created on the first query (or when
        you call <code>$connect()</code>), and queries wait in line when every connection is busy. How you configure it
        depends on your Prisma version.
      </p>

      <h3>Prisma 6 and earlier: the query engine's pool</h3>
      <p>
        Older versions run a query engine that manages the pool for you. By default it opens{" "}
        <strong>number of physical CPUs × 2 + 1</strong> connections. You change that with two parameters on the
        connection string:
      </p>
      <ul>
        <li>
          <code>connection_limit</code> — the maximum number of connections in the pool.
        </li>
        <li>
          <code>pool_timeout</code> — how many seconds a query waits for a free connection before it fails. The
          default is 10.
        </li>
      </ul>
      <pre>
        <code>{`DATABASE_URL="postgresql://user:pass@host:5432/app?connection_limit=5&pool_timeout=20"`}</code>
      </pre>

      <h3>Prisma 7: the pool lives in your driver adapter</h3>
      <p>
        Prisma 7 talks to relational databases through <strong>driver adapters</strong> by default. That means the pool
        is now created by the regular Node.js driver you pass in, and the <code>connection_limit</code> and{" "}
        <code>pool_timeout</code> URL parameters no longer do anything. For PostgreSQL with the <code>pg</code>{" "}
        adapter, the default pool size is 10, and you configure it like this:
      </p>
      <pre>
        <code>{`import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client"; // your generator's output path

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  max: 10,                        // pool size
  connectionTimeoutMillis: 5_000, // how long to wait for a connection
  idleTimeoutMillis: 30_000,      // close connections that sit idle
});

export const prisma = new PrismaClient({ adapter });`}</code>
      </pre>
      <p>
        MySQL, MariaDB and SQL Server adapters work the same way: you use the pool options of that driver. The{" "}
        <a href="https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool">
          official Prisma connection pool docs
        </a>{" "}
        list the option names for each one.
      </p>

      <h2 id="prisma-7">What changed in Prisma 7?</h2>
      <p>If you are upgrading, this is the part that bites people. The settings moved, so old URLs silently stop working.</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Setting</th>
              <th scope="col">Prisma 6</th>
              <th scope="col">Prisma 7 (pg adapter)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Where you configure the pool</td>
              <td>Connection URL</td>
              <td>Driver adapter options</td>
            </tr>
            <tr>
              <td>Pool size</td>
              <td>
                <code>connection_limit</code>
              </td>
              <td>
                <code>max</code>
              </td>
            </tr>
            <tr>
              <td>Default size</td>
              <td>Physical CPUs × 2 + 1</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Wait for a connection</td>
              <td>
                <code>pool_timeout</code> (10 s)
              </td>
              <td>
                <code>connectionTimeoutMillis</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        After upgrading, search your environment files for <code>connection_limit</code>. If it is still there, your
        pool is not sized the way you think it is.
      </p>

      <h2 id="pool-size">How big should your Prisma connection pool be?</h2>
      <p>Bigger is not better. A few rules keep you out of trouble:</p>
      <ol>
        <li>
          <strong>Do the multiplication.</strong> Instances × pool size must stay below your database's limit. With a
          limit of 100 and three app servers, keep each pool around 25 so migrations, admin tools and backups still have
          room.
        </li>
        <li>
          <strong>Start small.</strong> A database can only run so many queries at once — roughly its CPU cores times
          two. Fifty connections on a 2-core database just means fifty queries fighting over two cores.
        </li>
        <li>
          <strong>Keep transactions short.</strong> A transaction holds its connection until it finishes. Prisma's
          interactive transactions time out after 5 seconds by default for a reason: anything slower blocks the pool.
        </li>
        <li>
          <strong>Measure, then adjust.</strong> If requests wait for connections while the database CPU is calm, raise
          the pool. If the CPU is pegged, a bigger pool will only make things worse.
        </li>
      </ol>

      <h2 id="too-many-clients">The mistake that breaks most apps: too many PrismaClient instances</h2>
      <p>
        Because every client has its own pool, creating a new <code>PrismaClient</code> inside a request handler creates
        a new pool for every request. Your app runs out of connections within minutes. Create the client{" "}
        <strong>once</strong> and import it everywhere.
      </p>
      <p>
        In development there is a second trap: hot reloading re-runs your modules and quietly creates new clients. The
        standard fix is to keep one client on <code>globalThis</code>:
      </p>
      <pre>
        <code>{`const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;`}</code>
      </pre>

      <h2 id="serverless">How do you use Prisma connection pooling on serverless?</h2>
      <p>
        Serverless functions are where pooling gets hard. Each function instance has its own client and its own pool,
        and a traffic spike can start hundreds of instances at once. Two hundred instances with five connections each is
        a thousand connections — far past most database limits.
      </p>
      <p>What works:</p>
      <ul>
        <li>
          <strong>Keep each instance's pool tiny.</strong> One or two connections is enough for a single function
          (<code>connection_limit=1</code> in Prisma 6, <code>max: 1</code> in Prisma 7).
        </li>
        <li>
          <strong>Put an external pooler in front of the database.</strong> PgBouncer, your provider's built-in pooler,
          or Prisma Accelerate can serve thousands of short-lived clients with a few real database connections.
        </li>
        <li>
          <strong>Watch for prepared statements.</strong> PgBouncer in transaction mode does not keep session state.
          With Prisma 6, add <code>pgbouncer=true</code> to the connection URL so Prisma stops relying on it.
        </li>
        <li>
          <strong>Run migrations on a direct connection.</strong> Migrations need a real session, so point the Prisma
          CLI at the database directly (the <code>directUrl</code> field in Prisma 6, the datasource URL in{" "}
          <code>prisma.config.ts</code> in Prisma 7) and give the app the pooled URL.
        </li>
      </ul>

      <h2 id="long-running">What about long-running Node servers?</h2>
      <p>
        A normal Express server is the easy case. It starts once, creates one Prisma client, and keeps the same pool for
        its whole life. Size the pool for how many requests you really run in parallel, and close it cleanly with{" "}
        <code>await prisma.$disconnect()</code> when the process shuts down.
      </p>
      <p>
        That is how the API behind <Link href="/work/kairo">Kairo</Link>, a menswear store I built, works: one
        long-lived Express + Prisma process behind Nginx and Cloudflare. Orders run inside short database transactions
        with idempotency, so a retried checkout can never charge a customer twice — and short transactions also hand
        their connection back to the pool quickly. You can see the live store at{" "}
        <a href="https://kairo.zwdevs.com">kairo.zwdevs.com</a>.
      </p>

      <h2 id="monitor">How do you monitor your connection pool?</h2>
      <p>
        Guessing is how pools end up too big or too small. PostgreSQL can tell you exactly what is connected right now.
        Run this in your database console:
      </p>
      <pre>
        <code>{`SELECT state, count(*)
FROM pg_stat_activity
WHERE datname = current_database()
GROUP BY state;`}</code>
      </pre>
      <p>Read the result like this:</p>
      <ul>
        <li>
          <strong>Lots of <code>idle</code> connections</strong> — your pools are bigger than your traffic needs.
          Shrink them, or lower the idle timeout so unused connections close.
        </li>
        <li>
          <strong>Many <code>active</code> connections and slow responses</strong> — the database itself is the
          bottleneck. A bigger pool won't help; faster queries and indexes will.
        </li>
        <li>
          <strong><code>idle in transaction</code></strong> — a transaction was opened and not finished. These hold a
          connection and often locks, so find the code path that leaves them open.
        </li>
      </ul>
      <p>
        On the app side, turn on Prisma's query logging in staging (<code>new PrismaClient(&#123; log: ["query"] &#125;)</code>
        ) to spot slow or repeated queries before they eat your pool in production.
      </p>

      <h2 id="errors">What do common Prisma connection errors mean?</h2>
      <ul>
        <li>
          <strong>P2024 — "Timed out fetching a new connection from the connection pool."</strong> Every connection was
          busy for longer than <code>pool_timeout</code>. Look for slow queries and long transactions before you raise
          the limit.
        </li>
        <li>
          <strong>"Sorry, too many clients already."</strong> That one comes from PostgreSQL itself: all of its
          connections are taken. You have too many instances or clients — add an external pooler or shrink each pool.
        </li>
        <li>
          <strong>Connection spikes after every deploy.</strong> Usually several clients per process. Check for{" "}
          <code>new PrismaClient()</code> outside your shared module.
        </li>
      </ul>

      <h2 id="faq">Prisma connection pooling FAQ</h2>
      <h3>What is the default connection pool size in Prisma?</h3>
      <p>
        In Prisma 6 it is the number of physical CPUs × 2 + 1. In Prisma 7 the driver adapter decides; with PostgreSQL's{" "}
        <code>pg</code> adapter it is 10.
      </p>
      <h3>Does connection_limit still work in Prisma 7?</h3>
      <p>
        No. Prisma 7 uses driver adapters, so pool settings go on the adapter (for example <code>max</code> on{" "}
        <code>PrismaPg</code>), not in the connection URL.
      </p>
      <h3>Do I need PgBouncer with Prisma?</h3>
      <p>
        Not for a single long-running server. You do need PgBouncer or another external pooler when many serverless
        instances connect to the same database.
      </p>
      <h3>Should I create a new PrismaClient for each request?</h3>
      <p>No. Create one client per process and reuse it. Each new client opens a new pool.</p>

      <p>
        Connection pooling is one of those things nobody notices until it breaks. Get the numbers right once and your
        database stays calm through traffic spikes. If you are choosing a stack for a new project, my guide on{" "}
        <Link href="/blog/framework-vs-library">framework vs library</Link> helps, and if search traffic matters,
        read <Link href="/blog/react-seo">React SEO</Link> next. And if you would rather have someone build it with you,{" "}
        <a href="https://zwdevs.com">ZW_DEVS</a> designs and builds fast full-stack apps like this.
      </p>
    </>
  );
}
