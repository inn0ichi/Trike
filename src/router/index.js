import "../App.css";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import Soon from "../pages/Soon.js";



export default function RouterComponent() {
  const ui = useSelector((state) => state.ui);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#5D8BF4',
        light: '#5D8BF4',
        dark: '#051367',
        contrastText: '#DFF6FF',
      },
      secondary: {
        main: '#DFF6FF',
      },
      text: {
        primary: '#efe9e9',
      },
    },

    typography: {
      fontFamily: "Sora",
    },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#051367',
        light: '#5D8BF4',
        dark: '#051367',
        contrastText: '#DFF6FF',
      },
      secondary: {
        main: '#2D31FA',
      },
      error: {
        main: "#FC7374",
      },
    },

    typography: {
      fontFamily: "Sora",
    },
  });

  return (
    <ThemeProvider theme={ui.isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact component={Soon} path="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
