import { Line } from "react-chartjs-2";
import { useHistoricalChart } from "../../hooks/queries/useHistoricalChart";
import { Box } from "@mui/material";
import { CURRENCY } from "../../consts/consts";
import ErrorText from "../ErrorText";
import LoadingChart from "./LoadingChart";

type Props = {
  id?: string;
  days: number;
};

const HistoricalPriceChart = ({ id, days }: Props) => {
  const { prices, isLoading, isError } = useHistoricalChart(id, days);

  return isError ? (
    <ErrorText />
  ) : !isLoading && prices ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "75%", aspectRatio: 2.9 }}>
        <Line
          data={{
            labels: prices?.map((coin) => {
              const date = new Date(coin[0]);
              const hours =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? hours : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: prices?.map((coin) => coin[1]),
                label: `Price Past ${days} Days in ${CURRENCY}`,
                borderColor: "rgb(8, 235, 170)",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 2,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </Box>
    </Box>
  ) : (
    <LoadingChart />
  );
};

export default HistoricalPriceChart;
