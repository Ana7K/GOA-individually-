import { useEffect, useState } from "react";

const PROFILE = "http://localhost:8000/profile";

// export interface profileTypes {
//   email: string;
//   password: string;
// }

export default function useProfile() {
  const [profile, setProfile] = useState<{
    isLoading: boolean;
    isError: null | Error;
    data: object;
  }>({
    isLoading: false,
    isError: null,
    data: {},
  });

  useEffect(() => {
    const profileUser = async () => {
      try {
        setProfile({ ...profile, isLoading: true });

        const res = await fetch(PROFILE, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await res.json();
        if (data.status === 401) {
          setProfile((prev) => ({
            ...prev,
            isError: new Error("No token found"),
            data: data,
            isLoading: false,
          }));
        }
        setProfile((prev) => ({ ...prev, data: data, isLoading: false }));
        // console.log(profile);
      } catch (err: any) {
        setProfile({ ...profile, isLoading: false, isError: new Error(err) });
        console.log(err, "error");
      }
    };
    profileUser();
  }, []);
  return { ...profile };
}
