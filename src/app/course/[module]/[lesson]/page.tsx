import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, getAdjacentLessons, getAllModules, getModule } from "@/lib/course-data";
import { getLessonContent } from "@/lib/content";
import LessonContent from "@/components/LessonContent";
import LessonComplete from "@/components/LessonComplete";
import AuthGuard from "@/components/AuthGuard";
import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/lib/headings";
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

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
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
  const headings = content ? extractHeadings(content.content) : [];
  const readingTime = content ? getReadingTime(content.content) : 0;
  const moduleData = getModule(moduleSlug);
  const isFree = moduleData?.free ?? false;

  return (
    <div>
      {/* Table of contents (right side) */}
      {headings.length > 1 && <TableOfContents headings={headings} />}

      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-[13px] text-muted/50">
        <Link href="/course" className="transition-colors hover:text-foreground">
          Course
        </Link>
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <Link href={`/course/${mod.slug}`} className="transition-colors hover:text-foreground">
          {mod.title}
        </Link>
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="text-foreground/70">{lesson.title}</span>
      </div>

      {/* Title */}
      <h1 className="mb-2 text-[2rem] font-extrabold tracking-[-0.03em] leading-tight">{lesson.title}</h1>
      <div className="mb-8 flex items-center gap-3 text-[13px] text-muted/50">
        <span>{lesson.description}</span>
        {readingTime > 0 && (
          <>
            <span className="h-1 w-1 rounded-full bg-muted/30" />
            <span>{readingTime} min read</span>
          </>
        )}
      </div>

      {/* Content */}
      {content ? (
        <AuthGuard free={isFree}>
          <LessonContent source={content.content} />

          {/* Mark complete */}
          <div className="mt-10 flex justify-center">
            <LessonComplete moduleSlug={moduleSlug} lessonSlug={lessonSlug} />
          </div>
        </AuthGuard>
      ) : (
        <div className="rounded-2xl border border-white/[0.04] bg-[#0c0c0c] p-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.04]">
            <svg className="h-6 w-6 text-muted/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="mb-1 text-lg font-semibold">Coming Soon</p>
          <p className="text-[13px] text-muted/50">This lesson is being written. Check back soon.</p>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/[0.04] pt-8">
        {adjacent.prev ? (
          <Link
            href={`/course/${adjacent.prev.moduleSlug}/${adjacent.prev.lessonSlug}`}
            className="group rounded-xl border border-white/[0.04] bg-[#0c0c0c] p-4 transition-all hover:border-accent/20"
          >
            <span className="text-[11px] text-muted/40">Previous</span>
            <span className="mt-0.5 block text-sm font-medium transition-colors group-hover:text-accent">
              &larr; {adjacent.prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {adjacent.next ? (
          <Link
            href={`/course/${adjacent.next.moduleSlug}/${adjacent.next.lessonSlug}`}
            className="group rounded-xl border border-white/[0.04] bg-[#0c0c0c] p-4 text-right transition-all hover:border-accent/20"
          >
            <span className="text-[11px] text-muted/40">Next</span>
            <span className="mt-0.5 block text-sm font-medium transition-colors group-hover:text-accent">
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
