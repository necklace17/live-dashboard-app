import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export function DashboardChart(props) {
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
