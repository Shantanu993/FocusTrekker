// Import useState hook from react
import React, { useState } from "react";

const ChangeTimeSettings = ({
  setPomodoroTime,
  setShortBreakTime,
  setLongBreakTime,
}) => {
  const [pomodoroInput, setPomodoroInput] = useState(0);
  const [shortBreakInput, setShortBreakInput] = useState(0);
  const [longBreakInput, setLongBreakInput] = useState(0);

  const handlePomodoroChange = () => {
    if (pomodoroInput !== "") {
      setPomodoroTime(parseInt(pomodoroInput, 10));
      setPomodoroInput(0);
    }
  };

  const handleShortBreakChange = () => {
    if (shortBreakInput !== "") {
      setShortBreakTime(parseInt(shortBreakInput, 10));
      setShortBreakInput(0);
    }
  };

  const handleLongBreakChange = () => {
    if (longBreakInput !== "") {
      setLongBreakTime(parseInt(longBreakInput, 10));
      setLongBreakInput(0);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Change Timer Settings</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label className="mr-2">Pomodoro Time (minutes):</label>
          <input
            type="number"
            min="1"
            max="60"
            value={pomodoroInput}
            onChange={(e) => setPomodoroInput(e.target.value)}
            className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            onClick={handlePomodoroChange}
          >
            Set
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Short Break Time (minutes):</label>
          <input
            type="number"
            min="1"
            max="60"
            value={shortBreakInput}
            onChange={(e) => setShortBreakInput(e.target.value)}
            className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            onClick={handleShortBreakChange}
          >
            Set
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Long Break Time (minutes):</label>
          <input
            type="number"
            min="1"
            max="60"
            value={longBreakInput}
            onChange={(e) => setLongBreakInput(e.target.value)}
            className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            onClick={handleLongBreakChange}
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeTimeSettings;
