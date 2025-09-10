import { ChevronDown, Moon, Sun, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Dialog from "./components/dialog";
// import Note from "./components/note";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
    <>
      <div className="h-screen overflow-y-hidden bg-white dark:bg-[#252525] transition-colors duration-500">
        <div className="h-screen container m-auto relative">
          <h1 className="m-5 text-[#252525] dark:text-white font-medium text-center">
            TODO LIST
          </h1>
          <div className="flex gap-4 justify-center items-center">
            <div className="w-full relative flex items-center">
              <input
                type="search"
                id="search"
                name="search"
                className="w-full ring ring-[#6C63FF] dark:ring-white dark:text-[#666666] rounded-sm px-4 py-[11px]"
                placeholder="Search note..."
              />
              <Search
                color="#6C63FF"
                className="dark:stroke-white absolute top-3 right-4"
              />
            </div>
            <div className="relative h-full w-[85px]">
              <button className="w-full h-full">
                <select
                  name="list"
                  id="list"
                  className="w-full h-full ring-2 ring-[#6C63FF] appearance-none text-white bg-[#6C63FF] hover:bg-[#534CC2] transition-colors duration-300 p-2.5 rounded-md border-none font-semibold cursor-pointer"
                >
                  <option value="ALL">ALL</option>
                  <option value="done">done</option>
                  <option value="undone">undone</option>
                </select>
              </button>
              <ChevronDown
                color="white"
                className="absolute w-3 top-2.5 right-2 cursor-pointer"
              />
            </div>
            <div
              onClick={handleDarkMode}
              className="bg-[#6C63FF] hover:bg-[#534CC2] transition-colors duration-300 ring-2 ring-[#6C63FF] flex justify-center items-center p-2.5 rounded-md cursor-pointer"
            >
              {darkMode ? <Moon color="white" /> : <Sun color="white" />}
            </div>
          </div>
          {/* თუ ნოუთები არიქნება...  */}
          <div className="flex flex-col gap-5 justify-center items-center m-8">
            <img
              src={
                darkMode
                  ? "/images/Detective-check-footprint 1 (1).svg"
                  : "/images/Detective-check-footprint 1.svg"
              }
              alt="empty illustration"
            />
            <span className="font-normal dark:text-white">Empty...</span>
          </div>

          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-[#6C63FF] hover:bg-[#534CC2] transition-colors duration-300 shadow-[0_0_4px_#6C63FF] absolute bottom-8 right-2 rounded-full p-3 cursor-pointer"
          >
            <Plus color="white" className="w-full" />
          </button>
        </div>
        {/*dialog */}
        <Dialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onApply={(note) => console.log("New note:", note)}
        ></Dialog>
        {/* <Note/> */}
        {/* _id mapit gadavuvli  {item?._id} &nbsp; {item?.name} */}
      </div>
    </>
  );
}
