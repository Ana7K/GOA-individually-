import NextStep from "../components/next-step";
import GoBack from "@/components/go-back";
import { useNavigate } from "react-router";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { useMultiStepStore } from "@/store/multi-step-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
const FormSchema = z.object({
  addons: z.array(z.string()).optional(),
});

export default function AddOns() {
  const navigate = useNavigate();
  const { data, setData } = useMultiStepStore();
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
    setData({ ...data, ...values });
    navigate("/summary");
  }
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col">
        <Form {...form}>
          <h1 className="text-blue-950 font-bold text-3xl mb-3">
            Pick add-ons
          </h1>
          <p className="text-grey-500 mb-8">
            Add-ons help enhance your gaming experience.
          </p>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full flex flex-col justify-between"
          >
            <div>
              <FormField
                control={form.control}
                name="addons"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-5 justify-between">
                    {addOnsList.map((addon) => (
                      <div
                        key={addon.title}
                        className="flex items-center justify-between p-5 border border-grey-500 rounded-lg cursor-pointer"
                      >
                        <div className="flex items-center gap-x-5">
                          <input
                            type="checkbox"
                            value={addon.title}
                            
                            className="size-5 accent-purple-600"
                          />
                          <div className="flex flex-col">
                            <span className="text-blue-950 font-medium">
                              {addon.title}
                            </span>
                            <span className="text-sm text-grey-500">
                              {addon.label}
                            </span>
                          </div>
                        </div>
                        <span className="text-purple-600">
                          +${addon.price}/mo
                        </span>
                      </div>
                    ))}
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div>
              {/* desktop */}
              <div className="max-md:hidden flex justify-between">
                <GoBack />
                <NextStep />
              </div>
              {/* mobile */}
              <div className="md:hidden fixed p-2 bottom-0 right-0 w-full flex items-center justify-between bg-white">
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
