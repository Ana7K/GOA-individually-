import { Navigate, Outlet } from "react-router";
import useProfile from "../hooks/useProfile";
import { useEffect, useState } from "react";

export default function AuthRoute() {
  const { data, isError, isLoading } = useProfile();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (data.user && data) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    //   return;
    // } else {
    //   setIsLogin(true);
    // }
  }, [data, isLoading]);
  console.log(isLoading);
  console.log(data);
  return data ? <Outlet /> : <Navigate to="/profile" />;
}
