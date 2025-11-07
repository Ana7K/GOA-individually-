import { useEffect, useState } from "react";

const REGISTER = "http://localhost:8000/register";
export interface registerTypes {
  name: string;
  age: number;
  email: string;
  password: string;
}

export default function useRegister() {
  const [register, setRegister] = useState<{
    isLoading: boolean;
    isError: null | Error;
  }>({
    isLoading: false,
    isError: null,
  });

  const [userRegister, setUserRegister] = useState<{
    name: string;
    age: number;
    email: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    // const postRegister = async () => {
    //   console.log(userRegister);
    //   setRegister({ ...register, isLoading: false });
    //   console.log("user successfully registered");
    // };
    // postRegister();
    const getUser = async () => {
      if (!userRegister) {
        return;
      }
      try {
        setRegister({ ...register, isLoading: true });

        const res = await fetch(REGISTER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(userRegister),
        });
        if (res.status === 409) {
          setRegister({
            ...register,
            isLoading: false,
            isError: new Error("user already registered"),
          });
        } else {
          setRegister({
            ...register,
            isLoading: false,
            isError: null,
          });
        }
        console.log(res);
      } catch (err: any) {
        setRegister({ ...register, isLoading: false, isError: new Error(err) });
        console.log(err, "error");
      }
    };
    getUser();
  }, [userRegister]);
  return { ...register, setUserRegister };
}
