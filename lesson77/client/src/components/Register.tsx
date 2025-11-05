import { useState, type ChangeEvent, type FormEvent } from "react";
import registerApi from "../hooks/registerApi";
import useRegister from "../hooks/useRegister";
import Loading from "./Loading";

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isError, isLoading, setUserRegister } = useRegister();
  console.log(isLoading);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // registerApi({ name, age, email, password });
    setUserRegister({ name, age, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col gap-4 p-6 bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
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
          type="submit"
          className="font-bold bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer hover:bg-blue-600 shadow-lg transition-colors duration-300"
        >
          register
          {!isLoading && <Loading />}
        </button>
        {isError && <div>{isError.message}</div>}
      </form>
    </div>
  );
}
