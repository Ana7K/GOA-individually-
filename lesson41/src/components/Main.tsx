"use client";
import * as React from "react";
import { Button } from "./shadcn/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert";
import { Terminal } from "lucide-react";
import { Progress } from "./shadcn/progress";
import Cards from "./ui/cards";
import { ChartLineMultiple } from "./ui/lineChart";


export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-[60%]" />;
}

export default function Main() {
  const alertVariant: "default" | "destructive" = "default";
  return (
    <main className="flex flex-col justify-between gap-4 m-4">
      <div className="flex gap-4">
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          <Cards/>
        </div>
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          <ChartLineMultiple/>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          chart
        </div>
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          chart
        </div>
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          chart
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          chart
        </div>
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          chart
        </div>
        <div className="bg-grey-100 w-full shadow-sm shadow-shadow-1/[50.2%] p-4 rounded-2xl">
          chart
        </div>
      </div>
      <div className="flex-center flex-col gap-4 mt-20">
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
      </div>
    </main>
  );
}
