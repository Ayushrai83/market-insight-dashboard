export type Direction = "bullish" | "bearish" | "neutral";
export type TradeSignal = "buy" | "sell" | "avoid" | "hold" | string;

export interface Signal {
  value: number;
  confidence: number;
}

export interface MarketStatus {
  indicators: {
    close: number;
    sma200: number;
    rsi: number;
  };
  macro: {
    fii: { netFlow: number };
    vix: { value: number };
    global: { usMarketChange: number };
  };
  signals: {
    trend: Signal;
    rsi: Signal;
    fii: Signal;
    vix: Signal;
    global: Signal;
  };
  summary: {
    normalizedScore: number;
    confidence: number;
    direction: Direction;
    tradeSignal: TradeSignal;
    meta: {
      informativeSignals: number;
      strongSignals: number;
      agreementRatio: number;
      coverage: number;
      imbalancePenalty: number;
    };
  };
  meta: {
    lastUpdated: string;
    source: string;
    cached: boolean;
  };
}
