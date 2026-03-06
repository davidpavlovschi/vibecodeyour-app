import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      {/* Gradient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          33 published iOS apps. One developer. Zero coding background.
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Ship 30+ Apps/Year{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            Solo
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          The complete methodology for building profitable iOS apps at scale
          using AI-assisted development. Not code snippets &mdash; the system.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/course"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Start Learning Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-base font-medium text-foreground transition-colors hover:bg-sidebar-hover"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
