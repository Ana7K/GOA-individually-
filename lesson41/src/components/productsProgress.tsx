import { cn } from "@/lib/utils";
import { CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

interface ProductsItem {
  number: string;
  name: string;
  popularity: number;
  sales: number;
  color: string;
  bgColor: string;
}

const data: ProductsItem[] = [
  {
    number: "01",
    name: "Home Decor Range",
    popularity: 70,
    sales: 45,
    color:
      "[&_[data-slot='progress-indicator']]:bg-ranking-blue bg-ranking-blue-shade",
    bgColor: "bg-color-ranking-blue-shade",
  },
  {
    number: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 50,
    sales: 29,
    color:
      "[&_[data-slot='progress-indicator']]:bg-ranking-green bg-ranking-green-shade",
    bgColor: "bg-color-ranking-green-shade",
  },
  {
    number: "03",
    name: "Bathroom Essentials",
    popularity: 30,
    sales: 18,
    color:
      "[&_[data-slot='progress-indicator']]:bg-ranking-purple bg-ranking-purple-shade",
    bgColor: "bg-color-ranking-purple-shade",
  },
  {
    number: "04",
    name: "Apple Smartwatches",
    popularity: 60,
    sales: 25,
    color:
      "[&_[data-slot='progress-indicator']]:bg-ranking-orange bg-ranking-orange-shade",
    bgColor: "bg-color-ranking-orange-shade",
  },
];

export function ProductsProgress() {
  return (
    <div>
      <span className="p-4 text-xl font-semibold text-dark-blue-shade">
        Top Products
      </span>
      <CardContent>
        <table className="w-full h-70 mt-4 text-sm font-normal text-grey-800">
          <thead className="text-left text-[#96A5B8]">
            <tr className="border-b border-[#EDF2F6]">
              <th className="font-normal max-sm:hidden">#</th>
              <th className="font-normal sm:pl-4">Name</th>
              <th className="font-normal sm:pl-4">Popularity</th>
              <th className="font-normal">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.number} className="border-b border-[#EDF2F6]">
                <td className="max-sm:hidden">{item.number}</td>
                <td className="sm:pl-4">{item.name}</td>
                <td className="pr-5 w-70 sm:pl-4">
                  <Progress
                    className={`h-1 ${item.color}`}
                    value={item.popularity}
                  />
                </td>
                <td className={cn("flex-center h-full w-12.5")}>
                  <div
                    className={cn(
                      "flex-center rounded-md px-3 py-1",
                      item.bgColor
                    )}
                  >
                    <span>{item.sales}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </div>
  );
}
