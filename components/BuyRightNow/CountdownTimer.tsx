"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const targetDate = new Date("2024-11-29T00:00:00Z").getTime();

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-1 justify-center mt-24">
      <div className="relative left-2 z-10 flex justify-center items-center px-2 py-2 rounded-br-xl rounded-tl-xl bg-gradient-to-r from-[#f70202] to-[#9e1b16]">
        <TimeBox label="Днів" value={timeLeft.days} white />
      </div>
      <div className="relative right-2 flex space-x-1 justify-center shadow-xl bg-white rounded-br-xl py-2 pr-2 pl-4">
        <TimeBox label="Год" value={timeLeft.hours} />
        <span className="text-[#464648] font-bold text-2xl mt-0.5">:</span>
        <TimeBox label="Хв" value={timeLeft.minutes} />
        <span className="text-[#464648] font-bold text-2xl mt-0.5">:</span>
        <TimeBox label="Сек" value={timeLeft.seconds} />
      </div>
    </div>
  );
};

const TimeBox: React.FC<{ label: string; white?: boolean; value: number }> = ({
  white,
  label,
  value,
}) => (
  <div className="flex flex-col items-center min-w-12">
    <span className={twMerge("text-4xl font-bold", white ? "text-white" : "text-red-600")}>
      {value}
    </span>
    <span className={twMerge("text-[8px] uppercase", white ? "text-white" : "text-black")}>
      {label}
    </span>
  </div>
);

export default CountdownTimer;
