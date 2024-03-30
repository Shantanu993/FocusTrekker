import Image from "next/image";
import { Inter } from "next/font/google";
import PomodoroTimer from "@/components/PomodoroTimer";
import Settings from "@/components/Settings";
import { useState } from "react";
import SettingsContext from "@/components/SettingsContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <PomodoroTimer />}
      </SettingsContext.Provider>
    </main>
  );
}
