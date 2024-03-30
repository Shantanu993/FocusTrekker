import Image from "next/image";
import { Inter } from "next/font/google";
import PomodoroTimer from "@/components/PomodoroTimer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <PomodoroTimer />
    </div>
  );
}
