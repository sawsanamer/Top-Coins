export const calculate24hPriceChange = (
  currentPrice: number,
  openingPrice: number,
) => {
  const priceChange = currentPrice - openingPrice;
  const priceChangePercentage = (priceChange / openingPrice) * 100;
  return priceChangePercentage;
};
