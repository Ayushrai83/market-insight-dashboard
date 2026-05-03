import type { Direction } from "@/types/market";

export const riskFromConfidence = (c: number): "High Risk" | "Medium Risk" | "Low Risk" => {
  if (c < 30) return "High Risk";
  if (c <= 60) return "Medium Risk";
  return "Low Risk";
};

export const directionTone = (d: Direction) => {
  switch (d) {
    case "bullish": return { color: "text-bullish", bg: "bg-bullish", label: "Bullish" };
    case "bearish": return { color: "text-bearish", bg: "bg-bearish", label: "Bearish" };
    default: return { color: "text-neutral-signal", bg: "bg-neutral-signal", label: "Neutral" };
  }
};

export const fmtNumber = (n: number, digits = 2) =>
  Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: digits }) : "—";

export const fmtTime = (iso: string) => {
  try { return new Date(iso).toLocaleString(); } catch { return iso; }
};

export const conviction = (c: number) =>
  c < 30 ? "Low conviction — avoid trading" : c < 60 ? "Moderate conviction" : "High conviction";
