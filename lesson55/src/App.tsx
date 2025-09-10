import { Route, Routes } from "react-router";
import ProtectedAuth from "./protected-auth";
import ProtectedRoute from "./protected-route";

export default function App() {
  const USER = false;
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedAuth USER={USER} />}>
          <Route path="login" element={<div>login</div>}></Route>
          <Route path="register" element={<div>register</div>}></Route>
        </Route>

        <Route path="/" element={<ProtectedRoute USER={USER} />}>
          <Route path="dashboard" element={<div>dashboard</div>}></Route>
          <Route path="profile" element={<div>profile</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
