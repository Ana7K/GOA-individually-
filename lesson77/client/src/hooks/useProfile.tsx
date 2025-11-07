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
        setProfile((prev) => ({ ...prev, data: data }));
        console.log(profile);
      } catch (err: any) {
        setProfile({ ...profile, isLoading: false, isError: new Error(err) });
        console.log(err, "error");
      }
    };
    profileUser();
  }, []);
  return { ...profile };
}
