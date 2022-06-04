import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { DashboardCharts } from "./components/DashboardCharts";
import DashboardAppBar from "./components/DashboardAppBar";
import Box from "@mui/material/Box";

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
        <Box sx={{ p: 3 }}>
          <DashboardCharts></DashboardCharts>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
