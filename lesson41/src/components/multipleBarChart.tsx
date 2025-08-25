import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { weekDay: "Monday", desktop: 186, mobile: 80 },
  { weekDay: "Tuesday", desktop: 305, mobile: 200 },
  { weekDay: "Wednesday", desktop: 237, mobile: 120 },
  { weekDay: "Thursday", desktop: 73, mobile: 190 },
  { weekDay: "Friday", desktop: 209, mobile: 130 },
  { weekDay: "Saturday", desktop: 214, mobile: 140 },
  { weekDay: "Sunday", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-barChartStashed-blue)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-barChartStashed-green)",
  },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <div>
      <span className="p-4 text-xl font-semibold text-dark-blue-shade">
        Total Revenue
      </span>
      <ChartContainer className="pt-6 w-full h-75 " config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="weekDay"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            // dataKey="weekDay"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            ticks={[0, 100, 200, 300, 400]}

            // tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar
            dataKey="desktop"
            fill="var(--color-barChartStashed-blue)"
            radius={4}
          />
          <Bar
            dataKey="mobile"
            fill="var(--color-barChartStashed-green)"
            radius={4}
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
