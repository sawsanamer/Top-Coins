import { useCallback } from "react";
import { TableRow, TableCell, Skeleton } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { CURRENCY, CurrencySymbols, codeToName } from "../../../consts/consts";
import { RoutesEnum } from "../../../routes/routes-enum";
import { useInititalCoinPrice } from "../../../hooks/queries/useInitialCoinPrice";

type Props = {
  code: string;
  price: string;
  priceChange: string;
};

const CoinTableRow = ({ code, price, priceChange }: Props) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`${RoutesEnum.COINS}/${code}`);
  }, [navigate, code]);
  const { initialPrice } = useInititalCoinPrice(
    codeToName[code as keyof typeof codeToName],
    price !== ""
  );

  return (
    <TableRow
      sx={{
        backgroundColor: "background.paper",
        cursor: "pointer",
        "&:hover": { backgroundColor: "background.default" },
      }}
      onClick={handleClick}
    >
      <TableCell sx={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
        {code}
      </TableCell>
      <TableCell align="right">
        {price || initialPrice ? (
          `${CurrencySymbols[CURRENCY]}${price || initialPrice}`
        ) : (
          <Skeleton />
        )}
      </TableCell>
      <TableCell
        align="right"
        sx={{
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          color:
            priceChange && parseFloat(priceChange) > 0
              ? "success.main"
              : parseFloat(priceChange) === 0
                ? "primary.dark"
                : "error.main",
        }}
      >
        {!priceChange ? <Skeleton /> : `${priceChange}%`}
      </TableCell>
    </TableRow>
  );
};

export default CoinTableRow;
