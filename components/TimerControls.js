import React from "react";

const TimerControls = ({ toggle, reset, isActive }) => (
  <div className="flex justify-center space-x-4 mt-6">
    <button
      className={`px-6 py-2 rounded-full text-white ${
        isActive ? "bg-red-600" : "bg-green-600"
      } shadow-lg focus: ring-2 focus: ring-offset-2 focus: ring-green-500`}
      onClick={toggle}
    >
      {isActive ? "Pause" : "Start"}
    </button>
    <button
      className="px-6 py-2 rounded-full bg-gray-600 text-white shadow-lg focus: ring-2 focus: ring-offset-2 focus: ring-gray-500"
      onClick={reset}
    >
      Reset
    </button>
  </div>
);

export default TimerControls;
