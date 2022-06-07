import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Box from "@mui/material/Box";

const ENDPOINT = "http://localhost:8000";
const socket = socketIOClient(ENDPOINT);
type Props = {
  name: string;
  socket: string;
};

type ReceiveDataType = { time: number; value: number };

export function DashboardChart(props: Props) {
  const [data, setData] = useState<[number, number][]>([]);

  useEffect(() => {
    socket.on(props.socket, (recData: ReceiveDataType) => {
      setData(function (data) {
        if (data.length >= 50) {
          data.shift();
        }
        return [
          ...data,
          typeof recData.value !== "undefined" && [recData.time, recData.value],
        ];
      });
    });
  }, []);
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 4,
        backgroundColor: "background.paper",
        shadow: 2,
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            zoomType: "x",
          },
          title: {
            text: props.name,
          },
          xAxis: { title: { text: "Time" }, type: "datetime" },
          yAxis: { title: { text: "Price" } },
          series: [
            {
              data: data,
              name: props.name,
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
    </Box>
  );
}
