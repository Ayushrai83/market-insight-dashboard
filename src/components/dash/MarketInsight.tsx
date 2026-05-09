import { DashCard } from "./Card";
import type { MarketStatus } from "@/types/market";
import { BrainCircuit } from "lucide-react";

interface Props {
  data: MarketStatus;
}

export const MarketInsight = ({ data }: Props) => {
  const { direction, confidence, tradeSignal, meta } = data.summary;

  const insights: string[] = [];

  if (direction === "bullish") {
    insights.push("Bullish market pressure is currently dominant.");
  }

  if (direction === "bearish") {
    insights.push("Bearish sentiment is influencing current market structure.");
  }

  if (direction === "neutral") {
    insights.push("Market conditions remain directionally neutral.");
  }

  if (confidence < 30) {
    insights.push("Signal confidence is extremely low.");
  } else if (confidence < 60) {
    insights.push("Moderate signal confirmation detected.");
  } else {
    insights.push("Strong signal agreement across indicators.");
  }

  if (meta.agreementRatio < 0.5) {
    insights.push("Indicators currently show weak directional agreement.");
  }

  if (meta.strongSignals <= 1) {
    insights.push("Very few indicators are producing strong signals.");
  }

  if (tradeSignal === "avoid") {
    insights.push("Current setup favors avoiding aggressive trades.");
  }

  return (
    <DashCard
      title="Market Insight"
      subtitle="AI-assisted interpretation of current signals"
      className="md:col-span-3"
      action={<BrainCircuit className="h-4 w-4 text-primary" />}
    >
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/20 p-3"
          >
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />

            <p className="text-sm text-muted-foreground leading-relaxed">
              {insight}
            </p>
          </div>
        ))}
      </div>
    </DashCard>
  );
};
