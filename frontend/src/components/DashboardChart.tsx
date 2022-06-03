import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:8000";
const socket = socketIOClient(ENDPOINT);
type Props = {
  name: string;
  socket: string;
};

export function DashboardChart(props: Props) {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    socket.on(props.socket, (recData) => {
      setData(function (data) {
        if (data.length >= 1000) {
          data.shift();
        }
        return [...data, typeof recData !== "undefined" && recData];
      });
    });
  }, []);
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        // chart: {
        //   zoomType: "x",
        //   borderColor: "#EBBA95",
        //   borderRadius: 20,
        //   borderWidth: 2,
        // },
        title: {
          text: props.name,
        },
        xAxis: { title: { text: "xAxis Title" } },
        yAxis: { title: { text: "yAxis Title" } },
        series: [
          {
            data: data,
          },
        ],
        tooltip: {
          valueDecimals: 2,
        },
        plotOptions: {
          series: {
            lineWidth: 3,
            showInLegend: false,
            marker: {
              enabled: false,
            },
          },
        },
      }}
    />
  );
}
