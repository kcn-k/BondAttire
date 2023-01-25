import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4e342e",
      light: "rgb(113,92,87)",
      dark: "rgb(54,36,32)",
    },
    secondary: {
      main: "#dd2c00",
      light: "rgb(227,86,51)",
      dark: "rgb(154,30,0)",
    },
    error: {
      main: "#d50000",
      light: "rgb(221,51,51)",
      dark: "rgb(149,0,0)",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
    },
    info: {
      main: "#2962ff",
      light: "rgb(83,129,255)",
      dark: "rgb(28, 68, 178)",
    },
    sucess: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    light: {
      main: "#ffffff",
    },
  },
  type: "dark",
});
export default Theme;
