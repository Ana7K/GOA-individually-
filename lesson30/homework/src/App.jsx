import React from "react";
import { useEffect, useState } from "react";
import Loading from "./components/ui/loading";

export default function App() {
  const [lion, setLionInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeApi();
  }, []);

  async function fakeApi() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setLionInfo(json);
        setLoading(false);
      });
  }

  if (loading) return <Loading />;
  return (
    <div className="text-center p-6 min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-800">🦭 Sea Lions</h1>
      {lion ? (
        <div className="max-w-xl bg-white rounded-xl p-6 border border-amber-300">
          <p className="text-gray-700 text-justify mb-4">
            Sea lions are pinnipeds characterized by external ear flaps, long
            foreflippers, the ability to walk on all fours, short and thick
            hair, and a big chest and belly. Together with the fur seals, they
            make up the family Otariidae, eared seals. The sea lions have six
            extant and one extinct species in five genera
          </p>
          
          <ul className="list-disc text-gray-600">
            <li>Lifespan: 20 – 30 years</li>
            <li>Class: Mammalia</li>
            <li>Family: Otariidae</li>
          </ul>
        </div>
      ) : (
        <p className="text-red-600">Failed to load sea lion info</p>
      )}
    </div>
  );
}
