import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule, getAllModules } from "@/lib/course-data";
import { hasLessonContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllModules().map((m) => ({ module: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>;
}): Promise<Metadata> {
  const { module: moduleSlug } = await params;
  const mod = getModule(moduleSlug);
  if (!mod) return {};
  return {
    title: mod.title,
    description: mod.description,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module: moduleSlug } = await params;
  const mod = getModule(moduleSlug);
  if (!mod) notFound();

  return (
    <div>
      <div className="mb-2 text-sm text-muted">
        Part {mod.part}: {mod.partTitle}
      </div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">{mod.title}</h1>
      <p className="mb-8 text-muted">{mod.description}</p>

      {!mod.free && (
        <div className="mb-8 rounded-xl border border-accent/20 bg-accent/5 p-4">
          <p className="text-sm text-[#d4d4d4]">
            This module requires{" "}
            <Link href="/pricing" className="text-accent underline underline-offset-2">
              full access
            </Link>
            . Part I modules are free.
          </p>
        </div>
      )}

      <div className="space-y-2">
        {mod.lessons.map((lesson, i) => {
          const hasContent = hasLessonContent(moduleSlug, lesson.slug);

          return (
            <Link
              key={lesson.slug}
              href={`/course/${moduleSlug}/${lesson.slug}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-sidebar-hover"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sidebar text-sm font-medium text-muted">
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-medium group-hover:text-accent transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-sm text-muted">{lesson.description}</p>
              </div>
              {hasContent ? (
                <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <span className="text-xs text-muted/50">Coming soon</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
