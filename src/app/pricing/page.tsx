import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Get lifetime access to the complete vibecoding methodology. One-time purchase, no subscription.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-5xl px-6 pt-36 pb-24">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Pricing
        </p>
        <h1 className="mb-3 text-center text-4xl font-extrabold tracking-[-0.03em]">Simple Pricing</h1>
        <p className="mx-auto mb-14 max-w-md text-center text-[15px] text-muted">
          One price. Lifetime access. No subscriptions.
        </p>

        <PricingCard />

        <div className="mx-auto mt-20 max-w-md">
          <h2 className="mb-6 text-center text-lg font-semibold">What&apos;s included</h2>
          <div className="space-y-3 text-[13px]">
            {[
              { title: "Part I: Free", desc: "3 modules on the business of vibecoding. No purchase required.", border: "border-white/[0.04]" },
              { title: "Parts II-V: Full Access", desc: "13 additional modules covering building, scaling, automation, and advanced vibecoding.", border: "border-accent/20" },
              { title: "Private GitHub Repo", desc: "Companion code, templates, CLAUDE.md examples.", border: "border-white/[0.04]" },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl border ${item.border} bg-[#0c0c0c] p-5`}>
                <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-sm text-muted">Already have access?</p>
          <Link
            href="/login"
            className="inline-flex h-10 items-center rounded-lg border border-white/[0.08] px-6 text-sm font-medium transition-colors hover:bg-white/[0.03]"
          >
            Sign In
          </Link>
        </div>
      </main>
    </div>
  );
}
