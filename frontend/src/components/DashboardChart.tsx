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
      setData((data) => [...data, typeof recData !== "undefined" && recData]);
    });
  }, []);
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
            data: data,
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
