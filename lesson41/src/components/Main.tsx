"use client";
import * as React from "react";
// import { Button } from "./ui/button";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Terminal } from "lucide-react";
import { Progress } from "./ui/progress";
import { Cards } from "./cards";
import { ChartLineMultiple } from "./lineChart";
import { ChartBarStacked } from "./stackedBarChart";
import { ChartBarMultiple } from "./multipleBarChart";
import { BarChartMulti } from "./multipleBarChartYellow";
import { ChartAreaGradient } from "./areaChartGradient";
import { ProductsProgress } from "./productsProgress";
import { WorldMap } from "./worldMap";

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-[60%]" />;
}

export default function Main() {
  // const alertVariant: "default" | "destructive" = "default";
  return (
    <main className="flex flex-col justify-between gap-4 m-4 container mx-auto">
      <div className="flex max-xl:flex-col gap-4">
        <div className="bg-grey-100 w-full h-87 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <Cards />
        </div>
        <div className="bg-grey-100 w-full h-87 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <ChartLineMultiple />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-2 bg-grey-100 w-full h-88 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <ChartBarMultiple />
        </div>
        <div className="bg-grey-100 w-full h-88 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <ChartAreaGradient />
        </div>
        <div className="bg-grey-100 w-full h-88 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <BarChartMulti />
        </div>
        <div className="md:col-span-2 bg-grey-100 w-full h-88 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <ProductsProgress />
        </div>
        <div className="bg-grey-100 w-full h-88 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <WorldMap />
        </div>
        <div className="bg-grey-100 w-full h-88 shadow-sm shadow-shadow-1/[50.2%] sm:p-4 rounded-2xl">
          <ChartBarStacked />
        </div>
      </div>

      {/* <div className="flex-center flex-col gap-4 mt-20">
        <Button className="bg-blue-700 hover:bg-blue-800">Click me</Button>
        <div>
          <Alert variant={alertVariant}>
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
        <div className="w-full max-w-md">
          <ProgressDemo />
        </div>
      </div> */}
    </main>
  );
}
