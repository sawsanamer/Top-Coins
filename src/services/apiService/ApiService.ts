import { CURRENCY } from "../../consts/consts";
import { CoinPrice, HistoricalChartData } from "./types";


export const endpoints = {
    historicalChart: (id: string, days: number) =>
      `${process.env.REACT_APP_GECKO_BASE_URL}/coins/${id}/market_chart?vs_currency=${CURRENCY}&days=${days}&x_cg_demo_api_key=${process.env.REACT_APP_GECKO_API_KEY}`,
      coinPrice: (id: string) => `${process.env.REACT_APP_GECKO_BASE_URL}/simple/price?ids=${id}&vs_currencies=${CURRENCY}&x_cg_demo_api_key=${process.env.REACT_APP_GECKO_API_KEY}`,
  };
 export const coinKeys = {
    all: ['coins'] as const,
    historicalChart: (coinId: string, days: number) => [...coinKeys.all,'historicalChart', coinId, days] as const,
    coinPrice: (coinId: string) => [...coinKeys.all, 'coinPrice', coinId] as const,
  }
  
export class ApiService {
    static async getHistoricalChart(coinId: string, days: number): Promise<HistoricalChartData> {
      const url = endpoints.historicalChart(coinId, days);
      const response = await fetch(url);
      return response.json();
    }

    static async getCoinPrice(coinId: string): Promise<CoinPrice> {
      const url = endpoints.coinPrice(coinId);
      const response = await fetch(url);
      return response.json();
    }
  }
