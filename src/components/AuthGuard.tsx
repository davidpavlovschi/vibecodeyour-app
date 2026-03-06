"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { ReactNode } from "react";

export default function AuthGuard({
  children,
  free,
}: {
  children: ReactNode;
  free: boolean;
}) {
  const { isLoggedIn } = useAuth();

  if (free || isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Blurred preview */}
      <div className="pointer-events-none max-h-[300px] overflow-hidden select-none" aria-hidden>
        <div className="blur-sm opacity-50">{children}</div>
      </div>

      {/* Paywall overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-background/80 to-background">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-[#0f0f0f] p-8 text-center shadow-2xl">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold">This lesson requires full access</h3>
          <p className="mb-6 text-sm text-muted">
            Part I is free. Unlock the complete vibecoding methodology with a one-time purchase.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/pricing"
              className="flex h-11 items-center justify-center rounded-lg bg-accent font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
            >
              Get Full Access
            </Link>
            <Link
              href="/login"
              className="flex h-11 items-center justify-center rounded-lg border border-border text-sm font-medium transition-colors hover:bg-sidebar-hover"
            >
              Already purchased? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
