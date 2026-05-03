import { useMarketData } from "@/hooks/useMarketData";
import { MarketCard } from "@/components/dash/MarketCard";
import { SignalBreakdown } from "@/components/dash/SignalBreakdown";
import { IndicatorPanel } from "@/components/dash/IndicatorPanel";
import { CardSkeleton, ErrorState } from "@/components/dash/Loader";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useMarketData();

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Market Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Live signal aggregation. Auto-refreshes every 60 seconds.
          </p>
        </div>
        <button
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium hover:bg-secondary"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {isLoading && (
        <div className="grid gap-4 md:grid-cols-3">
          <CardSkeleton lines={4} />
          <CardSkeleton lines={4} />
          <CardSkeleton lines={4} />
        </div>
      )}

      {isError && <ErrorState message={(error as Error)?.message} onRetry={() => refetch()} />}

      {data && (
        <div className="grid gap-4 md:grid-cols-3">
          <MarketCard data={data} />
          <SignalBreakdown data={data} />
          <div className="md:col-span-3">
            <IndicatorPanel data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
