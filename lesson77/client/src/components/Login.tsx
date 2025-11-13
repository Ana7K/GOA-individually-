import { useState, type ChangeEvent, type MouseEvent } from "react";
// import loginApi from "../hooks/loginApi";
import useLogin from "../hooks/useLogin";
import Loading from "./Loading";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isError, isLoading, setUserLogin } = useLogin();
  // console.log(isLoading);

  const handleLogin = () => {
    setUserLogin({ email, password });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="flex flex-col gap-4 p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <input
            placeholder="📧 enter an email"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            placeholder="🔒 enter password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-center justify-between gap-4 m-2">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="accent-blue-500 w-4 h-4"
              ></input>
              <p className="text-xs text-center text-gray-700">Remember me</p>
            </div>
            <Link
              to="/register"
              className="text-xs text-blue-600 font-semibold hover:underline"
            >
              Forgot password?
            </Link>
          </div>

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

          <p className="text-sm text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
