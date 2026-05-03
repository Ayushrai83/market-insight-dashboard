import { cn } from "@/lib/utils";

interface Props {
  value: number; // 0-100
  tone?: "bullish" | "bearish" | "neutral" | "primary";
  className?: string;
  showLabel?: boolean;
}

export const ConfidenceBar = ({ value, tone = "primary", className, showLabel = true }: Props) => {
  const v = Math.max(0, Math.min(100, value));
  const fill =
    tone === "bullish"
      ? "bg-bullish"
      : tone === "bearish"
      ? "bg-bearish"
      : tone === "neutral"
      ? "bg-neutral-signal"
      : "bg-primary";
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Confidence</span>
          <span className="font-mono font-semibold tabular-nums">{v.toFixed(0)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn("h-full rounded-full animate-progress transition-all duration-700", fill)}
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
};
