import { createBrowserRouter, Navigate, Outlet } from "react-router";

const user = null;
export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      return user ? <Outlet /> : <Navigate to={"/login"} />;
    },
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: "/racminda",
        element: <div>isev rac minda</div>
      },
    ],
  },
  {
    path: "/login",
    Component: () => {
      return !user ? <div>login</div> : <Navigate to={"/"} />;
    },
  },
  {
    path: "/register",
    Component: () => {
      return !user ? <div>register</div> : <Navigate to={"/"} />;
    },
  },
]);
