import { DashCard } from "./Card";
import { DirectionBadge } from "./Badge";
import { ConfidenceBar } from "./ConfidenceBar";
import { RiskBadge } from "./RiskBadge";
import { conviction, fmtTime } from "@/lib/format";
import type { MarketStatus } from "@/types/market";
import { Activity } from "lucide-react";

export const MarketCard = ({ data }: { data: MarketStatus }) => {
  const { direction, confidence, tradeSignal } = data.summary;
  const tone = direction === "bullish" ? "bullish" : direction === "bearish" ? "bearish" : "neutral";
  return (
    <DashCard
      title="Market Direction"
      subtitle="Probability-based insight — not a prediction"
      action={<DirectionBadge direction={direction} />}
      className="md:col-span-2"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Read</p>
          <p className="mt-1 text-2xl font-semibold leading-tight">
            Likely <span className={tone === "bullish" ? "text-bullish" : tone === "bearish" ? "text-bearish" : "text-neutral-signal"}>{direction}</span>{" "}
            <span className="text-muted-foreground">({confidence}% confidence)</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{conviction(confidence)}</p>
          <div className="mt-4">
            <ConfidenceBar value={confidence} tone={tone} />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <RiskBadge confidence={confidence} />
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Signal:</span>
              <span className="font-semibold uppercase tracking-wide">{tradeSignal}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated <span className="font-mono">{fmtTime(data.meta.lastUpdated)}</span>
            {data.meta.cached && <span className="ml-2 rounded bg-muted px-1.5 py-0.5">cached</span>}
          </p>
        </div>
      </div>
    </DashCard>
  );
};
