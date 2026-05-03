import { DashCard } from "./Card";
import type { MarketStatus } from "@/types/market";
import { fmtNumber } from "@/lib/format";

const Stat = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="rounded-lg border border-border/60 bg-secondary/30 p-4">
    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    <p className="mt-1 font-mono text-2xl font-semibold tabular-nums">{value}</p>
    {hint && <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>}
  </div>
);

export const IndicatorPanel = ({ data }: { data: MarketStatus }) => {
  const { close, sma200, rsi } = data.indicators;
  const { fii, vix, global } = data.macro;
  const aboveSma = close >= sma200;
  return (
    <DashCard title="Indicators" subtitle="Technical & macro snapshot">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Close Price" value={fmtNumber(close)} hint={aboveSma ? "Above SMA200" : "Below SMA200"} />
        <Stat label="RSI (14)" value={fmtNumber(rsi)} hint={rsi > 70 ? "Overbought" : rsi < 30 ? "Oversold" : "Neutral"} />
        <Stat label="SMA 200" value={fmtNumber(sma200)} />
        <Stat label="FII Net Flow" value={fmtNumber(fii.netFlow)} />
        <Stat label="India VIX" value={fmtNumber(vix.value)} />
        <Stat label="US Market" value={`${global.usMarketChange > 0 ? "+" : ""}${fmtNumber(global.usMarketChange)}%`} />
      </div>
    </DashCard>
  );
};
