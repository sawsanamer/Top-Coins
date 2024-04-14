import { useQuery } from "@tanstack/react-query";
import { useHistoricalChart } from "../queries/useHistoricalChart";
import { renderHook } from "@testing-library/react";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("useHistoricalChart", () => {
  it("fetches historical chart data when coinId is provided", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        prices: [
          [1, 2],
          [33, 33],
        ],
        market_caps: [
          [1, 2],
          [33, 33],
        ],
        total_volumes: [
          [1, 2],
          [33, 33],
        ],
      },
      isError: false,
      isLoading: false,
    });

    const { result } = renderHook(() => useHistoricalChart("BTC", 1));
    expect(result.current).toEqual({
      prices: [
        [1, 2],
        [33, 33],
      ],
      isError: false,
      isLoading: false,
    });
    expect(result.current.prices).toHaveLength(2);
  });

  it("it calls useQuery with enabled: false when coinId is not provided", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: false,
    });

    renderHook(() => useHistoricalChart(undefined, 1));
    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({ enabled: false }),
    );
  });
});
