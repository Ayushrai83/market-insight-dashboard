import { cn } from "@/lib/utils";

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn("skeleton rounded-md", className)} />
);

export const CardSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="gradient-card shadow-card rounded-xl border border-border/60 p-5 space-y-3">
    <Skeleton className="h-4 w-1/3" />
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className={cn("h-6", i === 0 ? "w-1/2" : "w-full")} />
    ))}
  </div>
);

export const ErrorState = ({ message, onRetry }: { message?: string; onRetry?: () => void }) => (
  <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-center">
    <p className="text-sm font-medium text-destructive">{message || "Unable to load data"}</p>
    <p className="mt-1 text-xs text-muted-foreground">Check the backend at /api/v1 and try again.</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-3 rounded-md border border-destructive/40 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/20 transition"
      >
        Retry
      </button>
    )}
  </div>
);
