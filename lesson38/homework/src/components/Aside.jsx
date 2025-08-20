import { useEffect, useState } from "react";
import DashBoardIcon from "../assets/icons/Graph 1";
import LeaderboardIcon from "../assets/icons/Group";
import OrderIcon from "../assets/icons/shopping-cart";
import ProductsIcon from "../assets/icons/mdi_shopping-outline";
import SalesReportIcon from "../assets/icons/Chart_Line";
import MessagesIcon from "../assets/icons/mdi_message-processing-outline";
import SettingsIcon from "../assets/icons/mdi_cog-outline";
import SignOutIcon from "../assets/icons/Group 923";
const data = [
  {
    img: DashBoardIcon,
    title: "Dashboard",
    isSelect: true,
    path: "/",
  },
  {
    img: LeaderboardIcon,
    title: "Leaderboard",
    isSelect: false,
    path: "/leaderboard",
  },
  {
    img: OrderIcon,
    title: "order",
    isSelect: false,
    isStroke: true,
    path: "/order",
  },
  {
    img: ProductsIcon,
    title: "Products",
    isSelect: false,
    path: "/lomi",
  },
  {
    img: SalesReportIcon,
    title: "Sales Report",
    isSelect: false,
    isStroke: true,
    path: "/sales",
  },
  {
    img: MessagesIcon,
    title: "Messages",
    isSelect: false,
    path: "/messages",
  },
  {
    img: SettingsIcon,
    title: "Settings",
    isSelect: false,
    path: "/Settings",
  },
  {
    img: SignOutIcon,
    title: "SignOut",
    isSelect: false,
    path: "/signout",
  },
  // {
  //   img: "src/assets/images/Vector.png",
  //   title: "Leaderboard",
  //   isSelect: false,
  //   path: "/leaderboard",
  // },
  // {
  //   img: "src/assets/images/shopping-cart.png",
  //   title: "Order",
  //   isSelect: false,
  //   path: "/order",
  // },
  // {
  //   img: "src/assets/images/mdi_shopping-outline.png",
  //   title: "Products",
  //   isSelect: false,
  //   path: "/products",
  // },
  // {
  //   img: "src/assets/images/Chart_Line.png",
  //   title: "Sales Report",
  //   isSelect: false,
  //   path: "/sales-report",
  // },
  // {
  //   img: "src/assets/images/mdi_message-processing-outline.png",
  //   title: "Messages",
  //   isSelect: false,
  //   path: "/messages",
  // },
  // {
  //   img: "src/assets/images/mdi_cog-outline.png",
  //   title: "Settings",
  //   isSelect: false,
  //   path: "/settings",
  // },
  // {
  //   img: "src/assets/images/Sign Out Icon.png",
  //   title: "Sign Out",
  //   isSelect: false,
  //   path: "/signout",
  // },
];
export default function Aside({ className = "" }) {
  const [listItems, setListItems] = useState(data);

  const handleClick = (index) => {
    const updatedItems = listItems.map((item, i) => ({
      ...item, //დარჩენილი დატა stays same
      isSelect: i === index, //ხოლო დაკლიკებული true
    }));
    console.log(updatedItems);
    setListItems(updatedItems);
  };

  return (
    <>
      {/* follow white rabbit. */}
      <aside
        className={`p-4 bg-grey-100 overflow-y-auto w-full sm:w-auto transform transition-transform duration-300 ${className}`}
      >
        {/* Head logo 🐇 */}
        <div className="flex gap-4 items-center w-max">
          <img
            src="src/assets/images/dummy logo.png"
            alt="logo"
            className="size-14"
          />
          <p className="text-3xl font-semibold text-grey-900">Dabang</p>
        </div>
        {/* Page lists 🐇*/}
        <div className="text-sm text-blue-grey-700 flex flex-col justify-between gap-5 my-5">
          {/* მონიშნული page ის მაგალითი ❤️ */}
          {listItems.map(
            (
              item,
              index //გადავლა ყველა ელემენტზე სათითაოდ
            ) => (
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
                  className={`size-8  ${
                    item.isSelect
                      ? item.isStroke
                        ? "stroke-grey-100"
                        : `fill-grey-100`
                      : item.isStroke
                        ? "stroke-grey-700"
                        : `fill-grey-700`
                  }`}
                />

                <p
                  className={item.isSelect ? "text-grey-100" : "text-grey-700"}
                >
                  {item.title}
                </p>
              </button>
            )
          )}
        </div>
        {/* <div className="flex bg-purplish rounded-2xl cursor-pointer py-4 px-1 items-center justify-center gap-6 font-bold">
            <img
              src="src/assets/images/Graph 1.png"
              alt="logo"
              className="size-5"
            />
            <p className="text-white">Dashboard</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/Vector.png"
              alt="logo"
              className="size-5"
            />
            <p>Leaderboard</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/shopping-cart.png"
              alt="logo"
              className="size-5"
            />
            <p>order</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/mdi_shopping-outline.png"
              alt="logo"
              className="size-5"
            />
            <p>Products</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/Chart_Line.png"
              alt="logo"
              className="size-5"
            />
            <p>Sales Report</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/mdi_message-processing-outline.png"
              alt="logo"
              className="size-5"
            />
            <p>Messages</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/mdi_cog-outline.png"
              alt="logo"
              className="size-5"
            />
            <p>Settings</p>
          </div>
          <div className="flex p-2 gap-4 cursor-pointer">
            <img
              src="src/assets/images/Sign Out Icon.png"
              alt="logo"
              className="size-5"
            />
            <p>Sign Out</p>
          </div> */}

        {/* 🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇🐇 */}
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
          <p className="text-white text-center text-sm relative z-2">
            get access to all features on tetumbas
          </p>
          <button className="text-center text-purplish font-semibold bg-white rounded p-3 cursor-pointer relative z-2">
            Get Pro
          </button>
        </div>
      </aside>
    </>
  );
}
