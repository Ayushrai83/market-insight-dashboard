import { DashCard } from "./Card";
import { ConfidenceBar } from "./ConfidenceBar";
import type { MarketStatus } from "@/types/market";
import { TrendingUp, Gauge, Building2, Waves, Globe } from "lucide-react";

const META: Record<
  string,
  { label: string; desc: string; Icon: typeof TrendingUp }
> = {
  trend: { label: "Trend", desc: "Long-term direction", Icon: TrendingUp },
  rsi: { label: "RSI", desc: "Momentum", Icon: Gauge },
  fii: { label: "FII", desc: "Institutional flow", Icon: Building2 },
  vix: { label: "VIX", desc: "Volatility", Icon: Waves },
  global: { label: "Global", desc: "US market influence", Icon: Globe },
};

const valueTone = (v: number): "bullish" | "bearish" | "neutral" =>
  v > 0.1 ? "bullish" : v < -0.1 ? "bearish" : "neutral";

const signalStrength = (value: number) => {
  const abs = Math.abs(value);

  if (abs >= 0.75) return "strong";
  if (abs >= 0.4) return "medium";

  return "weak";
};

export const SignalBreakdown = ({ data }: { data: MarketStatus }) => (
  <DashCard title="Signal Breakdown" subtitle="Per-signal value & confidence">
    <div className="grid gap-3 sm:grid-cols-2">
      {Object.entries(data?.signals || {}).map(([key, sig]) => {
        const m = META[key] || { label: key, desc: "", Icon: TrendingUp };
        const value = sig?.value ?? 0;

        const tone = valueTone(value);
        const strength = signalStrength(value);
        return (
          <div
            key={key}
            className={`rounded-lg border bg-secondary/30 p-3 transition-all duration-200 hover:border-primary/40 ${
              strength === "strong"
                ? tone === "bullish"
                  ? "border-bullish/40 shadow-[0_0_30px_rgba(34,197,94,0.18)]"
                  : tone === "bearish"
                    ? "border-bearish/40 shadow-[0_0_30px_rgba(239,68,68,0.18)]"
                    : "border-neutral-signal/40"
                : strength === "medium"
                  ? "border-border/20"
                  : "border-border/50 opacity-80"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <m.Icon
                  className={`h-4 w-4 ${tone === "bullish" ? "text-bullish" : tone === "bearish" ? "text-bearish" : "text-neutral-signal"}`}
                />
                <div>
                  <p className="text-sm font-semibold">{m.label}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.desc}
                  </p>
                </div>
              </div>
              <span
                className={`font-mono tabular-nums ${
                  strength === "strong" ? "text-base font-bold" : "text-sm"
                }`}
              >
                {value > 0 ? "+" : ""}
                {value.toFixed(2)}
              </span>
            </div>
            <div className="mt-3">
              <ConfidenceBar
                value={(sig?.confidence ?? 0) * 100}
                tone={tone}
                showLabel={false}
              />
              <p className="mt-1 text-right text-[11px] text-muted-foreground">
                conf {Math.round((sig?.confidence ?? 0) * 100)}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </DashCard>
);
