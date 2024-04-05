import { useQuery } from "@tanstack/react-query";
import { ApiService, coinKeys } from "../../services/apiService/ApiService";

export const useHistoricalChart = (coinId?: string, days = 1) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: coinKeys.historicalChart(coinId ?? "", days),
    queryFn: () => ApiService.getHistoricalChart(coinId ?? "", days),
    enabled: !!coinId,
  });
  return { prices: data?.prices, isLoading, isError };
};
