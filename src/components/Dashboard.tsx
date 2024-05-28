import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import Logout from "./_auth/Logout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  const [startQuiz, setStartQuiz] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (startQuiz) {
    return <Quiz />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-1">
      <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">
          Personalized Dashboard of {user?.nickname}
        </h1>
        <button
          onClick={() => setStartQuiz(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Start Quiz
        </button>
        <Logout />
      </div>
    </div>
  );
};

export default Dashboard;
