import axios from "axios";
import type { MarketStatus } from "@/types/market";
import type { BacktestData } from "@/types/backtest";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: string | null;
}

export async function getMarketStatus(): Promise<MarketStatus> {
  const { data } = await api.get<ApiResponse<MarketStatus>>("/market/status");
  if (!data.success) throw new Error(data.error || "Market API error");
  return data.data;
}

export async function getBacktestData(): Promise<BacktestData> {
  const { data } = await api.get<ApiResponse<BacktestData>>("/backtest");
  if (!data.success) throw new Error(data.error || "Backtest API error");
  return data.data;
}
