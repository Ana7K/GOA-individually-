import { useState, type JSX } from "react";
import DashBoardIcon from "../assets/icons/Graph 1";
import LeaderboardIcon from "../assets/icons/Group";
import OrderIcon from "../assets/icons/shopping-cart";
import ProductsIcon from "../assets/icons/mdi_shopping-outline";
import SalesReportIcon from "../assets/icons/Chart_Line";
import MessagesIcon from "../assets/icons/mdi_message-processing-outline";
import SettingsIcon from "../assets/icons/mdi_cog-outline";
import SignOutIcon from "../assets/icons/Group 923";

// Define type for menu items
interface MenuItem {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  isSelect: boolean;
  path: string;
  isStroke?: boolean;
}

interface AsideProps {
  className?: string;
}

const data: MenuItem[] = [
  { img: DashBoardIcon, title: "Dashboard", isSelect: true, path: "/" },
  { img: LeaderboardIcon, title: "Leaderboard", isSelect: false, path: "/leaderboard" },
  { img: OrderIcon, title: "order", isSelect: false, isStroke: true, path: "/order" },
  { img: ProductsIcon, title: "Products", isSelect: false, path: "/products" },
  { img: SalesReportIcon, title: "Sales Report", isSelect: false, isStroke: true, path: "/sales" },
  { img: MessagesIcon, title: "Messages", isSelect: false, path: "/messages" },
  { img: SettingsIcon, title: "Settings", isSelect: false, path: "/Settings" },
  { img: SignOutIcon, title: "SignOut", isSelect: false, path: "/signout" },
];

export default function Aside({ className = "" }: AsideProps): JSX.Element {
  const [listItems, setListItems] = useState<MenuItem[]>(data);

  const handleClick = (index: number): void => {
    const updatedItems = listItems.map((item, i) => ({
      ...item,
      isSelect: i === index, // clicked one gets selected
    }));
    setListItems(updatedItems);
  };

  return (
    <aside
      className={`p-4 bg-grey-100 overflow-y-auto w-full sm:w-auto transform transition-transform duration-300 ${className}`}
    >
      {/* Logo */}
      <div className="flex gap-4 items-center w-max">
        <img
          src="src/assets/images/dummy logo.png"
          alt="logo"
          className="size-14"
        />
        <p className="text-3xl font-semibold text-grey-900">Dabang</p>
      </div>

      {/* Menu list */}
      <div className="text-sm text-blue-grey-700 flex flex-col justify-between gap-5 my-5">
        {listItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center w-auto gap-4 px-6 py-3 cursor-pointer rounded-2xl transition-all duration-300
              ${
                item.isSelect
                  ? "bg-purple-900 font-semibold shadow-list shadow-shadow-list/10"
                  : "font-normal hover:bg-grey-400"
              }`}
          >
            <item.img
              className={`size-8 ${
                item.isSelect
                  ? item.isStroke
                    ? "stroke-grey-100"
                    : "fill-grey-100"
                  : item.isStroke
                  ? "stroke-grey-700"
                  : "fill-grey-700"
              }`}
            />
            <p className={item.isSelect ? "text-grey-100" : "text-grey-700"}>
              {item.title}
            </p>
          </button>
        ))}
      </div>

      {/* Pro version box */}
      <div className="relative flex-center flex-col gap-1 py-5">
        <img
          src="src/assets/images/Background.png"
          alt="bg"
          className="absolute max-w-full"
        />
        <img
          src="src/assets/images/Logo.png"
          alt="logo"
          className="w-fit relative z-2"
        />
        <p className="text-white text-center text-xl font-semibold relative z-2">
          Debang Pro
        </p>
        <p className="text-white text-center text-xs relative z-2">
          get access to all features on tetumbas
        </p>
        <button className="text-center text-purple-900 font-semibold bg-white rounded-lg p-3 cursor-pointer relative z-2">
          Get Pro
        </button>
      </div>
    </aside>
  );
}
