import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ProtectedRoute from "./app/protected-route";
import AuthRoute from "./app/auth-route";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/profile" Component={Home}></Route>
        </Route>
      </Routes>
    </div>
  );
}
