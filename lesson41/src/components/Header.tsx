import Input from "./input";
import { Menu } from "lucide-react";
import type { JSX } from "react";

interface HeaderProps {
  onToggleAside: () => void;
}

export default function Header({ onToggleAside }: HeaderProps): JSX.Element {
  return (
    <header className="p-4 bg-grey-100 flex-center justify-between">
      {/* Menu toggle */}
      <span
        onClick={onToggleAside}
        className="flex-center gap-2 text-4xl text-grey-900 font-semibold cursor-pointer"
      >
        <Menu className="size-10" />
        <p className="hidden lg:block">DashBoard</p>
      </span>

      <div className="flex gap-10">
        <div className="flex gap-12">
          {/* Input UI */}
          <div className="max-xl:hidden">
            <Input />
          </div>

          {/* Country select */}
          <div className="flex-center gap-3.5 max-md:hidden">
            <img
              src="/images/United.svg"
              alt="flag"
              className="size-6"
            />
            <select
              name="languages"
              id="languages"
              className="text-grey-800 font-semibold cursor-pointer"
            >
              <option value="Eng (US)">Eng (US)</option>
              <option value="Eng (UK)">Eng (UK)</option>
            </select>
          </div>
        </div>

        {/* Profile select */}
        <div className="flex-center gap-6 max-sm:gap-2">
          <img
            src="/images/Notifications.svg"
            alt="notification"
            className="size-12 max-sm:hidden"
          />
          <img
            src="/images/Rectangle 1393.svg"
            alt="profile"
            className="w-fit max-sm:size-10"
          />
          <div className="flex flex-col items-start">
            <select
              name="login"
              id="login"
              className="text-grey-900 pr-13.5 cursor-pointer max-md:pr-2"
            >
              <option value="Musfiq">Musfiq</option>
              <option value="viewer">viewer</option>
            </select>
            <span className="ml-1 text-sm text-grey-700 max-sm:hidden">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
