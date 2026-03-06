"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAllParts } from "@/lib/course-data";

export default function Sidebar() {
  const pathname = usePathname();
  const parts = getAllParts();
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const part of parts) {
      for (const mod of part.modules) {
        if (pathname.includes(`/course/${mod.slug}`)) {
          initial[mod.slug] = true;
        }
      }
    }
    return initial;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleModule(slug: string) {
    setOpenModules((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  const nav = (
    <nav className="flex flex-col gap-1 p-4">
      <Link
        href="/course"
        className={`mb-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          pathname === "/course"
            ? "bg-accent/10 text-accent"
            : "text-muted hover:bg-sidebar-hover hover:text-foreground"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        Course Overview
      </Link>

      {parts.map((part) => (
        <div key={part.number} className="mb-2">
          <div className="mb-1 flex items-center gap-2 px-3 pt-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Part {part.number}
            </span>
            {part.free && (
              <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-[10px] font-medium text-green-400">
                Free
              </span>
            )}
          </div>
          <span className="mb-2 block px-3 text-xs text-muted/70">{part.title}</span>

          {part.modules.map((mod) => {
            const isOpen = openModules[mod.slug];
            const isModuleActive = pathname.includes(`/course/${mod.slug}`);

            return (
              <div key={mod.slug}>
                <button
                  onClick={() => toggleModule(mod.slug)}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                    isModuleActive
                      ? "text-foreground"
                      : "text-muted hover:bg-sidebar-hover hover:text-foreground"
                  }`}
                >
                  <svg
                    className={`h-3 w-3 shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="truncate">{mod.title}</span>
                </button>

                {isOpen && (
                  <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3">
                    {mod.lessons.map((lesson) => {
                      const lessonPath = `/course/${mod.slug}/${lesson.slug}`;
                      const isActive = pathname === lessonPath;

                      return (
                        <Link
                          key={lesson.slug}
                          href={lessonPath}
                          onClick={() => setMobileOpen(false)}
                          className={`rounded-md px-2 py-1 text-[13px] transition-colors ${
                            isActive
                              ? "bg-accent/10 text-accent font-medium"
                              : "text-muted hover:bg-sidebar-hover hover:text-foreground"
                          }`}
                        >
                          {lesson.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-sidebar lg:hidden"
        aria-label="Toggle sidebar"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-[280px] overflow-y-auto border-r border-border bg-sidebar transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center border-b border-border px-5">
          <Link href="/" className="text-sm font-bold tracking-tight" onClick={() => setMobileOpen(false)}>
            vibecodeyour.app
          </Link>
        </div>
        {nav}
      </aside>
    </>
  );
}
