import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { desktop: 186, mobile: 80 },
  { desktop: 305, mobile: 200 },
  { desktop: 237, mobile: 120 },
  { desktop: 73, mobile: 190 },
  { desktop: 209, mobile: 130 },
  { desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Last Month",
    color: "var(--color-barChartStashed-green)",
  },
  mobile: {
    label: "This Month",
    color: "var(--color-barChartStashed-blue)",
  },
} satisfies ChartConfig;

export function ChartAreaGradient() {
  return (
    <div>
      <span className="p-4 text-xl font-semibold text-dark-blue-shade">
        Customer Satisfaction
      </span>
      <ChartContainer className="w-full h-65" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={{
              stroke: "var(--color-grey-500)",
            }}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="mobile"
            type="natural"
            fill="url(#fillMobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
            dot={{
              fill: "var(--color-mobile)",
            }}
            activeDot={{
              r: 6,
            }}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="url(#fillDesktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
            dot={{
              fill: "var(--color-desktop)",
            }}
            activeDot={{
              r: 6,
            }}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
      <CardFooter>
        {/* <div className="flex-center">
          <div
            className="h-1 w-3 rounded-[2px]"
            style={{ backgroundColor: "blue" }}
          />
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "blue" }}
          />
          <div
            className="h-1 w-3 rounded-[2px]"
            style={{ backgroundColor: "blue" }}
          />
        </div> */}
      </CardFooter>
    </div>
  );
}
