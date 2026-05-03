import { DashCard } from "@/components/dash/Card";
import type { LucideIcon } from "lucide-react";

export const MetricsCard = ({
  label,
  value,
  hint,
  Icon,
  tone = "default",
}: {
  label: string;
  value: string | number;
  hint?: string;
  Icon: LucideIcon;
  tone?: "default" | "bullish" | "bearish" | "neutral";
}) => {
  const toneCls =
    tone === "bullish"
      ? "text-bullish"
      : tone === "bearish"
      ? "text-bearish"
      : tone === "neutral"
      ? "text-neutral-signal"
      : "text-primary";
  return (
    <DashCard className="flex items-center gap-4">
      <div className={`rounded-lg bg-secondary p-3 ${toneCls}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 font-mono text-2xl font-bold tabular-nums">{value}</p>
        {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      </div>
    </DashCard>
  );
};
