import { useAuth0 } from "@auth0/auth0-react";
import "./globals.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-1">
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
