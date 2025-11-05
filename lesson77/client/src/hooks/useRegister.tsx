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
    isLoading: true,
    isError: null,
  });

  const [userRegister, setUserRegister] = useState<{
    name: string;
    age: number;
    email: string;
    password: string;
  } | null>(null);

  try {
    useEffect(() => {
      // const postRegister = async () => {
      //   console.log(userRegister);
      //   setRegister({ ...register, isLoading: false });
      //   console.log("user successfully registered");
      // };
      // postRegister();
      const getUser = async () => {
        setRegister({ ...register, isLoading: false });

        if (!userRegister) {
          return;
        }
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
            isError: new Error("user already registered"),
          });
        } else {
          setRegister({
            ...register,
            isError: null,
          });
        }
        console.log(res);
      };
      getUser();
    }, [userRegister]);
  } catch (err: any) {
    setRegister({ ...register, isError: new Error(err) });
    console.log(err, "error");
  }
  return { ...register, setUserRegister };
}
