"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { getAllModules } from "./course-data";

interface ProgressContextType {
  isComplete: (moduleSlug: string, lessonSlug: string) => boolean;
  toggleComplete: (moduleSlug: string, lessonSlug: string) => void;
  completedCount: number;
  totalCount: number;
  percentage: number;
}

const ProgressContext = createContext<ProgressContextType>({
  isComplete: () => false,
  toggleComplete: () => {},
  completedCount: 0,
  totalCount: 0,
  percentage: 0,
});

function getKey(moduleSlug: string, lessonSlug: string) {
  return `vcya_progress:${moduleSlug}/${lessonSlug}`;
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  const totalCount = getAllModules().reduce((sum, m) => sum + m.lessons.length, 0);

  useEffect(() => {
    const keys = new Set<string>();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("vcya_progress:") && localStorage.getItem(key) === "true") {
        keys.add(key.replace("vcya_progress:", ""));
      }
    }
    setCompleted(keys);
    setMounted(true);
  }, []);

  const isComplete = useCallback(
    (moduleSlug: string, lessonSlug: string) => {
      return completed.has(`${moduleSlug}/${lessonSlug}`);
    },
    [completed]
  );

  const toggleComplete = useCallback(
    (moduleSlug: string, lessonSlug: string) => {
      const id = `${moduleSlug}/${lessonSlug}`;
      setCompleted((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
          localStorage.removeItem(getKey(moduleSlug, lessonSlug));
        } else {
          next.add(id);
          localStorage.setItem(getKey(moduleSlug, lessonSlug), "true");
        }
        return next;
      });
    },
    []
  );

  if (!mounted) return <>{children}</>;

  const completedCount = completed.size;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <ProgressContext.Provider value={{ isComplete, toggleComplete, completedCount, totalCount, percentage }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
