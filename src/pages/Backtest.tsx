import { useBacktest } from "@/hooks/useBacktest";
import { MetricsCard } from "@/components/backtest/MetricsCard";
import { ConfidenceBucketsChart } from "@/components/backtest/ConfidenceBucketsChart";
import { AccuracyChart } from "@/components/backtest/AccuracyChart";
import { TradesTable } from "@/components/backtest/TradesTable";
import { CardSkeleton, ErrorState } from "@/components/dash/Loader";
import { Target, Repeat, MinusCircle } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Backtest = () => {
  const { data, isLoading, isError, error, refetch } = useBacktest();
  useDocumentTitle("Backtest Performance");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Backtest Performance</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Historical evaluation of signal accuracy. Statistical significance varies with sample size.
        </p>
      </div>

      {isLoading && (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <CardSkeleton lines={2} />
            <CardSkeleton lines={2} />
            <CardSkeleton lines={2} />
          </div>
          <CardSkeleton lines={6} />
        </>
      )}

      {isError && <ErrorState message={(error as Error)?.message} onRetry={() => refetch()} />}

      {data && (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricsCard
              label="Accuracy"
              value={`${data.metrics.accuracy.toFixed(2)}%`}
              hint={data.metrics.isStatisticallyValid ? "Statistically valid" : "Low sample size"}
              Icon={Target}
              tone={data.metrics.accuracy >= 50 ? "bullish" : "bearish"}
            />
            <MetricsCard
              label="Total Trades"
              value={data.metrics.totalTrades}
              hint={`of ${data.metrics.totalEvaluations} evaluations`}
              Icon={Repeat}
            />
            <MetricsCard
              label="Neutral / Skipped"
              value={data.metrics.neutralCount}
              hint="Low-conviction signals"
              Icon={MinusCircle}
              tone="neutral"
            />
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            <ConfidenceBucketsChart buckets={data.metrics.confidenceBuckets} />
            <AccuracyChart sample={data.sample} />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <TradesTable rows={data.sample} />
          </div>
        </>
      )}
    </div>
  );
};

export default Backtest;
