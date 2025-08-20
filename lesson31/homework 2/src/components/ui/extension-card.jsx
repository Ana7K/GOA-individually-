export default function ExtensionCard({ lomi, handleToggleActive, handleDarkMode}) {
  return (
    <li className="bg-neutral-800 p-4 rounded-xl flex flex-col justify-between border border-neutral-500">
      <div className="flex gap-4 mb-4">
        <img
          src={lomi.logo}
          alt={`${lomi.name} logo`}
          className="mt-1 w-12 h-12"
        />
        <div>
          <h3 className="text-neutral-0 font-semibold">{lomi.name}</h3>
          <p className="text-neutral-400 text-sm">{lomi.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <button className="text-neutral-0 border border-neutral-500 rounded-full bg-neutral-800 cursor-pointer hover:bg-neutral-700 text-sm px-3 py-1">
          Remove
        </button>

        <div className="relative">
          <input
            id={`switch-${lomi.name}`}
            type="checkbox"
            checked={lomi.isActive}
            onChange={() => handleToggleActive(lomi.name)}
            className="peer appearance-none checked:bg-red-900 w-12 h-6 bg-neutral-600 rounded-full cursor-pointer transition-colors duration-300"
          />
          <label
            htmlFor={`switch-${lomi.name}`}
            className="w-6 h-6 rounded-full absolute top-0 left-0 peer-checked:translate-x-6 cursor-pointer bg-neutral-0 transition-transform duration-300"
          />
        </div>
      </div>
    </li>
  );
}
