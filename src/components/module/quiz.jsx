import React, { useState, useEffect } from "react";
import { QuizData1 } from "./quizdata";
import QuizResult from "./quizresult";

const QuizData = QuizData1.filter((q) => q.module === "1");

function shuffleArray(array) {
  // Shuffle and return only the first 10 questions
  return array.sort(() => Math.random() - 0.5).slice(0, 10);
}

function Quiz() {
  const [shuffledQuizData, setShuffledQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const shuffledData = shuffleArray([...QuizData]); // Shuffle and get only 10 questions
    setShuffledQuizData(shuffledData);
  }, []);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < shuffledQuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (
      shuffledQuizData[currentQuestion].options[clickedOption] ===
      shuffledQuizData[currentQuestion].answer
    ) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(null);
    setScore(0);
    setShuffledQuizData(shuffleArray([...QuizData])); // Shuffle and retrieve 10 new random questions
  };

  return (
    <div>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={shuffledQuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {shuffledQuizData[currentQuestion]?.question}
              </span>
            </div>
            <div className="option-container">
              {shuffledQuizData[currentQuestion]?.options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === i ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
