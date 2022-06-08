import { Grid } from "@mui/material";
import { DashboardChart } from "./DashboardChart";
import React from "react";

export function DashboardCharts() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <DashboardChart
          name="Umbrella Corporation Stocks"
          socket="umbrella_stocks"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardChart
          name="Gotham City Opera Stocks"
          socket="gotham_city_opera_stocks"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardChart name="InGen Stocks" socket="ingen_stocks" />
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardChart
          name="Cyberdyne Systems Stocks"
          socket="cyberdyne_systems"
        />
      </Grid>
    </Grid>
  );
}
