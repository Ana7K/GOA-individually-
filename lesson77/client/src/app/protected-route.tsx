import { Navigate, Outlet } from "react-router";
import useProfile from "../hooks/useProfile";

export default function ProtectedRoute() {
  const { data, isError, isLoading } = useProfile();
  return !data ? <Outlet /> : <Navigate to="/login" />;
}
