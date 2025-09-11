// import { useEffect, useState } from "react";
import Aside from "./components/Aside";
import PersonalInfo from "./pages/Personal-Info";
import { Route, Routes } from "react-router";
import SelectYourPlan from "./pages/Select-Your-Plan";
import AddOns from "./pages/Add-Ons";
import Summary from "./pages/Summary";

export default function App() {
  // const [darkMode, setDarkMode] = useState(() => {
  //   return (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   );
  // });

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  // const handleDarkMode = () => {
  //   const newDarkMode = !darkMode;
  //   setDarkMode(newDarkMode);
  //   if (newDarkMode) {
  //     localStorage.theme = "dark";
  //   } else {
  //     localStorage.theme = "light";
  //   }
  // };
  return (
    <div className="bg-blue-100 min-h-screen md:flex items-start md:items-center justify-center md:p-10">
      <div className="md:bg-white rounded-xl flex gap-5 max-md:flex-col">
        <div className="md:p-5">
          <Aside />
        </div>
        <div className="p-6 h-full max-md:mb-16">
          <div className="md:h-[592px] md:w-[450px] max-md:p-5 max-md:-mt-24 rounded-xl bg-white">
            <Routes>
              <Route path="/" Component={PersonalInfo}></Route>
              <Route path="/plan" Component={SelectYourPlan}></Route>
              <Route path="/addons" Component={AddOns}></Route>
              <Route path="/summary" Component={Summary}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
