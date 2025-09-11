import { useState } from "react";
import { NavLink } from "react-router";

type Step = {
  id: number;
  path: string;
  title: string;
};

const Steps: Step[] = [
  { id: 1, path: "/", title: "YOUR INFO" },
  { id: 2, path: "/plan", title: "SELECT PLAN" },
  { id: 3, path: "/addons", title: "ADD-ONS" },
  { id: 4, path: "/summary", title: "SUMMARY" },
];

export default function Aside() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="md:relative md:w-[290px]">
      <img
        className="max-md:hidden w-full"
        src="/images/bg-sidebar-desktop.svg"
        alt="desktop sidebar bg"
      />
      <img
        className="max-md:block hidden w-full"
        src="/images/bg-sidebar-mobile.svg"
        alt="mobile sidebar bg"
      />
      <div className="absolute top-0 p-10 w-full flex flex-col max-md:flex-row gap-5 max-md:justify-center">
        {Steps.map((step) => (
          <NavLink
            to={step.path}
            key={step.id}
            className="flex items-center gap-5 cursor-pointer max-md:flex max-md:justify-around max-md:gap-1"
            onClick={() => setActiveStep(step.id)}
          >
            <div
              className={`w-10 h-10 flex max-md:flex-col items-center justify-center rounded-full border border-white font-semibold transition-all duration-400
                ${
                  step.id === activeStep
                    ? "bg-blue-200 text-blue-950"
                    : "text-white"
                }`}
            >
              {step.id}
            </div>
            <div className="flex flex-col max-md:hidden">
              <span className="text-xs text-grey-500">STEP {step.id}</span>
              <span className="font-bold text-white">{step.title}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
