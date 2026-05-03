import { cn } from "@/lib/utils";
import { ShieldAlert, ShieldCheck, Shield } from "lucide-react";
import { riskFromConfidence } from "@/lib/format";

export const RiskBadge = ({ confidence }: { confidence: number }) => {
  const risk = riskFromConfidence(confidence);
  const isHigh = risk === "High Risk";
  const isMed = risk === "Medium Risk";
  const Icon = isHigh ? ShieldAlert : isMed ? Shield : ShieldCheck;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold",
        isHigh && "border-bearish/40 bg-bearish/10 text-bearish",
        isMed && "border-neutral-signal/40 bg-neutral-signal/10 text-neutral-signal",
        !isHigh && !isMed && "border-bullish/40 bg-bullish/10 text-bullish"
      )}
    >
      <Icon className="h-4 w-4" />
      {risk}
    </div>
  );
};
