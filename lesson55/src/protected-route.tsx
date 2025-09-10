import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute({ USER }: { USER: boolean }) {
  return USER ? <Outlet /> : <Navigate to="/dashboard" />;
}
