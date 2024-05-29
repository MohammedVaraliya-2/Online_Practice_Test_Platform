import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-1">
        Loading...
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center bg-dark-2 p-6 rounded-lg shadow-lg">
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold">{user?.name}</h2>
        <p className="text-light-4">{user?.email}</p>
      </div>
    )
  );
};

export default Profile;
