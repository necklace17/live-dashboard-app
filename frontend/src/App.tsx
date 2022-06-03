import React from "react";

import { DashboardChart } from "./components/DashboardChart";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <ButtonAppBar></ButtonAppBar>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DashboardChart
                name="Umbrella Corporation Stocks"
                socket="umbrella_stocks"
              ></DashboardChart>
            </Grid>
            <Grid item xs={12} md={6}>
              <DashboardChart
                name="Gotham City Opera Stocks"
                socket="gotham_city_opera_stocks"
              ></DashboardChart>
            </Grid>
            <Grid item xs={12} md={6}>
              <DashboardChart
                name="InGen Stocks"
                socket="ingen_stocks"
              ></DashboardChart>
            </Grid>
            <Grid item xs={12} md={6}>
              <DashboardChart
                name="Cyberdyne Systems Stocks"
                socket="cyberdyne_systems"
              ></DashboardChart>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
