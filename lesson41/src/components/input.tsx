import type { JSX } from "react";

export default function Input(): JSX.Element {
  return (
    <div className="flex gap-2 items-center bg-grey-300 rounded-xl px-6 py-3.5">
      <img
        src="src/assets/images/magnifier.svg"
        alt="magnifier"
        className="size-8"
      />
      <input
        type="search"
        id="search"
        name="search"
        className="flex shrink input-searchbar lg:w-100 text-grey-700"
        placeholder="Search here..."
      />
    </div>
  );
}
