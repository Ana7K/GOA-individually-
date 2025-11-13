import { Navigate, Outlet } from "react-router";
import useProfile from "../hooks/useProfile";

export default function AuthRoute() {
  const { data, isError, isLoading } = useProfile();

  // ##################### if user exist navigate to profile #####################
  if (data.user) {
    return <Navigate to="/profile" />;
  }
  // ##################### if user is fetching data, loading before #####################
  if (isLoading) return <>...loading</>;

  // ##################### if user doesn't exist Outlet it :)) in our case render  <<< Login, or , Register >>> #####################
  return data && <Outlet />;
}
