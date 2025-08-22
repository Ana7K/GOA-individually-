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
    color: "color-ranking-blue",
    bgColor: "bg-color-ranking-blue-shade"
  },
  {
    number: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 50,
    sales: 29,
    color: "color-ranking-green",
    bgColor: "bg-color-ranking-green-shade"
  },
  { number: "03",
    name: "Bathroom Essentials",
    popularity: 30,
    sales: 18,
    color: "color-ranking-purple",
    bgColor: "bg-color-ranking-purple-shade"
  },
  { number: "04",
    name: "Apple Smartwatches",
    popularity: 60,
    sales: 25,
    color: "color-ranking-orange",
    bgColor: "bg-color-ranking-orange-shade"
  },
];

export function ProductsProgress() {
  return (
    <>
      <span className="text-xl font-semibold text-dark-blue-shade">
        Top Products
      </span>
      <table className="w-full h-75 mt-4 text-sm font-normal text-grey-800">
        <thead className="text-left text-[#96A5B8]">
          <tr>
            <th className="font-normal">#</th>
            <th className="font-normal">Name</th>
            <th className="font-normal">Popularity</th>
            <th className="font-normal">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.number} className=" pr-6">
              <td>{item.number}</td>
              <td>{item.name}</td>
              <td className="w-100 pr-10">
                <Progress className={`${item.color}`} value={item.popularity} />
              </td>
              <td className={`${item.bgColor}`}>{item.sales}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
