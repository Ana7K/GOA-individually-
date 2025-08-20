import React, { Fragment, useEffect, useState } from "react";
import data from "../data.json";
import ExtensionCard from "./components/ui/extension-card";
export default function App() {
  console.log(data);
  const [darkMode, setDarkMode] = useState(false);
  const [allData, setAllData] = useState(data);
  const [filteredData, setFilterData] = useState(data);
  const [isActive, setIsActive] = useState({
    all: true,
    active: false,
    inActive: false,
  });
  //###############
  //## Dark Mode ##
  //###############
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    if (!isDarkMode) {
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    // console.log(darkMode);
    if (!darkMode) {
      localStorage.theme = "dark";
    } else if (darkMode) {
      localStorage.theme = "light";
    }
  };

  //####################
  //## Is Active Mode ##
  //####################
  useEffect(() => {
    if (isActive.active) {
      const filterActiveData = allData.filter((item) => item.isActive);
      setFilterData(filterActiveData);
    } else if (isActive.inActive) {
      const filterInActiveData = allData.filter((item) => !item.isActive);
      setFilterData(filterInActiveData);
    } else {
      setFilterData(allData);
    }
  }, [isActive, allData]);
  //######################
  //## Is Active toggle ##
  //######################
  const handleToggleActive = (name) => {
    const updated = allData.map((ext) =>
      ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
    );
    setAllData(updated);
  };

  return (
    <main className="min-h-screen dark-gradient text-neutral-0 p-8">
      <header className="bg-neutral-600 rounded-2xl flex sm:flex-row items-center justify-between mb-10 p-4">
        <div>
          <img src="/assets/images/logo.svg" alt="extensions"></img>
        </div>
        <button
          onClick={handleDarkMode}
          className="bg-neutral-500 p-3 rounded-2xl cursor-pointer"
        >
          {darkMode ? (
            <img src="/assets/images/icon-moon.svg" alt="dark mode" />
          ) : (
            <img src="/assets/images/icon-sun.svg" alt="light mode" />
          )}
        </button>
      </header>
      <div className="flex flex-col sm:flex-row sm:text-center sm:justify-between gap-3 text-center">
        <h1 className="text-3xl font-bold text-neutral-0">Extensions List</h1>
        <div className="flex justify-center space-x-3 [&_button]:px-4 [&_button]:py-1 [&_button]:rounded-full [&_button]:cursor-pointer">
          <button
            onClick={() => {
              setIsActive({ all: true, active: false, inActive: false });
            }}
            className={`font-semibold shadow-sm ${
              isActive.all
                ? "bg-red-400 text-neutral-800"
                : "bg-neutral-600 text-neutral-50 hover:bg-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setIsActive({ all: false, active: true, inActive: false });
            }}
            className={`font-semibold shadow-sm ${
              isActive.active
                ? "bg-red-400 text-neutral-800"
                : "bg-neutral-600 text-neutral-50 hover:bg-gray-600"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => {
              setIsActive({ all: false, active: false, inActive: true });
            }}
            className={`font-semibold shadow-sm ${
              isActive.inActive
                ? "bg-red-400 text-neutral-800"
                : "bg-neutral-600 text-neutral-50 hover:bg-gray-600"
            }`}
          >
            Inactive
          </button>
        </div>

        <div>
          
          {filteredData.map((item, index) => (
            <div
              onClick={() => {
                const filterOneItem = allData.map((extension) => {
                  if (extension.name == item.name) {
                    return { ...extension, isActive: !extension.isActive };
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
              {/* {item?.name} - {item?.isActive ? "Active" : "Inactive"} */}
            </div>
          ))}
        </div>

      </div>
      <section className="mt-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredData.map((item, index) => (
            <Fragment key={index}>
              <ExtensionCard
                lomi={item}
                handleToggleActive={handleToggleActive}
                handleDarkMode={handleDarkMode}
              />
            </Fragment>
          ))}
        </ul>
      </section>
    </main>
  );
}
