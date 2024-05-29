import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Header: React.FC = () => {
  const { user, logout } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <header className="bg-dark-2 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-white">User Dashboard</h1>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition"
        >
          {user?.nickname}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <ul className="py-1">
              <li>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => alert("View Profile")}
                >
                  View your Profile
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
