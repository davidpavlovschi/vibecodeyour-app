"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAllParts } from "@/lib/course-data";
import { useProgress } from "@/lib/progress";
import { useAuth } from "@/lib/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const parts = getAllParts();
  const { isComplete, percentage } = useProgress();
  const { isLoggedIn, logout } = useAuth();
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
    <nav className="flex flex-col gap-0.5 p-4">
      {/* Home link */}
      <Link
        href="/"
        className="mb-1 flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-muted/50 transition-colors hover:text-foreground"
        onClick={() => setMobileOpen(false)}
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>

      <Link
        href="/course"
        className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
          pathname === "/course"
            ? "bg-accent/10 text-accent"
            : "text-muted/60 hover:bg-white/[0.03] hover:text-foreground"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        Course Overview
      </Link>

      {/* Progress bar */}
      {percentage > 0 && (
        <div className="mx-3 mt-2 mb-1">
          <div className="flex items-center justify-between text-[10px] text-muted/40">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/[0.04]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-purple-400 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}

      {parts.map((part) => (
        <div key={part.number} className="mt-3">
          <div className="mb-1 flex items-center gap-2 px-3 pt-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/30">
              Part {part.number}
            </span>
            {part.free && (
              <span className="rounded bg-emerald-500/10 px-1.5 py-px text-[9px] font-semibold text-emerald-400/70">
                Free
              </span>
            )}
          </div>
          <span className="mb-1.5 block px-3 text-[11px] text-muted/25">{part.title}</span>

          {part.modules.map((mod) => {
            const isOpen = openModules[mod.slug];
            const isModuleActive = pathname.includes(`/course/${mod.slug}`);

            return (
              <div key={mod.slug}>
                <button
                  onClick={() => toggleModule(mod.slug)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-[13px] transition-colors ${
                    isModuleActive
                      ? "text-foreground"
                      : "text-muted/50 hover:bg-white/[0.02] hover:text-foreground"
                  }`}
                >
                  <svg
                    className={`h-3 w-3 shrink-0 text-muted/30 transition-transform duration-200 ${
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
                  <div className="ml-[18px] mt-px flex flex-col gap-px border-l border-white/[0.04] pl-3">
                    {mod.lessons.map((lesson) => {
                      const lessonPath = `/course/${mod.slug}/${lesson.slug}`;
                      const isActive = pathname === lessonPath;
                      const completed = isComplete(mod.slug, lesson.slug);

                      return (
                        <Link
                          key={lesson.slug}
                          href={lessonPath}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 rounded-md px-2 py-1 text-[12px] transition-colors ${
                            isActive
                              ? "bg-accent/10 text-accent font-medium"
                              : "text-muted/45 hover:bg-white/[0.02] hover:text-foreground"
                          }`}
                        >
                          {completed && (
                            <svg className="h-3 w-3 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          <span className={completed ? "" : ""}>{lesson.title}</span>
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

      {/* Auth section at bottom */}
      <div className="mt-6 border-t border-white/[0.04] pt-4">
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="w-full rounded-lg px-3 py-2 text-left text-[12px] text-muted/40 transition-colors hover:text-foreground"
          >
            Sign out
          </button>
        ) : (
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2 text-[12px] text-muted/40 transition-colors hover:text-foreground"
          >
            Sign in for full access
          </Link>
        )}
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0a0a0a] backdrop-blur-xl lg:hidden"
        aria-label="Toggle sidebar"
      >
        <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen w-[280px] flex-col overflow-y-auto border-r border-white/[0.04] bg-[#080808] transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 shrink-0 items-center border-b border-white/[0.04] px-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-bold tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-accent text-[9px] font-black text-white">V</span>
            vibecodeyour.app
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">{nav}</div>
      </aside>
    </>
  );
}
