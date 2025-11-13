import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("http://localhost:8000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(await res.json());
    };
    getUser();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-400 fixed top-0 flex left-0 right-0 justify-between items-center">
        <h1 className="text-3xl font-bold m-2">Home</h1>
        <form>
          <button
            type="submit"
            onClick={async () => {
              const res = await fetch("http://localhost:8000/logout", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              });
            }}
            className=" text-blue-700 font-semibold m-3 rounded-md hover:underline transition-all duration-300 cursor-pointer"
          >
            log out
          </button>
        </form>
      </div>
      <div className="text-center">
        <p className="text-gray-600">Welcome to your profile page</p>
      </div>
    </div>
  );
}
