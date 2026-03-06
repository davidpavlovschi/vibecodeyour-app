import Link from "next/link";
import type { Module } from "@/lib/course-data";

export default function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/course/${module.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:bg-sidebar-hover"
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
          {module.order}
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          {module.lessons.length} lessons
        </span>
        {module.free && (
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
            Free
          </span>
        )}
      </div>
      <h3 className="mb-1 text-lg font-semibold group-hover:text-accent transition-colors">
        {module.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{module.description}</p>
    </Link>
  );
}
