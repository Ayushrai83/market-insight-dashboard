import { useQuery } from "@tanstack/react-query";
import { getBacktestData } from "@/lib/api";

export const useBacktest = () =>
  useQuery({
    queryKey: ["backtest"],
    queryFn: getBacktestData,
    staleTime: 5 * 60_000,
  });
