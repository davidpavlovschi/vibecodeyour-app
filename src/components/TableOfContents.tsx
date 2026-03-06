"use client";

import { useEffect, useState } from "react";
import type { TOCItem } from "@/lib/headings";

export default function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    for (const h of headings) {
      const el = document.getElementById(h.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className="hidden xl:block fixed right-[max(1rem,calc((100vw-1400px)/2))] top-24 w-56">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted">
        On this page
      </p>
      <ul className="space-y-1 border-l border-border">
        {headings.map((h) => (
          <li key={h.slug}>
            <a
              href={`#${h.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.slug)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block border-l-2 py-1 text-[13px] leading-snug transition-colors ${
                h.level === 3 ? "pl-6" : "pl-4"
              } ${
                activeSlug === h.slug
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted/70 hover:text-muted"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
