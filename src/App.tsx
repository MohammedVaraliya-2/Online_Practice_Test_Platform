import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Login from "./components/_auth/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
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
