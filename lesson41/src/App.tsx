import { useEffect, useState, type JSX } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App(): JSX.Element {

  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);

  useEffect(() => {
    const size = 768;

    const handleResize = (): void => {
      const width = window.innerWidth;
      if (width < size) setIsAsideOpen(false);
      else setIsAsideOpen(true);
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAside = (): void => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <div className="bg-background-color h-screen flex">
      <Aside onToggleAside={toggleAside} className={`${isAsideOpen ? "block" : "hidden"}`} />
      <div className="flex flex-col w-full overflow-x-auto">
        <Header onToggleAside={toggleAside} />
        <Main />
      </div>
    </div>
  );
}
