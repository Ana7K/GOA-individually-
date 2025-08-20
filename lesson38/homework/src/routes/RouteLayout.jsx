import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import Order from "../pages/Order";
import Products from "../pages/Products";
import SalesReport from "../pages/SalesReport";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import SignOut from "../pages/SignOut";

export default function RouteLayout() {
  return (
    <Routes>
      <Route path="/" Component={<Dashboard />} />
      <Route path="/leaderboard" Component={<Leaderboard />} />
      <Route path="/order" Component={<Order />} />
      <Route path="/products" Component={<Products />} />
      <Route path="/sales-report" Component={<SalesReport />} />
      <Route path="/messages" Component={<Messages />} />
      <Route path="/settings" Component={<Settings />} />
      <Route path="/signout" Component={<SignOut />} />
    </Routes>
  );
}
