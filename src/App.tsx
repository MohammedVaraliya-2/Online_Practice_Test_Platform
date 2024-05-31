import { Routes, Route, useNavigate } from "react-router-dom";
import "./globals.css";
import Login from "./components/_auth/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <main className="min-h-screen bg-dark-1">
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
