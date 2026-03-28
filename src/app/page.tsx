import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";
import PricingCard from "@/components/PricingCard";
import { getAllParts, getTotalLessonCount, getAllModules } from "@/lib/course-data";
import Link from "next/link";

export default function Home() {
  const parts = getAllParts();
  const totalLessons = getTotalLessonCount();
  const totalModules = getAllModules().length;

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Stats */}
      <section className="relative border-y border-white/[0.04] py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {[
            { value: "33+", label: "Apps Shipped" },
            { value: `${totalModules}`, label: "Modules" },
            { value: `${totalLessons}+`, label: "Lessons" },
            { value: "0", label: "Videos to Sit Through" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight">{stat.value}</div>
              <div className="mt-1.5 text-[13px] text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          The Method
        </p>
        <h2 className="mb-3 text-center text-4xl font-extrabold tracking-[-0.03em]">Three Equal Pillars</h2>
        <p className="mx-auto mb-14 max-w-md text-center text-[15px] text-muted">
          Not a code tutorial. A methodology built on three disciplines.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "Prompt Engineering",
              desc: "How to communicate with AI to generate production-quality code. CLAUDE.md, PATTERNS.md, and the build-fix loop.",
              gradient: "from-violet-500/20 to-transparent",
            },
            {
              title: "Business Validation",
              desc: "Find profitable niches before you write a line of code. Keyword research, scoring engines, competition analysis.",
              gradient: "from-blue-500/20 to-transparent",
            },
            {
              title: "System Design",
              desc: "Architecture that scales from 1 app to 33. Shared frameworks, multi-app codebases, automation pipelines.",
              gradient: "from-fuchsia-500/20 to-transparent",
            },
          ].map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#0c0c0c] p-7 transition-all duration-300 hover:border-white/[0.08]"
            >
              <div className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${pillar.gradient} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-lg">
                  {["⌨️", "📊", "🏗️"][i]}
                </div>
                <h3 className="mb-2 text-[15px] font-semibold">{pillar.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted/70">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-white/[0.04] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>
          <h2 className="mb-14 text-center text-4xl font-extrabold tracking-[-0.03em]">
            The Vibecoding Loop
          </h2>
          <div className="grid gap-0 sm:grid-cols-4">
            {[
              { step: "01", title: "Validate", desc: "Research the niche. Score the opportunity. Only build what will earn." },
              { step: "02", title: "Scaffold", desc: "AI generates the project structure. You define the architecture." },
              { step: "03", title: "Build", desc: "Prompt, generate, build, fix. The 5-iteration loop that ships features." },
              { step: "04", title: "Deploy", desc: "Fastlane automation. 15 apps. One command. App Store in minutes." },
            ].map((item, i) => (
              <div key={item.step} className="relative px-6 py-4">
                {i < 3 && <div className="pointer-events-none absolute top-1/2 right-0 hidden h-px w-6 bg-gradient-to-r from-white/10 to-transparent sm:block" />}
                <div className="mb-3 text-[11px] font-bold text-accent/60">{item.step}</div>
                <h3 className="mb-1.5 text-[15px] font-semibold">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Curriculum
        </p>
        <h2 className="mb-3 text-center text-4xl font-extrabold tracking-[-0.03em]">Full Curriculum</h2>
        <p className="mx-auto mb-14 max-w-md text-center text-[15px] text-muted">
          {totalModules} modules. {totalLessons}+ lessons. From zero to app factory.
        </p>

        {parts.map((part) => (
          <div key={part.number} className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <h3 className="text-lg font-semibold tracking-tight">Part {part.number}: {part.title}</h3>
              {part.free ? (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 tracking-wide">
                  Free
                </span>
              ) : (
                <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-muted/50 tracking-wide">
                  Paid
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
      <section id="pricing" className="relative overflow-hidden border-t border-white/[0.04] py-24">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Pricing
          </p>
          <h2 className="mb-3 text-center text-4xl font-extrabold tracking-[-0.03em]">Get Full Access</h2>
          <p className="mx-auto mb-14 max-w-md text-center text-[15px] text-muted">
            Part I is free. Unlock everything with a one-time purchase.
          </p>
          <PricingCard />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-bold">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-accent text-[9px] font-black text-white">V</span>
                vibecodeyour.app
              </div>
              <p className="text-[13px] text-muted/50">
                Built by Doved Studio. Ship iOS apps at scale.
              </p>
            </div>
            <div className="flex gap-8 text-[13px]">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted/40">Course</span>
                <Link href="/course" className="text-muted/60 hover:text-foreground transition-colors">Overview</Link>
                <Link href="/pricing" className="text-muted/60 hover:text-foreground transition-colors">Pricing</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted/40">Links</span>
                <Link href="/about" className="text-muted/60 hover:text-foreground transition-colors">About</Link>
                <Link href="/login" className="text-muted/60 hover:text-foreground transition-colors">Sign In</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted/40">Legal</span>
                <Link href="/privacy" className="text-muted/60 hover:text-foreground transition-colors">Privacy</Link>
                <Link href="/terms" className="text-muted/60 hover:text-foreground transition-colors">Terms</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/[0.04] pt-6 text-[12px] text-muted/30">
            &copy; {new Date().getFullYear()} Doved Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
