import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { Volume: 186, Services: 80 },
  { Volume: 305, Services: 200 },
  { Volume: 237, Services: 120 },
  { Volume: 73, Services: 190 },
  { Volume: 209, Services: 130 },
  { Volume: 214, Services: 140 },
];

const chartConfig = {
  Volume: {
    label: "Volume",
    color: "var(--color-barChartStashed-green)",
  },
  Services: {
    label: "Services",
    color: "var(--color-barChartStashed-blue)",
  },
} satisfies ChartConfig;

export function ChartBarStacked() {
  return (
    <div>
      <span className="p-4 text-xl font-semibold text-dark-blue-shade">
        Volume vs Service Level
      </span>
        <ChartContainer className="h-60 w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="none"
              tickLine={false}
              axisLine={{
                stroke: "var(--color-grey-500)",
              }}
              //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Volume"
              stackId="a"
              fill="var(--color-barChartStashed-green)"
              radius={[0, 0, 4, 4]}
              barSize={18}
            />
            <Bar
              dataKey="Services"
              stackId="a"
              fill="var(--color-barChartStashed-blue)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </div>
  );
}
