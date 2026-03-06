import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-28 text-center">
      {/* Background: dot grid fading out */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,_rgba(139,92,246,0.12)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl">
        <div className="fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-[13px] text-[#999] backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          33 published iOS apps. One developer. Zero coding background.
        </div>

        <h1 className="fade-up fade-up-delay-1 mb-6 text-[3.5rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-[4.5rem] lg:text-[5.5rem]">
          Ship 30+ Apps/Year
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Solo
          </span>
        </h1>

        <p className="fade-up fade-up-delay-2 mx-auto mb-12 max-w-lg text-[1.1rem] leading-relaxed text-[#888]">
          The complete methodology for building profitable iOS apps at scale using AI.
          Not code snippets &mdash; <span className="text-white/70">the system</span>.
        </p>

        <div className="fade-up fade-up-delay-3 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/course"
            className="group relative inline-flex h-13 items-center justify-center overflow-hidden rounded-xl bg-accent px-9 text-[15px] font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          >
            <span className="relative z-10">Start Learning Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-13 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.02] px-9 text-[15px] font-medium text-white/70 transition-all hover:border-white/[0.2] hover:bg-white/[0.04] hover:text-white"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* Bottom fade to clean section transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
