import ReactSlider from "react-slider";
import styles from "./slider.module.css";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import BackButton from "./BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="text-left w-[30vw] pt-[50px] my-0 mx-auto">
      <label className="text-xl font-semibold">
        Work: {settingsInfo.workMinutes}:00
      </label>
      <ReactSlider
        className={styles.slider}
        thumbClassName={styles.thumb}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label className="text-xl font-semibold">
        Break: {settingsInfo.breakMinutes}:00
      </label>
      <ReactSlider
        className={`${styles.slider} ${styles.yellow}`}
        thumbClassName={styles.thumb}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <label className="text-xl font-semibold">
        Long Break: {settingsInfo.longBreakMinutes}:00
      </label>
      <ReactSlider
        className={`${styles.slider} ${styles.purple}`}
        thumbClassName={styles.thumb}
        trackClassName={"track"}
        value={settingsInfo.longBreakMinutes}
        onChange={(newValue) => settingsInfo.setLongBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="mt-[20px] text-center">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
