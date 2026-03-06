import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.05)_0%,_transparent_60%)]" />
      <div className="relative">
        <p className="mb-3 text-8xl font-extrabold tracking-tighter text-white/[0.04]">404</p>
        <h1 className="mb-2 text-2xl font-bold tracking-tight">Page not found</h1>
        <p className="mb-8 text-[15px] text-muted">
          This page doesn&apos;t exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]"
          >
            Go Home
          </Link>
          <Link
            href="/course"
            className="inline-flex h-10 items-center rounded-xl border border-white/[0.08] px-6 text-sm font-medium transition-all hover:bg-white/[0.03]"
          >
            Browse Course
          </Link>
        </div>
      </div>
    </div>
  );
}
