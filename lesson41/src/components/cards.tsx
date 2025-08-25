import ExportIcon from "@/assets/icons/Export Icon";
import SalesIcon1 from "@/assets/icons/Icon";
import SalesIcon2 from "@/assets/icons/Icon (1)";
import SalesIcon3 from "@/assets/icons/Icon (2)";
import SalesIcon4 from "@/assets/icons/Icon (3)";
import { useState, type JSX } from "react";

interface SalesItem {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  littleTitle: string;
  label: string;
  bgColor: string;
}

interface SalesItemProps {
  className?: string;
}

const data: SalesItem[] = [
  {
    img: SalesIcon1,
    title: "$1k",
    littleTitle: "Total Sales",
    label: "+8% from yesterday",
    bgColor: "bg-salesPink",
  },
  {
    img: SalesIcon2,
    title: "300",
    littleTitle: "Total Orders",
    label: "+5% from yesterday",
    bgColor: "bg-salesYellow",
  },
  {
    img: SalesIcon3,
    title: "5",
    littleTitle: "Products Sold",
    label: "+1.2% from yesterday",
    bgColor: "bg-salesGreen",
  },
  {
    img: SalesIcon4,
    title: "8",
    littleTitle: "New Customers",
    label: "+0.5% from yesterday",
    bgColor: "bg-salesPurple",
  },
];

export function Cards({ className = "" }: SalesItemProps): JSX.Element {
  const [listItems] = useState<SalesItem[]>(data);

  return (
    <div
      className={`p-4 pt-1 bg-grey-100 h-full w-full sm:w-auto transform transition-transform duration-300 ${className}`}
    >
      {/* Header */}
      <div className="flex-center justify-between mb-6">
        <div className="flex flex-col gap-1 w-max">
          <span className="text-xl font-semibold text-grey-900">
            Today's Sales
          </span>
          <span className="text-base font-sm text-grey-700">Sales Summary</span>
        </div>
        <button className="flex-center gap-2 px-4 py-2 border-1 rounded-lg border-[#C3D3E2] hover:bg-gray-50 transition-all duration-300 cursor-pointer">
          <ExportIcon />
          <span className="text-sm font-medium text-[#0F3659]">Export</span>
        </button>
      </div>

      {/* Sales list */}
      <div className="flex gap-4 overflow-x-auto">
        <div className="flex gap-4">
          {listItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col max-2xl:w-full max-md:w-45 w-45 p-4 gap-4 rounded-2xl ${item.bgColor}`}
            >
              <item.img className="w-8" />
              <p className="text-2xl font-semibold text-grey-900">
                {item.title}
              </p>
              <p className="text-base text-[#425166]">{item.littleTitle}</p>
              <p className="text-xs text-light-blue-800">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
