import { DashCard } from "@/components/dash/Card";
import type { ConfidenceBucket } from "@/types/backtest";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

export const ConfidenceBucketsChart = ({ buckets }: { buckets: ConfidenceBucket[] }) => {
  const data = buckets.map((b) => ({
    range: b.range,
    accuracy: parseFloat(b.accuracy),
    samples: b.samples,
  }));
  return (
    <DashCard title="Confidence Buckets" subtitle="Accuracy by confidence range" className="lg:col-span-2">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
            <Tooltip
              cursor={{ fill: "hsl(var(--secondary))", opacity: 0.4 }}
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number, name) => (name === "accuracy" ? [`${v}%`, "Accuracy"] : [v, name])}
            />
            <Bar dataKey="accuracy" radius={[6, 6, 0, 0]}>
              {data.map((d, i) => (
                <Cell
                  key={i}
                  fill={d.accuracy >= 60 ? "hsl(var(--bullish))" : d.accuracy >= 40 ? "hsl(var(--neutral))" : "hsl(var(--bearish))"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashCard>
  );
};
