import { DashCard } from "@/components/dash/Card";
import type { BacktestSample } from "@/types/backtest";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

export const AccuracyChart = ({ sample }: { sample: BacktestSample[] }) => {
  let correct = 0;
  const data = [...sample]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((s, i) => {
      if (s.correct) correct++;
      return { date: s.date.slice(5), accuracy: +(((correct / (i + 1)) * 100).toFixed(2)) };
    });
  return (
    <DashCard title="Rolling Accuracy" subtitle="Cumulative accuracy over time">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="acc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [`${v}%`, "Accuracy"]}
            />
            <Area type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#acc)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </DashCard>
  );
};
