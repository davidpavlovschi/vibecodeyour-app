"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.06] bg-[#0c0c0c]/95 backdrop-blur-xl p-5 shadow-2xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-[13px] leading-relaxed text-muted/70">
              We use cookies for essential functionality and analytics to improve your experience.
              See our{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={decline}
              className="rounded-lg border border-white/[0.06] px-4 py-2 text-[13px] font-medium text-muted/60 transition-colors hover:border-white/[0.12] hover:text-foreground"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="rounded-lg bg-accent px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
