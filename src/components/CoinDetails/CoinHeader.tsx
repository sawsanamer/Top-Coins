import { CURRENCY, CurrencySymbols, codeToName } from "../../consts/consts";
import { useSelector } from "react-redux";
import { selectCoins, selectError } from "../../store/coinsSlice";
import { Box, Skeleton, Typography } from "@mui/material";
import { useInititalCoinPrice } from "../../hooks/queries/useInitialCoinPrice";

type Props = {
  coinCode?: string;
};
const CoinHeader = ({ coinCode }: Props) => {
  const coins = useSelector(selectCoins);
  const price = coins[coinCode as string][0];
  const isError = useSelector(selectError);
  const { initialPrice } = useInititalCoinPrice(
    codeToName[coinCode as keyof typeof codeToName],
    price !== ""
  );

  //if websocket price is not available yet, display the initial price fetched from the API
  const priceToDisplay = price ? price : initialPrice;
  const displayText = CurrencySymbols[CURRENCY] + priceToDisplay;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5">{coinCode}</Typography>
      {!isError &&
        (price || initialPrice ? (
          <Typography variant="h6">{displayText}</Typography>
        ) : (
          <Skeleton width={100} height={25} data-testid="skeleton-coin-price" />
        ))}
    </Box>
  );
};

export default CoinHeader;
