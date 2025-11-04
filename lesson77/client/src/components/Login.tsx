import { useState, type ChangeEvent } from "react";
import loginApi from "../hooks/loginApi";

export default function Login() {
  const [email, setEmail] = useState("ana@gmail.com");
  const [password, setPassword] = useState("lomi.123");
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-md w-80">
        <input
          placeholder="enter an email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
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
          onClick={(e) => {
            e.preventDefault();
            loginApi({ email, password });
          }}
          className="font-bold bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer hover:bg-blue-600 shadow-lg transition-colors duration-300"
        >
          log in
        </button>
      </div>
    </>
  );
}
