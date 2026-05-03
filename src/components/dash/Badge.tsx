import { cn } from "@/lib/utils";
import type { Direction } from "@/types/market";
import { directionTone } from "@/lib/format";

export const DirectionBadge = ({ direction, className }: { direction: Direction; className?: string }) => {
  const t = directionTone(direction);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
        "border",
        direction === "bullish" && "bg-bullish/15 text-bullish border-bullish/30",
        direction === "bearish" && "bg-bearish/15 text-bearish border-bearish/30",
        direction === "neutral" && "bg-neutral-signal/15 text-neutral-signal border-neutral-signal/30",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", t.bg)} />
      {t.label}
    </span>
  );
};

export const PillBadge = ({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "bullish" | "bearish" | "neutral";
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex rounded-md px-2 py-0.5 text-xs font-medium",
      tone === "default" && "bg-secondary text-secondary-foreground",
      tone === "bullish" && "bg-bullish/15 text-bullish",
      tone === "bearish" && "bg-bearish/15 text-bearish",
      tone === "neutral" && "bg-neutral-signal/15 text-neutral-signal",
      className
    )}
  >
    {children}
  </span>
);
