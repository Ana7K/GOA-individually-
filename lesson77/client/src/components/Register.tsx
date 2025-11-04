import { useState, type ChangeEvent } from "react";
import registerApi from "../hooks/registerApi";

export default function Register() {
  const [name, setName] = useState("ana");
  const [age, setAge] = useState<number>(21);
  const [email, setEmail] = useState("ana@gmail.com");
  const [password, setPassword] = useState("lomi.123");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    registerApi({ name, age, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="flex flex-col gap-4 p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Registration
        </h2>

        <input
          placeholder="enter your name"
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          placeholder="enter your age"
          type="number"
          value={age}
          onChange={(e: ChangeEvent<HTMLInputElement & number>) =>
            setAge(Number(e.target.value))
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          placeholder="enter an email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSubmit}
          className="font-bold bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer hover:bg-blue-600 shadow-lg transition-colors duration-300"
        >
          register
        </button>
      </form>
    </div>
  );
}
