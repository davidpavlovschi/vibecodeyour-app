import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "David Pavlovschii, founder of Doved Studio. 33+ published iOS apps built solo with AI-assisted development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-2xl px-6 pt-36 pb-24">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          About
        </p>
        <h1 className="mb-8 text-4xl font-extrabold tracking-[-0.03em]">The Story</h1>

        <div className="space-y-6 text-[15px] leading-relaxed text-muted/80">
          <p className="text-lg text-foreground/80">
            I&apos;m <strong className="text-foreground font-semibold">David Pavlovschii</strong>, founder of{" "}
            <strong className="text-foreground font-semibold">Doved Studio</strong>. I&apos;ve shipped 33+ iOS apps
            on the App Store as a solo developer &mdash; with zero formal coding background.
          </p>

          <p>
            I didn&apos;t learn to code the traditional way. I learned to <em className="text-foreground/70">vibecode</em> &mdash;
            using AI tools like Claude Code, Cursor, and DeepSeek to turn ideas into shipped products
            at a pace that would be impossible alone.
          </p>

          <p>
            My apps span beauty suites (11 apps sharing one framework), combat sport trackers
            (15 apps from a single codebase), AI-powered tools, and more. Each one was built using
            the same methodology: validate the idea, scaffold with AI, ship fast, iterate based on data.
          </p>

          <div className="rounded-2xl border border-white/[0.04] bg-[#0c0c0c] p-7">
            <h2 className="mb-5 text-lg font-semibold text-foreground">By the Numbers</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                ["33+", "Published iOS Apps"],
                ["3", "App Suites"],
                ["35", "Supported Locales"],
                ["1", "Developer"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-3xl font-extrabold tracking-tight text-foreground">{value}</div>
                  <div className="mt-0.5 text-[13px] text-muted/50">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <p>
            This course is everything I&apos;ve learned distilled into a methodology. Not code snippets
            you&apos;ll forget &mdash; the <em className="text-foreground/70">system</em> for building profitable apps at scale.
          </p>

          <div className="flex gap-4 pt-6">
            <Link
              href="/course"
              className="group relative inline-flex h-11 items-center overflow-hidden rounded-xl bg-accent px-7 text-sm font-semibold text-white transition-all hover:shadow-[0_0_28px_rgba(139,92,246,0.3)]"
            >
              <span className="relative z-10">Start the Course</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center rounded-xl border border-white/[0.08] px-7 text-sm font-medium transition-all hover:border-white/[0.15] hover:bg-white/[0.03]"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
