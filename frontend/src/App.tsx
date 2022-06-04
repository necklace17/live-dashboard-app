import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { DashboardCharts } from "./components/DashboardCharts";
import DashboardAppBar from "./components/DashboardAppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <DashboardAppBar></DashboardAppBar>
        <DashboardCharts></DashboardCharts>
      </ThemeProvider>
    </div>
  );
}

export default App;
