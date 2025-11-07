import { useState, type ChangeEvent, type MouseEvent } from "react";
// import loginApi from "../hooks/loginApi";
import useLogin from "../hooks/useLogin";
import Loading from "./Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isError, isLoading, setUserLogin } = useLogin();
  // console.log(isLoading);

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserLogin({ email, password });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
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
          onClick={handleLogin}
          // disabled={isLoading}
          type="button"
          className="flex items-center justify-center font-bold bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer hover:bg-blue-600 shadow-lg transition-colors duration-300 disabled:opacity-60"
        >
          {isLoading && <Loading />}
          login
        </button>

        {isError && <div className="text-red-500">{isError.message}</div>}
      </div>
    </>
  );
}
