import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import Profile from "./Profile";

const Login = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  console.log("Current User", user);

  return (
    <>
      <div className="App">
        {isAuthenticated ? <Profile /> : <h3>Please Login</h3>}
        {isAuthenticated ? (
          <Logout />
        ) : (
          <button onClick={() => loginWithRedirect()}> Login </button>
        )}
      </div>
    </>
  );
};

export default Login;
