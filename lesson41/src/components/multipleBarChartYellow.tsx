import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  // Card,
  // CardContent,
  CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", RealitySales: 186, TargetSales: 80 },
  { month: "February", RealitySales: 105, TargetSales: 200 },
  { month: "March", RealitySales: 237, TargetSales: 120 },
  { month: "April", RealitySales: 73, TargetSales: 190 },
  { month: "May", RealitySales: 209, TargetSales: 130 },
  { month: "June", RealitySales: 214, TargetSales: 140 },
  { month: "July", RealitySales: 194, TargetSales: 150 },
];

const chartConfig = {
  RealitySales: {
    label: "Reality Sales",
    color: "var(--color-barChart-green)",
  },
  TargetSales: {
    label: "Target Sales",
    color: "var(--color-barChart-yellow)",
  },
} satisfies ChartConfig;

export function BarChartMulti() {
  return (
    <div>
      <span className="p-4 text-xl font-semibold text-dark-blue-shade">
        Target vs Reality
      </span>
      <ChartContainer className="pt-6 w-full h-40" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar
            dataKey="RealitySales"
            fill="var(--color-barChart-green)"
            radius={4}
          />
          <Bar
            dataKey="TargetSales"
            fill="var(--color-barChart-yellow)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
      <CardFooter className="pt-5 flex-col items-start gap-2 text-xs font-semibold text-grey-900">
        <div className="flex gap-2 leading-none font-medium">
          <img src="src/assets/icons/Avatar.svg" alt="" />
          <div className="flex flex-col justify-between my-1">
            <p>Reality Sales</p>
            <p className="text-grey-700 font-normal">Global</p>
          </div>
        </div>
        <div className="flex gap-2 leading-none font-medium">
          <img src="src/assets/icons/Avatar (1).svg" alt="" />
          <div className="flex flex-col justify-between my-1">
            <p>Target Sales</p>
            <p className="text-grey-700 font-normal">Commercial</p>
          </div>
        </div>
      </CardFooter>
    </div>
  );
}
