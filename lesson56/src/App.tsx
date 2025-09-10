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
    <div className="bg-blue-200 min-h-screen m-auto flex items-center justify-center md:p-10">
      <div className="md:bg-white rounded-xl flex gap-5 max-md:flex-col md:h-160">
        <div className="md:p-5">
          <Aside />
        </div>
        <div className="m-6 md:w-100">
          <div className="flex max-md:p-5 max-md:-mt-16 rounded-xl bg-white">
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
