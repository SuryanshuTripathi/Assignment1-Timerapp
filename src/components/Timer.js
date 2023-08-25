import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import the CSS file for styling

function Timer() {
  const [mainTimer, setMainTimer] = useState(25 * 60); // 25 minutes in seconds
  const [breakTimer, setBreakTimer] = useState(5 * 60); // 5 minutes 
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (isBreak) {
          if (breakTimer > 0) {
            setBreakTimer(prevBreakTimer => prevBreakTimer - 1);
          } else {
            setIsBreak(false);
            setMainTimer(25 * 60); // Reset
          }
        } else {
          if (mainTimer > 0) {
            setMainTimer(prevMainTimer => prevMainTimer - 1);
          } else {
            setIsBreak(true);
            setBreakTimer(5 * 60); // Start break
          }
        }
      }, 1000); // Update 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, mainTimer, breakTimer, isBreak]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setMainTimer(25 * 60);
    setBreakTimer(5 * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h1>{isBreak ? 'Break Time' : 'Focus Time'}</h1>
      <div className="time-display">
        <p>{formatTime(isBreak ? breakTimer : mainTimer)}</p>
      </div>
      <div className="buttons">
        <div className="button-container">
          {isRunning ? (
            <button onClick={pauseTimer}>Pause</button>
          ) : (
            <button onClick={startTimer}>Start</button>
          )}
        </div>
        <div className="button-container">
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;