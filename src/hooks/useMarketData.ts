import { useQuery } from "@tanstack/react-query";
import { getMarketStatus } from "@/lib/api";

export const useMarketData = (refetchMs = 60_000) =>
  useQuery({
    queryKey: ["market-status"],
    queryFn: getMarketStatus,
    refetchInterval: refetchMs,
    staleTime: 30_000,
  });
