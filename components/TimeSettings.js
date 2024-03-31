import React from "react";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

const TimeSettings = ({ setTime }) => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {/* Pomodoro Button */}
      <button
        className="px-4 py-2 rounded-full bg-blue-500 text-white shadow-lg focus: ring-2 focus:ring-offset-2 focus: ring-blue-500"
        onClick={() => setTime(settingsInfo.workMinutes)}
      >
        Pomodoro
      </button>

      {/* Short Break Button */}
      <button
        className="px-4 py-2 rounded-full bg-yellow-500 text-white shadow-lg focus: ring-2 focus:ring-offset-2 focus: ring-yellow-500"
        onClick={() => setTime(settingsInfo.breakMinutes)}
      >
        Short Break
      </button>

      {/* Long Break Button */}
      <button
        className="px-4 py-2 rounded-full bg-purple-500 text-white shadow-lg focus: ring-2 focus:ring-offset-2 focus: ring-purple-500"
        onClick={() => setTime(settingsInfo.longBreakMinutes)}
      >
        Long Break
      </button>
    </div>
  );
};

export default TimeSettings;
