import NextStep from "@/components/next-step";
import { useState } from "react";

export default function SelectYourPlan() {
  const plans = [
    {
      title: "Arcade",
      icon: "/images/icon-arcade.svg",
      yearly: 90,
      free: 2,
    },
    {
      title: "Advanced",
      icon: "/images/icon-advanced.svg",
      yearly: 120,
      free: 2,
    },
    {
      title: "Pro",
      icon: "/images/icon-pro.svg",
      yearly: 150,
      free: 2,
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div>
      <h1 className="text-blue-950 font-bold text-3xl mb-3">
        Select Your Plan
      </h1>
      <p className="text-grey-500 mb-8">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex max-md:flex-col gap-5">
        {plans.map((plan) => (
          <div
            key={plan.title}
            onClick={() => setSelectedPlan(plan.title)}
            className={`flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer transition-all duration-300
               ${
                 selectedPlan === plan.title
                   ? "border-purple-600 bg-blue-100"
                   : "border-grey-500 hover:border-purple-600 hover:bg-blue-100"
               }`}
          >
            <div className="flex flex-col max-md:flex-row max-md:gap-4">
              <img src={plan.icon} alt={plan.title} className="size-10 mb-10" />
              <div className="flex flex-col">
                <span className="text-blue-950 font-medium text-lg">
                  {plan.title}
                </span>
                <span className="text-grey-500 text-md">${plan.yearly}/yr</span>
                <span className="text-blue-950 text-sm">
                  {plan.free} months free
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-20">
        <NextStep />
      </div>
    </div>
  );
}
