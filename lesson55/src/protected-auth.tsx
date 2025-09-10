import { Navigate, Outlet } from "react-router";

export default function ProtectedAuth({ USER }: { USER: boolean }) {
  return !USER ? <Outlet /> : <Navigate to="/dashboard" />;
}
