import { ReactNode } from "react";

type CalloutType = "tip" | "warning" | "info" | "key";

const styles: Record<CalloutType, { border: string; bg: string; icon: string; label: string; accent: string }> = {
  tip: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/[0.04]",
    icon: "💡",
    label: "Tip",
    accent: "text-emerald-400",
  },
  warning: {
    border: "border-amber-500/20",
    bg: "bg-amber-500/[0.04]",
    icon: "⚠️",
    label: "Warning",
    accent: "text-amber-400",
  },
  info: {
    border: "border-blue-400/20",
    bg: "bg-blue-400/[0.04]",
    icon: "ℹ️",
    label: "Info",
    accent: "text-blue-400",
  },
  key: {
    border: "border-violet-400/20",
    bg: "bg-violet-400/[0.04]",
    icon: "🔑",
    label: "Key Takeaway",
    accent: "text-violet-400",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`my-6 rounded-xl border ${s.border} ${s.bg} p-5`}>
      <div className={`mb-2 flex items-center gap-2 text-sm font-semibold ${s.accent}`}>
        <span>{s.icon}</span>
        <span>{title || s.label}</span>
      </div>
      <div className="text-[13px] leading-relaxed text-muted/80 [&>p]:mb-0">{children}</div>
    </div>
  );
}
