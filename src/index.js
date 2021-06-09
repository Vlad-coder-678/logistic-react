import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
// import "fontsource-raleway";
import grey from "@material-ui/core/colors/grey";
import cyan from "@material-ui/core/colors/cyan";

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      grey: "#E5E5E5",
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: grey[900],
      textColorDark: "#dfdfdf",
    },
    secondary: {
      main: cyan[200],
    },
    shadow: {
      black01: "rgba( 0, 0, 0, .1)",
      black025: "rgba( 0, 0, 0, .25)",
      black05: "rgba( 0, 0, 0, .5)",
      black075: "rgba( 0, 0, 0, .75)",
      black1: "rgba( 0, 0, 0, 1)",
      white01: "rgba( 255, 255, 255, .1)",
      white025: "rgba( 255, 255, 255, .25)",
      white05: "rgba( 255, 255, 255, .5)",
      white075: "rgba( 255, 255, 255, .75)",
      white1: "rgba( 255, 255, 255, 1)",
    },
  },
  spacing: [
    "0px",
    "2px",
    "5px",
    "10px",
    "20px",
    "30px",
    "40px",
    "50px",
    "75px",
    "100px",
    "auto",
  ],
  typography: {
    fontFamily: ["Raleway", "Arial", "sans-serif"].join(","),
    // h1: {},
    // h2: {},
    // h3: {},
    // h4: {},
    // h5: {},
    // h6: {},
    // body1: {},
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById("root")
);
