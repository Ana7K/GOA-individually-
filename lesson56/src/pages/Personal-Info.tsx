// import NextStep from "../components/next-step";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import NextStep from "@/components/next-step";
import { Link, useNavigate } from "react-router";
import { useMultiStepStore } from "@/store/multi-step-form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  number: z.string().min(10, {
    message: "This field is required.",
  }),
});

export default function PersonalInfo() {
  const { data, setData } = useMultiStepStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });
  const navigate = useNavigate();
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setData({ ...data, ...values });
    navigate("/plan");
  }
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col">
        <Form {...form}>
          <h1 className="text-blue-950 font-bold text-3xl mb-3">
            Personal Info
          </h1>
          <p className="text-grey-500 mb-8">
            Please provide your name, email address, and phone number.
          </p>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full flex flex-col justify-between"
          >
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-950 font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <input
                        className="border border-grey-500 rounded-lg p-3 w-full"
                        placeholder="e.g. Stephen King"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-950 font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <input
                        className="border border-grey-500 rounded-lg p-3 w-full"
                        placeholder="e.g. stephenking@lorem.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-950 font-medium">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <input
                        className="border border-grey-500 rounded-lg p-3 w-full"
                        placeholder="e.g. +1 234 567 890"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <div className="max-md:hidden flex justify-end">
                <NextStep />
              </div>
              <div className="md:hidden p-2 fixed bottom-0 right-0 w-full flex items-center justify-between bg-white">
                <Link to={"/plan"}></Link>
                <NextStep />
              </div>
            </div>
          
          </form>
        </Form>
      </div>
    </div>
  );
}
// <div>
//   <h1 className="text-blue-950 font-bold text-3xl mb-3">Personal Info</h1>
//   <p className="text-grey-500 mb-8">
//     Please provide your name, email address, and phone number.
//   </p>
//   <form className="flex flex-col gap-4">
//     <label className="text-blue-950 font-medium" htmlFor="name">
//       Name
//     </label>
//     <input
//       className="border border-grey-500 rounded-lg p-3"
//       type="text"
//       id="name"
//       placeholder="e.g. Stephen King"
//     />
//     <label className="text-blue-950 font-medium" htmlFor="email">
//       Email Address
//     </label>
//     <input
//       className="border border-grey-500 rounded-lg p-3"
//       type="email"
//       id="email"
//       placeholder="e.g. stephenking@lorem.com"
//     />
//     <label className="text-blue-950 font-medium" htmlFor="phone">
//       Phone Number
//     </label>
//     <input
//       className="border border-grey-500 rounded-lg p-3"
//       type="tel"
//       id="phone"
//       placeholder="e.g. +1 234 567 890"
//     />
//   </form>
//   <div className="flex justify-end mt-20">
//     <NextStep/>
//   </div>
// </div>
// );
