import { Navigate, Outlet } from "react-router";
import useProfile from "../hooks/useProfile";

export default function AuthRoute() {
  const { data, isError, isLoading } = useProfile();

  //! $$$$$$$$$$$$$$$$$$$$$$$$$$$$ modzebne window.location.pathname routerebshi $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // ##################### if in root path, navigate to login #####################
  if (window.location.pathname === "/") return <Navigate to="/login" />;

  // ##################### if user exists navigate to profile #####################
  if (data?.user) {
    return <Navigate to="/profile" />;
  }
  // ##################### if user is fetching data, loading goes before #####################
  if (isLoading) return <>...loading</>;

  // ##################### if fetching user profile fails, navigate to login #####################
  if (isError) return JSON.stringify(isError);

  // ##################### if user doesn't exist, Outlet it :)) in our case render  << Login or Register >> #####################
  return data && <Outlet />;
}
