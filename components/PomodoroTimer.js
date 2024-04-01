import React, { useContext, useState, useEffect } from "react";
import TimerControls from "./TimerControls";
import TimeSettings from "./TimeSettings";
import HistoryPanel from "./HistoryPanel";
import Notification from "./Notification";
import SettingsButton from "./SettingsButton";
import SettingsContext from "./SettingsContext";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PomodoroTimer = () => {
  const settingsInfo = useContext(SettingsContext);
  const [minutes, setMinutes] = useState(settingsInfo.workMinutes); // Initial minutes
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [history, setHistory] = useState([
    "Sample1: Completed at 19:40:19",
    "Sample2: Completed at 09:25:43",
  ]);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsActive(false);
            setHistory((prevHistory) => [
              ...prevHistory,
              `Completed at ${new Date().toLocaleTimeString()}`,
            ]);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds, minutes]);

  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setIsActive(false);
    setMinutes(settingsInfo.workMinutes);
    setSeconds(0);
  };

  const setTime = (newTime) => {
    setIsActive(false);
    setMinutes(newTime);
    setSeconds(0);
  };

  const progress = ((minutes * 60 + seconds) / (25 * 60)) * 100;

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700">
        Pomodoro Timer
      </h1>
      {/* <div className="text-7xl font-extrabold text-center mb-8 text-blue-700">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div> */}
      <TimeSettings setTime={setTime} />
      <CircularProgressbar
        value={progress}
        text={`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}
      />
      <TimerControls toggle={toggle} reset={reset} isActive={isActive} />
      <div
        style={{ marginTop: "20px" }}
        className="w-[40%] mx-auto flex justify-center space-x-4 mt-6 mb-6"
      >
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
      <HistoryPanel history={history} />
      <Notification
        showNotification={!isActive && minutes === 0 && seconds === 0}
      />
    </div>
  );
};

export default PomodoroTimer;
