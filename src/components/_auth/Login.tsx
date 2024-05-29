import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";
import { useEffect } from "react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-1">
      <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
        {isAuthenticated ? (
          <Profile />
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-4">Please Login</h3>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
