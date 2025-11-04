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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      Home
    </div>
  );
}
