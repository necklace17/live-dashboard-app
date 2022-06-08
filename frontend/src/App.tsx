import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { DashboardCharts } from "./components/DashboardCharts";
import DashboardAppBar from "./components/DashboardAppBar";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material/";
import Highcharts from "highcharts";

const PRIMARY_MAIN = "#f806cc";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_MAIN,
      light: "#ff60ff",
      dark: "#c1009b",
    },
    secondary: {
      main: "#7e57c2",
      light: "#b085f5",
      dark: "#4d2c91",
    },
    background: {
      default: "#212121",
      paper: "#424242",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: { colorPrimary: { backgroundColor: "#212121" } },
    },
  },
});

Highcharts.theme = {
  colors: ["#ff60ff", "#c1009b", "#b085f5", "#4d2c91"],
  chart: {
    backgroundColor: "#424242",
    borderRadius: 10,
    reflow: true,
  },
  title: {
    style: {
      color: PRIMARY_MAIN,
    },
  },
  subtitle: {
    style: {
      color: PRIMARY_MAIN,
    },
  },
  legend: {
    itemStyle: {
      font: "9pt Trebuchet MS, Verdana, sans-serif",
      color: "black",
    },
    itemHoverStyle: {
      color: "gray",
    },
  },
  yAxis: {
    min: 0,
    max: 100,
    gridLineWidth: 0, //Remove xAxis lines
    labels: { style: { color: "#fff" } },
    title: { style: { color: "#fff" } },
  },
  xAxis: {
    // Apply later when history endpoint is implemented
    labels: { style: { color: "#fff" } },
    title: { style: { color: "#fff" } },
  },
};

Highcharts.setOptions(Highcharts.theme);

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DashboardAppBar />
        <Box sx={{ p: 3 }}>
          <DashboardCharts />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
