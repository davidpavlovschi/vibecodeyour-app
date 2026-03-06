const features = [
  "16 in-depth modules, 55+ lessons",
  "Text + code format (reference anytime)",
  "Complete vibecoding methodology",
  "Prompt engineering for code generation",
  "Business validation frameworks",
  "System design & architecture patterns",
  "Automation & deployment pipelines",
  "Private GitHub repo access",
  "Lifetime access + future updates",
];

export default function PricingCard() {
  return (
    <div className="gradient-border relative mx-auto w-full max-w-md overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-accent/15 blur-[100px] glow-pulse" />

      <div className="relative rounded-2xl p-8">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
          Full Course Access
        </p>
        <div className="mb-1 flex items-baseline gap-2.5">
          <span className="text-5xl font-extrabold tracking-tight">$299</span>
          <span className="text-lg text-muted/50 line-through">$499</span>
        </div>
        <p className="mb-8 text-sm text-muted">One-time payment. Lifetime access.</p>

        <a
          href="https://gumroad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-8 flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-accent font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(139,92,246,0.4)]"
        >
          <span className="relative z-10">Get Full Access</span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>

        <ul className="space-y-3.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[13px]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <svg
                  className="h-3 w-3 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-muted/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
