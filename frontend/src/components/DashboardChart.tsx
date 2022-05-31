import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";

type Props = {
  name: string;
  data: number[];
};

export function DashboardChart(props: Props) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: {
          text: props.name,
        },
        xAxis: { title: { text: "xAxis Title" } },
        yAxis: { title: { text: "yAxis Title" } },
        series: [
          {
            data: props.data,
          },
        ],
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
          },
        },
      }}
    />
  );
}
