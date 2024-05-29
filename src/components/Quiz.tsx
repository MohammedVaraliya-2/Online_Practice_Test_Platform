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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [shownQuestions, setShownQuestions] = useState<Set<number>>(new Set());
  const [questionCount, setQuestionCount] = useState<number>(0);

  const loadQuestions = (difficulty: string) => {
    setLoading(true);
    fetch(`/assets/MCQ/${difficulty}.json`)
      .then((response) => response.json())
      .then((data: Question[]) => {
        setAllQuestions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    loadQuestions("easy");
  }, []);

  const getNextQuestion = (): Question | null => {
    const availableQuestions = allQuestions.filter(
      (_, index) => !shownQuestions.has(index)
    );

    if (availableQuestions.length === 0) {
      return null;
    }

    const nextQuestionIndex = Math.floor(
      Math.random() * availableQuestions.length
    );
    const nextQuestion = availableQuestions[nextQuestionIndex];
    setShownQuestions(
      new Set([
        ...Array.from(shownQuestions),
        allQuestions.indexOf(nextQuestion),
      ])
    );

    return nextQuestion;
  };

  useEffect(() => {
    if (allQuestions.length > 0) {
      const nextQuestion = getNextQuestion();
      if (nextQuestion) {
        setQuestions((prevQuestions) => [...prevQuestions, nextQuestion]);
      }
    }
  }, [allQuestions]);

  const handleAnswer = (): void => {
    if (selectedOption === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore(score + 1);
      if (difficulty === "easy") {
        setDifficulty("medium");
        loadQuestions("medium");
      } else if (difficulty === "medium") {
        setDifficulty("hard");
        loadQuestions("hard");
      }
    } else {
      if (difficulty === "medium") {
        setDifficulty("easy");
        loadQuestions("easy");
      } else if (difficulty === "hard") {
        setDifficulty("medium");
        loadQuestions("medium");
      }
    }

    setSelectedOption(null);

    if (questionCount < 19) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionCount(questionCount + 1);
    } else {
      setCompleted(true);
    }
  };

  useEffect(() => {
    if (completed) return;

    const nextQuestion = getNextQuestion();
    if (nextQuestion) {
      setQuestions((prevQuestions) => [...prevQuestions, nextQuestion]);
    }
  }, [difficulty, questionCount, completed]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-1">
        Loading...
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-1">
        <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
          <p className="text-xl mb-4">Your score: {score} / 20</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-1">
      <div className="bg-dark-2 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">
          {currentQuestion &&
            `${currentQuestionIndex + 1}. ${currentQuestion.question}`}
        </h2>
        <ul className="w-full mb-4">
          {currentQuestion &&
            currentQuestion.options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    className="form-radio text-primary-500"
                  />
                  <span className="ml-2 text-white">{option}</span>
                </label>
              </li>
            ))}
        </ul>
        <button
          onClick={handleAnswer}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
