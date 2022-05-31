import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const ENDPOINT = "http://localhost:8000";
const socket = socketIOClient(ENDPOINT);

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("FromAPI", (recData) => {
      setData((data) => [...data, typeof recData !== "undefined" && recData]);
    });
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: {
            text: "My chart",
          },
          plotOptions: {
            series: {
              marker: {
                enabled: false,
              },
            },
          },
          series: [
            {
              data: data,
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
