import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Login from "./components/_auth/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-dark-1">
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
