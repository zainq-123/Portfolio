import Link from "next/link";
import { ArticleCards, ProjectCards } from "@/components/cards";
import JsonLd from "@/components/json-ld";
import Panel from "@/components/panel";
import Showcase from "@/components/showcase";
import Sidebar from "@/components/sidebar";
import { projects } from "@/lib/data";
import { posts } from "@/lib/posts";
import { person } from "@/lib/schema";

export const metadata = { alternates: { canonical: "/" } };

// Desktop: 30% info / 70% work, each column scrolls on its own. Mobile: one normal page.
export default function Home() {
  return (
    <main className="lg:grid lg:h-dvh lg:grid-cols-[minmax(360px,30%)_1fr] lg:overflow-hidden">
      <JsonLd data={person()} />
      <Panel>
        <Sidebar />
      </Panel>
      <Panel>
        <Showcase
          counts={{ work: projects.length, writing: posts.length }}
          work={<ProjectCards />}
          writing={
            <>
              <ArticleCards />
              <li className="sm:col-span-2">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white">
                  All writing →
                </Link>
              </li>
            </>
          }
        />
      </Panel>
    </main>
  );
}
