import { TableRow, TableCell } from "@mui/material";

const CoinTableHeader = () => {
  return (
    <TableRow sx={{ backgroundColor: "background.paper" }}>
      {["Asset", "Price", "Price Change 24h"].map((text, index) => (
        <TableCell
          sx={{
            borderTopLeftRadius: index === 0 ? 32 : "",
            borderBottomLeftRadius: index === 0 ? 32 : "",
            borderBottomRightRadius: index === 2 ? 32 : "",
            borderTopRightRadius: index === 2 ? 32 : "",
          }}
          key={text}
          align={index === 0 ? "left" : "right"}
        >
          {text}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default CoinTableHeader;
