import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export function DashboardChart() {
  return (
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
            data: [1, 2, 3],
          },
        ],
      }}
    />
  );
}
