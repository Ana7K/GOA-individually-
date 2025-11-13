import { Navigate, Outlet } from "react-router";
import useProfile from "../hooks/useProfile";

export default function ProtectedRoute() {
  const { data, isError, isLoading } = useProfile();
  // ############## if user token don't exist navigate to  << login >> ########################
  if (isError) {
    return <Navigate to="/login" />;
  }
  // console.log(isError);

  // ##################### if user is fetching data, loading before #####################
  if (isLoading) return <>...loading</>;

  // ##################### if user exist Outlet it :)) in our case render << Profile >> #####################
  return data && <Outlet />;
}
