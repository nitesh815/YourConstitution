import React, { useState } from 'react';
import './ScenarioGame.css'; // Add external styling

const ScenarioGame = ({ scenarios }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [isOptionLocked, setIsOptionLocked] = useState(false);
  const [score, setScore] = useState(0); // New state to track the score
  const [gameFinished, setGameFinished] = useState(false); // New state to track if the game is finished

  // Handle user's decision (whether it is correct or not)
  const handleDecision = (choice) => {
    if (isOptionLocked) return; // Prevent selecting another option if already locked

    const currentScenario = scenarios[currentScenarioIndex];
    if (choice === currentScenario.correctAnswer) {
      setResult('Correct! 🎉');
      setScore(score + 1); // Increment score for correct answer
    } else {
      setResult(`Incorrect. The correct answer was: "${currentScenario.correctAnswer}".`);
    }
    setIsOptionLocked(true); // Lock the options after selection
  };

  // Go to the next scenario or finish the game
  const nextScenario = () => {
    if (currentScenarioIndex + 1 < scenarios.length) {
      setResult(null);
      setIsOptionLocked(false);
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    } else {
      setGameFinished(true); // Mark the game as finished
    }
  };

  return (
    <div className="scenario-game">
      {gameFinished ? (
        // Show the final score when the game is finished
        <div className="score-container">
          <h2>Game Over!</h2>
          <p>Your final score: {score} out of {scenarios.length}</p>
        </div>
      ) : (
        <>
          <div className="scenario-container">
            <h2>Scenario {currentScenarioIndex + 1}</h2>
            <p>{scenarios[currentScenarioIndex].description}</p>
          </div>

          <div className="options-container">
            {scenarios[currentScenarioIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${isOptionLocked ? 'locked' : ''}`}
                onClick={() => handleDecision(option)}
                disabled={isOptionLocked}
              >
                {option}
              </button>
            ))}
          </div>

          {result && (
            <div className="result-container">
              <p>{result}</p>
              <button className="next-button" onClick={nextScenario}>
                {currentScenarioIndex + 1 === scenarios.length ? 'Finish Game' : 'Next Scenario'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ScenarioGame;
