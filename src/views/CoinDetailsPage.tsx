import { useCallback, useState } from "react";
("use client");
import "chart.js/auto";
import { useParams } from "react-router-dom";
import HistoricalPriceChart from "../components/CoinDetails/HistoricalPriceChart";
import ChartDays from "../components/CoinDetails/ChartDays";
import { codeToName } from "../consts/consts";
import CoinHeader from "../components/CoinDetails/CoinHeader";
import { Box } from "@mui/material";

const CoinDetailsPage = () => {
  const { coinCode } = useParams();

  const [days, setDays] = useState(1);

  const handleDaysChange = useCallback((days: number) => setDays(days), []);

  return (
    <Box
      sx={{
        mx: 3,
        mt: 2,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <CoinHeader coinCode={coinCode}></CoinHeader>
      <HistoricalPriceChart
        days={days}
        id={codeToName[coinCode as keyof typeof codeToName]}
      ></HistoricalPriceChart>
      <ChartDays days={days} onChange={handleDaysChange}></ChartDays>
    </Box>
  );
};

export default CoinDetailsPage;
