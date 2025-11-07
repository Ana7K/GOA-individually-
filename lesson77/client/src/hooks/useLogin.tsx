import { useEffect, useState } from "react";

const LOGIN = "http://localhost:8000/login";

// export interface loginTypes {
//   email: string;
//   password: string;
// }

export default function useLogin() {
  const [login, setLogin] = useState<{
    isLoading: boolean;
    isError: null | Error;
  }>({
    isLoading: false,
    isError: null,
  });

  const [userLogin, setUserLogin] = useState<{
    email: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    const loginUser = async () => {
      if (!userLogin) {
        return;
      }
      // console.log(userLogin);
      try {
        setLogin({ ...login, isLoading: true });

        // const res = await fetch(LOGIN, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   credentials: "include",
        //   body: JSON.stringify({ userLogin }),
        // });
        const res = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: userLogin.email,
            password: userLogin.password,
          }),
        });
        if (res.status === 409) {
          setLogin({
            ...login,
            isLoading: false,
            isError: new Error("user already logged in"),
          });
        } else {
          setLogin({
            ...login,
            isLoading: false,
            isError: null,
          });
        }
        // console.log(res);
      } catch (err: any) {
        setLogin({ ...login, isLoading: false, isError: new Error(err) });
        console.log(err, "error");
      }
    };
    loginUser();
  }, [userLogin]);
  return { ...login, setUserLogin };
}
