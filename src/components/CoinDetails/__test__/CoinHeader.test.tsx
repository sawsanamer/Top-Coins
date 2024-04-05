import React from "react";
import { act, screen, waitFor } from "@testing-library/react";
import CoinHeader from "../CoinHeader";
import { updateCoins } from "../../../store/coinsSlice";
import { renderWithProviders } from "../../../utils/test-utils";
import { useInititalCoinPrice } from "../../../hooks/queries/useInitialCoinPrice";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("../../../hooks/queries/useInitialCoinPrice", () => ({
  useInititalCoinPrice: jest.fn(),
}));
describe("CoinHeader", () => {
  beforeEach(() => {
    (useInititalCoinPrice as jest.Mock).mockImplementation((coinCode) => {
      if (coinCode === "BTC") {
        return { initialPrice: "5000" };
      } else {
        return {};
      }
    });
  });

  it("renders the coin code", () => {
    renderWithProviders(<CoinHeader coinCode="BTC" />);
    expect(screen.getByText("BTC")).toBeInTheDocument();
  });

  it("renders the coin price when available", async () => {
    const { store } = renderWithProviders(<CoinHeader coinCode="BTC" />);

    act(() => {
      store.dispatch(updateCoins({ BTC: ["50000", "3232"] }));
    });
    waitFor(() => expect(screen.getByText("$50000")).toBeInTheDocument());
  });

  it("renders a skeleton when the coin price is not available", () => {
    renderWithProviders(<CoinHeader coinCode="ETH" />);
    expect(screen.getByTestId("skeleton-coin-price")).toBeInTheDocument();
  });

  it("renders the initial price when available", () => {
    (useInititalCoinPrice as jest.Mock).mockReturnValue({
      initialPrice: "4000",
    });
    renderWithProviders(<CoinHeader coinCode="ETH" />);
    expect(screen.getByText("$4000")).toBeInTheDocument();
  });

  it("updates the coin price when the store is updated", async () => {
    const { store } = renderWithProviders(<CoinHeader coinCode="BTC" />);
    act(() => {
      store.dispatch(updateCoins({ BTC: ["60000", "3232"] }));
    });
    await waitFor(() => expect(screen.getByText("$60000")).toBeInTheDocument());
  });
});
