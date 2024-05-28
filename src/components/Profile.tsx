import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
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
