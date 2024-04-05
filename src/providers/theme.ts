import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(8, 235, 170)',
        dark: 'rgb(7, 7, 20)',
        light: "white",
      },
      background: {
        default: 'rgb(245, 245, 245)',
        paper: 'rgb(255, 255, 255)',
      },
      success: {
        main: 'rgb(4, 165, 68)',
      },
      error: {
        main: 'rgb(233, 51, 97)',
      },
    },

  });

  export default theme;