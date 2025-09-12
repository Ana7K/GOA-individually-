import { Link, useNavigate } from "react-router";
import NextStep from "../components/next-step";
import GoBack from "@/components/go-back";

 const addOnsList = [
    {
      title: "Online service",
      label: "Access to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      label: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      label: "Custom theme on your profile",
      price: 2,
    },
  ];
export default function AddOns() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h1 className="text-blue-950 font-bold text-3xl mb-3">Pick add-ons</h1>
        <p className="text-grey-500 mb-8">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="space-y-8">
          {addOnsList.map((addon) => (
            <div
              key={addon.title}
              className="flex items-center justify-between p-5 border border-grey-500 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-x-5">
                <input type="checkbox" className="size-5 accent-purple-600" />
                <div className="flex flex-col">
                  <span className="text-blue-950 font-medium">
                    {addon.title}
                  </span>
                  <span className="text-sm text-grey-500">{addon.label}</span>
                </div>
              </div>
              <span className="text-purple-600">+${addon.price}/mo</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* desktop */}
        <div className="max-md:hidden flex justify-between">
          <GoBack />
          <NextStep />
        </div>
        {/* mobile */}
        <div className="md:hidden fixed p-2 bottom-0 right-0 w-full flex items-center justify-between bg-white">
          <Link to={"/plan"}>
            <GoBack />
          </Link>
          <NextStep />
        </div>
      </div>
    </div>
  );
}
