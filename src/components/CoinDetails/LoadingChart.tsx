import { Box, CircularProgress } from "@mui/material";

const LoadingChart = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress size={250} thickness={1} />
    </Box>
  );
};

export default LoadingChart;
