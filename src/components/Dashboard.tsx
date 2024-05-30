import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Quiz from "./Quiz/Quiz";

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-dark-1">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        {startQuiz ? (
          <Quiz />
        ) : (
          <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-white">
              Welcome to the Quiz!
            </h1>
            <button
              onClick={() => setStartQuiz(true)}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Start Quiz
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
