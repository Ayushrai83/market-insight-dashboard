import { DashCard } from "@/components/dash/Card";
import { DirectionBadge } from "@/components/dash/Badge";
import type { BacktestSample } from "@/types/backtest";
import { Check, X } from "lucide-react";

export const TradesTable = ({ rows }: { rows: BacktestSample[] }) => (
  <DashCard title="Trade History" subtitle={`${rows.length} evaluated samples`} className="lg:col-span-3">
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="px-3 py-2 font-medium">Date</th>
            <th className="px-3 py-2 font-medium">Prediction</th>
            <th className="px-3 py-2 font-medium">Actual</th>
            <th className="px-3 py-2 font-medium">Confidence</th>
            <th className="px-3 py-2 text-right font-medium">Result</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={`${r.date}-${i}`}
              className="border-b border-border/40 transition-colors hover:bg-secondary/40"
            >
              <td className="px-3 py-3 font-mono text-xs">{r.date}</td>
              <td className="px-3 py-3"><DirectionBadge direction={r.prediction} /></td>
              <td className="px-3 py-3"><DirectionBadge direction={r.actual} /></td>
              <td className="px-3 py-3 font-mono tabular-nums">{r.confidence}%</td>
              <td className="px-3 py-3 text-right">
                {r.correct ? (
                  <span className="inline-flex items-center gap-1 rounded-md bg-bullish/15 px-2 py-1 text-xs font-semibold text-bullish">
                    <Check className="h-3.5 w-3.5" /> Correct
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md bg-bearish/15 px-2 py-1 text-xs font-semibold text-bearish">
                    <X className="h-3.5 w-3.5" /> Wrong
                  </span>
                )}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={5} className="py-8 text-center text-sm text-muted-foreground">
                No trades to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </DashCard>
);
