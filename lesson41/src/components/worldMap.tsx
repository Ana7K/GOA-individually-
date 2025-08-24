import { Chart } from "react-google-charts";
import { Card, CardContent, CardTitle } from "./ui/card";

export const data = [
  ["Country", "lomi"],
  ["United states", 100],
  ["Brazil", 200],
  ["Nigeria", 300], //Congo
  ["Saudi Arabia", 400],
  ["Indonesia", 400],
  ["China", 500],
];
export const options = {
  colorAxis: {
    values: [0, 100, 200, 300, 400, 500],
    colors: ["#ffffff", "#FFA800", "#F64E60", "#6993FF", "#00AB9A", "#8950FC"],
  },
  legend: "none",
};
export function WorldMap() {
  return (
    <Card className="w-full">
        <CardTitle className="px-6 text-xl font-semibold text-dark-blue-shade">
          Sales Mapping by Country
        </CardTitle>
      <CardContent>
        <Chart
          chartEvents={[
            {
              eventName: "animationstart",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              },
            },
          ]}
          chartType="GeoChart"
          data={data}
          options={options}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
}
