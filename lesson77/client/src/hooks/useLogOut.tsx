import { useEffect, useState } from "react";

const LOGOUT = "http://localhost:8000/logout";

// export interface logoutTypes {
//   email: string;
//   password: string;
// }

export default function useLogout() {
  const [logout, setLogout] = useState<{
    isLoading: boolean;
    isError: null | Error;
    isLoggedOut: boolean;
  }>({
    isLoading: false,
    isError: null,
    isLoggedOut: false,
  });

  useEffect(() => {
    const logoutUser = async () => {
      try {
        setLogout({ ...logout, isLoading: true });
        const res = await fetch(LOGOUT, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        setLogout({
          ...logout,
          isLoading: false,
          isError: null,
        });

        // console.log(res);
      } catch (err: any) {
        setLogout({ ...logout, isLoading: false, isError: new Error(err) });
        // console.log(err, "error");
      }
    };
    logoutUser();
  }, [logout]);
  return { ...logout };
}
