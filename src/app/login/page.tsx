"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  if (isLoggedIn) {
    router.push("/course");
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (login(username, password)) {
        router.push("/course");
      } else {
        setError("Invalid credentials");
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.08)_0%,_transparent_70%)]" />

      <div className="relative w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 block text-center text-sm font-bold tracking-tight text-foreground"
        >
          vibecodeyour.app
        </Link>

        <div className="rounded-2xl border border-border bg-[#0f0f0f] p-8">
          <h1 className="mb-1 text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mb-6 text-sm text-muted">Sign in to access the full course.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="mb-1.5 block text-sm font-medium text-[#ccc]">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Enter username"
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[#ccc]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-lg bg-accent font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Don&apos;t have access?{" "}
          <Link href="/pricing" className="text-accent hover:underline">
            Get the course
          </Link>
        </p>
      </div>
    </div>
  );
}
