import React from "react";

interface Question {
  question: string;
  options: string[];
  correct_answer: string;
  difficulty: string;
  tags: string[];
  userAnswer?: string | null;
  userScore?: number | null;
}

interface QuizCompletedProps {
  questions: Question[];
  score: number;
}

const QuizCompleted: React.FC<QuizCompletedProps> = ({ questions, score }) => {
  return (
    <div className="min-h-0 flex items-center justify-center bg-dark-1">
      <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
        <p className="text-xl mb-4">Your score: {score} / 20</p>
        <ul className="w-full">
          {questions.map((question, index) => (
            <li key={index} className="mb-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {index + 1}. {question.question}
                </h3>
              </div>
              <div className="mb-2 ml-6">
                <p className="text-sm">
                  <span className="font-bold text-green-500">
                    Your Answer:{" "}
                  </span>
                  <span className="text-white">{question.userAnswer}</span>
                </p>
                <p className="text-sm">
                  <span className="font-bold text-yellow-500">
                    Correct Answer:{" "}
                  </span>
                  <span className="text-white">{question.correct_answer}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizCompleted;
