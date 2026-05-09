import { useMarketData } from "@/hooks/useMarketData";
import { MarketCard } from "@/components/dash/MarketCard";
import { SignalBreakdown } from "@/components/dash/SignalBreakdown";
import { IndicatorPanel } from "@/components/dash/IndicatorPanel";
import { CardSkeleton, ErrorState } from "@/components/dash/Loader";
import { RefreshCw } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { MarketInsight } from "@/components/dash/MarketInsight";

const Index = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useMarketData();
  useDocumentTitle("Dashboard");

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Market Dashboard
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  isFetching ? "bg-yellow-500 animate-pulse" : "bg-green-500"
                }`}
              />

              <span>
                {isFetching ? "Refreshing market data..." : "Live market data"}
              </span>
            </div>

            <span className="hidden sm:inline text-border">•</span>

            <span>
              Updated{" "}
              {new Date(dataUpdatedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
        <button
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium hover:bg-secondary"
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}`}
          />
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {isLoading && (
        <div className="grid gap-4 md:grid-cols-3">
          <CardSkeleton lines={4} />
          <CardSkeleton lines={4} />
          <CardSkeleton lines={4} />
        </div>
      )}

      {isError && (
        <ErrorState
          message={(error as Error)?.message}
          onRetry={() => refetch()}
        />
      )}

      {data && (
        <div className="grid gap-4 md:grid-cols-3">
          <MarketCard data={data} />
          <SignalBreakdown data={data} />
          <div className="md:col-span-3">
            <IndicatorPanel data={data} />
          </div>
            <MarketInsight data={data} />
        </div>
      )}
    </div>
  );
};

export default Index;
