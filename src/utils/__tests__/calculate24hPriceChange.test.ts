import { calculate24hPriceChange } from "../calculate24hPriceChange";

describe("calculate24hPriceChange", () => {
  it("calculates the correct price change percentage when the price increases", () => {
    const currentPrice = 120;
    const openingPrice = 100;
    const expectedPriceChangePercentage = 20;

    const result = calculate24hPriceChange(currentPrice, openingPrice);
    expect(result).toBe(expectedPriceChangePercentage);
  });

  it("calculates the correct price change percentage when the price decreases", () => {
    const currentPrice = 80;
    const openingPrice = 100;
    const expectedPriceChangePercentage = -20;

    const result = calculate24hPriceChange(currentPrice, openingPrice);
    expect(result).toBe(expectedPriceChangePercentage);
  });

  it("returns 0 when the price does not change", () => {
    const currentPrice = 100;
    const openingPrice = 100;
    const expectedPriceChangePercentage = 0;

    const result = calculate24hPriceChange(currentPrice, openingPrice);
    expect(result).toBe(expectedPriceChangePercentage);
  });
});
