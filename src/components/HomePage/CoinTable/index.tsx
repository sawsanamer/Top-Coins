import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import CoinTableHeader from "./CoinTableHeader";
import CoinTableRow from "./CoinTableRow";
import TableTitle from "./TableTitle";
import ErrorText from "../../ErrorText";
import { selectCoins, selectError } from "../../../store/coinsSlice";

import { useSelector } from "react-redux";

const CoinTable = () => {
  const coins = useSelector(selectCoins);
  const isError = useSelector(selectError);

  return !isError ? (
    <>
      <TableTitle />
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            borderCollapse: "separate",
            borderSpacing: " 0 1em",
            borderRadius: 8,
            px: 3,
          }}
        >
          <TableHead>
            <CoinTableHeader />
          </TableHead>

          <TableBody>
            {Object.entries(coins).map(([coinCode, coinData]) => {
              return (
                <CoinTableRow
                  key={coinCode}
                  code={coinCode}
                  price={coinData[0]}
                  priceChange={coinData[1]}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ) : (
    <ErrorText />
  );
};

export default CoinTable;
