import { useEffect, useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  useEffect(() => {
    const width = window.innerWidth;
    const size = 768;
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const size = 768;

      console.log("cxeli dzaglebi", width);
      if (width < size) setIsAsideOpen(false);
      else setIsAsideOpen(true);
    });
    if (width < size) setIsAsideOpen(false);
    else setIsAsideOpen(true);
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (
    <>
      <div className="bg-background-color h-screen flex">
        <Aside className={`${isAsideOpen ? "block" : "hidden"}`} />
        <div className="flex flex-col w-full overflow-x-auto">
          <Header onToggleAside={toggleAside} />
          <Main />
        </div>
      </div>
    </>
  );
}
