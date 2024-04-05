import { chartDaysConfig } from "../../config/chartDaysConfig";
import DayItem from "./DayItem";
import { Card } from "@mui/material";

type Props = {
  days: number;
  onChange: (days: number) => void;
};

const ChartDays = ({ days, onChange }: Props) => {
  return (
    <Card
      sx={{
        borderRadius: 8,
        m: 2,
        display: "flex",
        backgroundColor: "background.default",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      data-testid="chart-days"
    >
      {chartDaysConfig.map((day) => (
        <DayItem
          key={day.value}
          onClick={() => onChange(day.value)}
          selected={day.value === days}
          dayLabel={day.label}
        ></DayItem>
      ))}
    </Card>
  );
};

export default ChartDays;
