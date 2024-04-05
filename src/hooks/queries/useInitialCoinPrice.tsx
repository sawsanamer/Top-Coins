import { useQuery } from "@tanstack/react-query";
import { ApiService, coinKeys } from "../../services/apiService/ApiService";

export const useInititalCoinPrice = (coinId?: string, disabled = false) => {
  const { data } = useQuery({
    queryKey: coinKeys.coinPrice(coinId ?? ""),
    queryFn: () => ApiService.getCoinPrice(coinId ?? ""),
    enabled: !!coinId && !disabled,
    staleTime: 1000 * 60 * 5,
  });
  return {
    initialPrice: data?.[coinId ?? ""].usd.toFixed(2),
  };
};
