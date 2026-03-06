import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Vibe Code Your App",
  description: "David Pavlovschii, founder of Doved Studio. 33+ published iOS apps built solo with AI-assisted development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 z-30 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-bold tracking-tight">
            vibecodeyour.app
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/course" className="text-sm text-muted hover:text-foreground transition-colors">
              Course
            </Link>
            <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 pt-32 pb-20">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">About</h1>

        <div className="space-y-6 text-[#d4d4d4] leading-relaxed">
          <p className="text-lg">
            I&apos;m <strong className="text-foreground">David Pavlovschii</strong>, founder of{" "}
            <strong className="text-foreground">Doved Studio</strong>. I&apos;ve published 33+ iOS apps
            on the App Store as a solo developer &mdash; with zero formal coding background.
          </p>

          <p>
            I didn&apos;t learn to code the traditional way. I learned to <em>vibecode</em> &mdash;
            using AI tools like Claude Code, Cursor, and DeepSeek to turn ideas into shipped products
            at a pace that would be impossible alone.
          </p>

          <p>
            My apps span beauty suites (11 apps sharing one framework), combat sport trackers
            (15 apps from a single codebase), AI-powered tools, and more. Each one was built using
            the same methodology: validate the idea, scaffold with AI, ship fast, iterate based on data.
          </p>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">By the Numbers</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["33+", "Published iOS Apps"],
                ["3", "App Suites"],
                ["35", "Supported Locales"],
                ["1", "Developer"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-foreground">{value}</div>
                  <div className="text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <p>
            This course is everything I&apos;ve learned distilled into a methodology. Not code snippets
            you&apos;ll forget &mdash; the <em>system</em> for building profitable apps at scale.
            Prompt engineering, business validation, system design. The three pillars that make
            vibecoding work.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              href="/course"
              className="inline-flex h-10 items-center rounded-lg bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Start the Course
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-10 items-center rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-sidebar-hover"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
