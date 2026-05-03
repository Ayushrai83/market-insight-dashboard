import type { Direction } from "./market";

export interface ConfidenceBucket {
  range: string;
  accuracy: string;
  samples: number;
}

export interface BacktestSample {
  date: string;
  prediction: Direction;
  confidence: number;
  actual: Direction;
  correct: boolean;
  isHighConfidence: boolean;
}

export interface BacktestData {
  metrics: {
    totalTrades: number;
    accuracy: number;
    highConfidenceAccuracy: number;
    confidenceBuckets: ConfidenceBucket[];
    neutralCount: number;
    totalEvaluations: number;
    isStatisticallyValid: boolean;
  };
  sample: BacktestSample[];
}
