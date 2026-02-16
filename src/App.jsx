import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard"
import Profile from "./pages/profile/Profile";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import { useEffect } from "react";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Main Layout Wrapper */}
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<User />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
