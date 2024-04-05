import { Box, Typography } from "@mui/material";

const ErrorText = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h6" color="error">
        Something went wrong. Please try to refresh..
      </Typography>
    </Box>
  );
};

export default ErrorText;
