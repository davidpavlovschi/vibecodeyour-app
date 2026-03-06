import Link from "next/link";
import type { Module } from "@/lib/course-data";

export default function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/course/${module.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.04] bg-[#0c0c0c] p-6 transition-all duration-300 hover:border-accent/20 hover:bg-[#0e0e0e] hover:shadow-[0_0_40px_rgba(139,92,246,0.06)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-[13px] font-bold text-accent">
            {module.order}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-muted/60">
            {module.lessons.length} lessons
          </span>
          {module.free && (
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 tracking-wide">
              Free
            </span>
          )}
        </div>
        <h3 className="mb-1.5 text-[15px] font-semibold leading-snug transition-colors group-hover:text-accent">
          {module.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-muted/70">{module.description}</p>
      </div>
    </Link>
  );
}
