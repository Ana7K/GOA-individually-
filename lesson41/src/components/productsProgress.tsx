import { Card, CardContent, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

interface ProductsItem {
  number: string;
  name: string;
  popularity: number;
  sales: number;
  color: string;
  bgColor:string;
}

const data: ProductsItem[] = [
  { number: "01",
    name: "Home Decor Range",
    popularity: 70,
    sales: 45,
    color: "bg-color-ranking-blue",
    bgColor: "bg-color-ranking-blue-shade"
  },
  {
    number: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 50,
    sales: 29,
    color: "bg-color-ranking-green",
    bgColor: "bg-color-ranking-green-shade"
  },
  { number: "03",
    name: "Bathroom Essentials",
    popularity: 30,
    sales: 18,
    color: "bg-color-ranking-purple",
    bgColor: "bg-color-ranking-purple-shade"
  },
  { number: "04",
    name: "Apple Smartwatches",
    popularity: 60,
    sales: 25,
    color: "bg-color-ranking-orange",
    bgColor: "bg-color-ranking-orange-shade"
  },
];

export function ProductsProgress() {
  return (
    <Card className="w-100%">
      <CardTitle className="px-6 text-xl font-semibold text-dark-blue-shade">
        Top Products
      </CardTitle>
      <CardContent>
      <table className="w-full h-75 mt-4 text-sm font-normal text-grey-800">
        <thead className="text-left text-[#96A5B8]">
          <tr>
            <th className="font-normal max-sm:hidden">#</th>
            <th className="font-normal">Name</th>
            <th className="font-normal">Popularity</th>
            <th className="font-normal">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.number} className="w-full">
              <td className="max-sm:hidden">{item.number}</td>
              <td className="">{item.name}</td>
              <td className="pr-5 w-70">
                <Progress className={`h-1 ${item.color}`} color={item.color} value={item.popularity} />
              </td>
              <td className={`h-6 w-12.5 ${item.bgColor}`}>{item.sales}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </CardContent>
    </Card>
  );
}
