export default function Loading() {
  return (
    <div className="absolute top-1/2 right-1/2 text-center">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-900 rounded-full animate-spin mx-auto"></div>
      <h1 className="mt-4 font-extrabold text-blue-500">Loading...</h1>
    </div>
  );
}