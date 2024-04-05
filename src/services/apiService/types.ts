export type HistoricalChartData = {
    prices: [number, number][];
    market_caps: [number, number][][];
    total_volumes: [number, number][][];
  };

  export type CoinPrice ={
    [key: string]: {[key: string]: number}
  }