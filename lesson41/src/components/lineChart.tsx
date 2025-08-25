import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", visitor1: 320, visitor2: 250, visitor3: 260 },
  { month: "February", visitor1: 330, visitor2: 255, visitor3: 330 },
  { month: "March", visitor1: 280, visitor2: 200, visitor3: 360 },
  { month: "April", visitor1: 210, visitor2: 150, visitor3: 310 },
  { month: "May", visitor1: 190, visitor2: 140, visitor3: 240 },
  { month: "June", visitor1: 215, visitor2: 240, visitor3: 205 },
  { month: "July", visitor1: 300, visitor2: 350, visitor3: 250 },
  { month: "August", visitor1: 320, visitor2: 380, visitor3: 300 },
  { month: "September", visitor1: 310, visitor2: 340, visitor3: 310 },
  { month: "October", visitor1: 270, visitor2: 300, visitor3: 310 },
  { month: "November", visitor1: 190, visitor2: 200, visitor3: 250 },
  { month: "December", visitor1: 130, visitor2: 130, visitor3: 200 },
];

const chartConfig = {
  visitor1: {
    label: "Loyal Customers",
    color: "var(--color-violet)",
  },
  visitor2: {
    label: "New Customers",
    color: "var(--color-red-500)",
  },
  visitor3: {
    label: "Unique Customers",
    color: "var(--color-green)",
  },
} satisfies ChartConfig;

export function ChartLineMultiple() {
  return (
    <div> 
      <span className="p-4 text-xl font-semibold text-dark-blue-shade">
        Visitor Insights
      </span>
      <ChartContainer className="pt-6 h-76 w-full" config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 20,
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            width={100}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="visitor1"
            tickLine={false}
            axisLine={false}
            width={50}
            tickMargin={10}
            ticks={[0, 100, 200, 300, 400]}
            tick={{
              // stroke: "var(--color-grey-200)",
              fontSize: 16,
              fontWeight: 400,
            }}
          />
          <ChartTooltip
            cursor={{
              fill: "none",
              stroke: "var(--color-tooltip)",
              strokeDasharray: "5 3",
              strokeWidth: 2,
            }}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Line
            name="Loyal Customers"
            dataKey="visitor1"
            type="monotone"
            stroke="var(--color-visitor1)"
            strokeWidth={8}
            dot={false}
          />
          <Line
            name="New Customers"
            dataKey="visitor2"
            type="monotone"
            stroke="var(--color-visitor2)"
            strokeWidth={8}
            dot={false}
            activeDot={{
              r: 12,
              fill: "var(--color-tooltip)",
            }}
          />
          <Line
            name="Unique Customers"
            dataKey="visitor3"
            type="monotone"
            stroke="var(--color-visitor3)"
            strokeWidth={8}
            dot={false}
          />
          <ChartLegend className="pt-10" content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
