"use client";

import { useProgress } from "@/lib/progress";

export default function LessonComplete({
  moduleSlug,
  lessonSlug,
}: {
  moduleSlug: string;
  lessonSlug: string;
}) {
  const { isComplete, toggleComplete } = useProgress();
  const completed = isComplete(moduleSlug, lessonSlug);

  return (
    <button
      onClick={() => toggleComplete(moduleSlug, lessonSlug)}
      className={`group inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
        completed
          ? "border-green-500/30 bg-green-500/5 text-green-400"
          : "border-border bg-card text-muted hover:border-green-500/20 hover:text-green-400"
      }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
          completed
            ? "border-green-500 bg-green-500"
            : "border-muted/40 group-hover:border-green-500/40"
        }`}
      >
        {completed && (
          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {completed ? "Completed" : "Mark as complete"}
    </button>
  );
}
