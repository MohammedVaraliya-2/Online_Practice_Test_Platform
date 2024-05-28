import React, { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  correct_answer: string;
  difficulty: string;
  tags: string[];
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/assets/MCQ/questions.json")
      .then((response) => response.json())
      .then((data: Question[]) => {
        setQuestions(data.filter((q) => q.difficulty === difficulty));
        setLoading(false);
      })
      .catch(() => setLoading(false)); // handle potential errors
  }, [difficulty]);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 1);
      setDifficulty("medium"); // Adjust difficulty based on performance
    } else {
      setDifficulty("easy");
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const generateSuggestions = (
    score: number,
    totalQuestions: number
  ): string[] => {
    const suggestions: string[] = [];
    const percentage = (score / totalQuestions) * 100;

    if (percentage < 50) {
      suggestions.push("Review basic arithmetic concepts.");
    } else if (percentage < 70) {
      suggestions.push("Practice more algebra questions.");
    } else {
      suggestions.push("Great job! Try more challenging problems.");
    }

    return suggestions;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-1">
        Loading...
      </div>
    );
  }

  if (completed) {
    const suggestions = generateSuggestions(score, questions.length);
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-1">
        <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
          <p className="text-xl mb-4">
            Your score: {score} / {questions.length}
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Suggestions for Improvement:
          </h3>
          <ul className="list-disc list-inside">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="mb-2">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-1">
        No questions available.
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-1">
      <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
        <ul className="w-full">
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded mb-2 cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
