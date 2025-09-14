import GoBack from "@/components/go-back";
import NextStep from "@/components/next-step";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { useNavigate } from "react-router";
import { useMultiStepStore } from "@/store/multi-step-form";
import { useState } from "react";

const FormSchema = z.object({
  plan: z.enum(["Arcade", "Advanced", "Pro"], {
    message: "You need to select a notification type.",
  }),
});

const plans = [
  {
    id: 555,
    title: "Arcade",
    icon: "/images/icon-arcade.svg",
    price: 90,
    free: 2,
  },
  {
    id: 555,
    title: "Advanced",
    icon: "/images/icon-advanced.svg",
    price: 120,
    free: 2,
  },
  {
    id: 555,
    title: "Pro",
    icon: "/images/icon-pro.svg",
    price: 150,
    free: 2,
  },
];

export default function SelectYourPlan() {
  const { data, setData } = useMultiStepStore();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(data.plan.title || "Arcade");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(selectedData: z.infer<typeof FormSchema>) {
    console.log(selectedData);
    navigate("/addons");
    const realData = plans.filter((item) => item.title === selectedData.plan);
    console.log(data);
    setData({
      ...data,
      plan: {
        title: realData[0].title,
        id: realData[0].id,
        price: realData[0].price,
        free: realData[0].free,
      },
    });
  }

  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col">
        <Form {...form}>
          <h1 className="text-blue-950 font-bold text-3xl mb-3">
            Select Your Plan
          </h1>
          <p className="text-grey-500 mb-8">
            You have the option of monthly or yearly billing.
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full flex flex-col justify-between"
          >
            <div>
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem className="flex max-md:flex-col justify-between">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full flex justify-between max-md:flex-col"
                    >
                      {plans.map((plan) => (
                        <FormItem key={plan.title} className="relative">
                          <FormControl
                            className="absolute peer w-full h-full top-0"
                            onClick={() => setSelectedPlan(plan.title)}
                          >
                            <RadioGroupItem
                              value={plan.title}
                              className="rounded-none opacity-0"
                            />
                          </FormControl>
                          <div
                            key={plan.title}
                            className={`flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer transition-all duration-300
                            ${
                              selectedPlan === plan.title
                                ? "border-purple-600 bg-blue-100"
                                : "border-grey-500 hover:border-purple-600 hover:bg-blue-100"
                            }
                            `}
                          >
                            <div className="flex flex-col max-md:flex-row max-md:gap-4">
                              <img
                                src={plan.icon}
                                alt={plan.title}
                                className="size-10 mb-10"
                              />
                              <div className="flex flex-col">
                                <span className="text-blue-950 font-medium text-lg">
                                  {plan.title}
                                </span>
                                <span className="text-grey-500 text-md">
                                  ${plan.price}/yr
                                </span>
                                <span className="text-blue-950 text-sm">
                                  {plan.free} months free
                                </span>
                              </div>
                            </div>
                          </div>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div>
              <div className="max-md:hidden flex justify-between">
                <GoBack />
                <NextStep />
              </div>
              <div className="md:hidden fixed bottom-0 left-0 p-2 w-full flex items-center justify-between bg-white">
                <GoBack />
                <NextStep />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
