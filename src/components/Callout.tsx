import { ReactNode } from "react";

type CalloutType = "tip" | "warning" | "info" | "key";

const styles: Record<CalloutType, { border: string; bg: string; icon: string; label: string }> = {
  tip: {
    border: "border-green-500/30",
    bg: "bg-green-500/5",
    icon: "💡",
    label: "Tip",
  },
  warning: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    icon: "⚠️",
    label: "Warning",
  },
  info: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    icon: "ℹ️",
    label: "Info",
  },
  key: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    icon: "🔑",
    label: "Key Takeaway",
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
    <div className={`my-6 rounded-lg border ${s.border} ${s.bg} p-4`}>
      <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
        <span>{s.icon}</span>
        <span>{title || s.label}</span>
      </div>
      <div className="text-sm leading-relaxed text-[#d4d4d4]">{children}</div>
    </div>
  );
}
