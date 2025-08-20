 import { useEffect, useState } from "react";
const data = [
  {
    logo: "/assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "/assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "/assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "/assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "/assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "/assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const [allData, setAllData] = useState(data);
  const [filtedData, setFilterData] = useState(data);
  //###################
  //## isActive Data ##
  //###################
  const [isActiveData, setIsActiveData] = useState({
    all: true,
    acitive: false,
    inActvie: false,
  });

  //###############
  //## Dark Mode ##
  //###############
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  //####################
  //## Is Active Mode ##
  //####################
  useEffect(() => {
    if (isActiveData.active) {
      const filterActiveData =allData.filter((item) => item.isActive);
      setFilterData(filterActiveData);
    } else if (isActiveData.inActive) {
      const filterInActiveData =allData.filter((item) => !item.isActive);
      setFilterData(filterInActiveData);
    } else {
      setFilterData(allData);
    }
  }, [isActiveData, allData, filtedData]);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };
  return (
    <div className="dark:bg-yellow-500 h-screen">
      <div className="space-x-5 [&_button]:bg-red-500 [&_button]:rounded-sm [&_button]:px-4 [&_button]:py-1 text-red-100 [&_button]:cursor-pointer [&_button]:hover:bg-red-600 [&_button]:transition-all [&_button]:duration-200">
        <button
          onClick={() => {
            setIsActiveData({
              all: true,
              acitive: false,
              inActvie: false,
            });
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setIsActiveData({
              all: false,
              acitive: true,
              inActvie: false,
            });
          }}
        >
          Actvie
        </button>
        <button
          onClick={() => {
            setIsActiveData({
              all: false,
              acitive: false,
              inActvie: true,
            });
          }}
        >
          InActive
        </button>
      </div>
      <div>
        {/*
        //####################
        //## Is Actvie Mode ##
        //#################### */}
        {filtedData.map((item, index) => (
          <div
            onClick={() => {
              console.log("აქ იყო კოდი");

              const filterOneItem = allData.map((extension) => {
                if (extension.name == item.name) {
                  return {...extension, isActive:!extension.isActive};
                }
                return extension;
              });
              
              setAllData(filterOneItem);
              console.table(allData);
            }}
            key={index}
            className={`cursor-pointer p-2 ${
              item?.isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {item?.name} - {item?.isActive ? "Active" : "Inactive"}
          </div>
        ))}
      </div>
      <div onClick={handleDarkMode} className="relative inline-block w-11 h-5">
        <input
          id="switch-component"
          type="checkbox"
          checked={darkMode}
          onChange={() => {}}
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="switch-component"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
    </div>
  );
}
