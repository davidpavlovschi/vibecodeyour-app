import ModuleCard from "@/components/ModuleCard";
import { getAllParts, getTotalLessonCount, getAllModules } from "@/lib/course-data";

export default function CoursePage() {
  const parts = getAllParts();
  const totalLessons = getTotalLessonCount();
  const totalModules = getAllModules().length;

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Course Overview</h1>
      <p className="mb-8 text-muted">
        {totalModules} modules &middot; {totalLessons}+ lessons &middot; Text + code format
      </p>

      <div className="mb-8 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
        <p className="text-sm text-green-300">
          <strong>Part I is completely free.</strong> Start with the business of vibecoding
          before unlocking the full methodology.
        </p>
      </div>

      {parts.map((part) => (
        <div key={part.number} className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-xl font-semibold">
              Part {part.number}: {part.title}
            </h2>
            {part.free ? (
              <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                Free
              </span>
            ) : (
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                Paid
              </span>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {part.modules.map((mod) => (
              <ModuleCard key={mod.slug} module={mod} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
