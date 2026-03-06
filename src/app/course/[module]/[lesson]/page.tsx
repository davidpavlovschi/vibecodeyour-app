import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, getAdjacentLessons, getAllModules } from "@/lib/course-data";
import { getLessonContent } from "@/lib/content";
import LessonContent from "@/components/LessonContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const params: { module: string; lesson: string }[] = [];
  for (const mod of getAllModules()) {
    for (const lesson of mod.lessons) {
      params.push({ module: mod.slug, lesson: lesson.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string; lesson: string }>;
}): Promise<Metadata> {
  const { module: moduleSlug, lesson: lessonSlug } = await params;
  const data = getLesson(moduleSlug, lessonSlug);
  if (!data) return {};
  return {
    title: `${data.lesson.title} - ${data.module.title}`,
    description: data.lesson.description,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ module: string; lesson: string }>;
}) {
  const { module: moduleSlug, lesson: lessonSlug } = await params;
  const data = getLesson(moduleSlug, lessonSlug);
  if (!data) notFound();

  const { module: mod, lesson } = data;
  const content = getLessonContent(moduleSlug, lessonSlug);
  const adjacent = getAdjacentLessons(moduleSlug, lessonSlug);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted">
        <Link href="/course" className="hover:text-foreground transition-colors">
          Course
        </Link>
        <span>/</span>
        <Link href={`/course/${mod.slug}`} className="hover:text-foreground transition-colors">
          {mod.title}
        </Link>
        <span>/</span>
        <span className="text-foreground">{lesson.title}</span>
      </div>

      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold tracking-tight">{lesson.title}</h1>
      <p className="mb-8 text-muted">{lesson.description}</p>

      {/* Content */}
      {content ? (
        <LessonContent source={content.content} />
      ) : (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="mb-2 text-lg font-medium">Coming Soon</p>
          <p className="text-sm text-muted">
            This lesson is being written. Check back soon.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
        {adjacent.prev ? (
          <Link
            href={`/course/${adjacent.prev.moduleSlug}/${adjacent.prev.lessonSlug}`}
            className="group flex flex-col"
          >
            <span className="text-xs text-muted">Previous</span>
            <span className="text-sm font-medium group-hover:text-accent transition-colors">
              &larr; {adjacent.prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {adjacent.next ? (
          <Link
            href={`/course/${adjacent.next.moduleSlug}/${adjacent.next.lessonSlug}`}
            className="group flex flex-col items-end"
          >
            <span className="text-xs text-muted">Next</span>
            <span className="text-sm font-medium group-hover:text-accent transition-colors">
              {adjacent.next.title} &rarr;
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
