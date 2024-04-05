import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = {
  selected: boolean;
  onClick: () => void;
  dayLabel: string;
};
const DayItem = ({ dayLabel, selected, onClick }: PropsWithChildren<Props>) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor: selected ? "primary.dark" : "",
        color: selected ? "primary.light" : "",
        fontWeight: selected ? 700 : 500,
        cursor: "pointer",
        borderRadius: 8,
        p: 2,
      }}
      data-testid={`day-item-${dayLabel}`}
    >
      {dayLabel}
    </Box>
  );
};

export default DayItem;
