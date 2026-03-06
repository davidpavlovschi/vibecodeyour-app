import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Vibe Code Your App",
  description: "Get lifetime access to the complete vibecoding methodology. One-time purchase, no subscription.",
};

export default function PricingPage() {
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
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <h1 className="mb-2 text-center text-4xl font-bold tracking-tight">Simple Pricing</h1>
        <p className="mx-auto mb-12 max-w-xl text-center text-lg text-muted">
          One price. Lifetime access. No subscriptions, no upsells.
        </p>

        <PricingCard />

        <div className="mx-auto mt-16 max-w-md">
          <h2 className="mb-6 text-center text-xl font-semibold">What&apos;s included</h2>
          <div className="space-y-4 text-sm text-[#d4d4d4]">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-1 font-semibold text-foreground">Part I: Free</h3>
              <p className="text-muted">3 modules on the business of vibecoding. No purchase required.</p>
            </div>
            <div className="rounded-lg border border-accent/20 bg-card p-4">
              <h3 className="mb-1 font-semibold text-foreground">Parts II-V: Full Access</h3>
              <p className="text-muted">13 additional modules covering building, scaling, automation, and advanced vibecoding.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-1 font-semibold text-foreground">Private GitHub Repo</h3>
              <p className="text-muted">Access to companion code, templates, and CLAUDE.md examples.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
