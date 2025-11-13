export default function Loading() {
  return (
    <div className="absolute top-1/2 text-center bg-gray-100 opacity-80 p-4 rounded-xl">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-900 rounded-full animate-spin mx-auto"></div>
      <h1 className="mt-4 font-extrabold text-blue-400">Loading...</h1>
    </div>
  );
}
