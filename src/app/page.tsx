import Link from "next/link";
import Hero from "@/components/Hero";
import ModuleCard from "@/components/ModuleCard";
import PricingCard from "@/components/PricingCard";
import { getAllParts, getTotalLessonCount, getAllModules } from "@/lib/course-data";

export default function Home() {
  const parts = getAllParts();
  const totalLessons = getTotalLessonCount();
  const totalModules = getAllModules().length;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 z-30 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-bold tracking-tight">
            vibecodeyour.app
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/course" className="text-sm text-muted hover:text-foreground transition-colors">
              Course
            </Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-8 items-center rounded-md bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get Access
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Stats */}
      <section className="border-y border-border bg-sidebar/50 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {[
            { value: "33+", label: "Apps Shipped" },
            { value: `${totalModules}`, label: "Modules" },
            { value: `${totalLessons}+`, label: "Lessons" },
            { value: "0", label: "Videos to Sit Through" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">Three Equal Pillars</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted">
          This isn&apos;t a code tutorial. It&apos;s a methodology built on three disciplines.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Prompt Engineering",
              desc: "How to communicate with AI to generate production-quality code. CLAUDE.md, PATTERNS.md, and the build-fix loop.",
              icon: "⌨️",
            },
            {
              title: "Business Validation",
              desc: "Find profitable niches before you write a line of code. Keyword research, scoring engines, competition analysis.",
              icon: "📊",
            },
            {
              title: "System Design",
              desc: "Architecture that scales from 1 app to 33. Shared frameworks, multi-app codebases, automation pipelines.",
              icon: "🏗️",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-3 text-2xl">{pillar.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">Full Curriculum</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted">
          {totalModules} modules. {totalLessons}+ lessons. From zero to app factory.
        </p>

        {parts.map((part) => (
          <div key={part.number} className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-xl font-semibold">Part {part.number}: {part.title}</h3>
              {part.free && (
                <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                  Free
                </span>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {part.modules.map((mod) => (
                <ModuleCard key={mod.slug} module={mod} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">Get Full Access</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted">
            Part I is free. Unlock the complete methodology with a one-time purchase.
          </p>
          <PricingCard />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-sm text-muted sm:flex-row sm:justify-between">
          <div>Doved Studio &middot; vibecodeyour.app</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/course" className="hover:text-foreground transition-colors">Course</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
