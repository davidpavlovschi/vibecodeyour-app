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
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-accent/30 bg-card">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-accent/20 blur-[80px]" />

      <div className="relative p-8">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider text-accent">
          Full Course Access
        </p>
        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-5xl font-bold">$299</span>
          <span className="text-muted line-through">$499</span>
        </div>
        <p className="mb-6 text-sm text-muted">One-time payment. Lifetime access.</p>

        <a
          href="https://gumroad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex h-12 w-full items-center justify-center rounded-lg bg-accent font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Get Full Access
        </a>

        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#d4d4d4]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
