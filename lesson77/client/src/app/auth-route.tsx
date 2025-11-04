import { Navigate, Outlet } from "react-router";

export default function AuthRoute({ USER }: { USER: boolean }) {
  return !USER ? <Outlet /> : <Navigate to="/profile" />;
}
