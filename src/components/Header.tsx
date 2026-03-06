"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-30 w-full border-b border-white/[0.04] bg-background/60 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[10px] font-black text-white">V</span>
          vibecodeyour.app
        </Link>
        <nav className="flex items-center gap-1">
          {[
            { href: "/course", label: "Course" },
            { href: "/about", label: "About" },
            { href: "/pricing", label: "Pricing" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mx-2 h-4 w-px bg-border" />
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Log Out
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Log In
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              href="/pricing"
              className="ml-1 inline-flex h-8 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Get Access
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
