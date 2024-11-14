"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const targetDate = new Date("2024-11-29T00:00:00Z").getTime();

const CountdownTimer = ({
  className,
  navigation,
}: {
  className?: string;
  navigation?: boolean;
}) => {
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
    <div className={twMerge("flex space-x-1 justify-center", className)}>
      <div
        className={twMerge(
          "relative left-2 z-10 flex justify-center items-center px-2 py-2 bg-gradient-to-r from-[#f70202] to-[#9e1b16]",
          navigation
            ? "md:px-1 md:py-0 md:rounded-br-sm md:rounded-tl-sm"
            : "rounded-br-xl rounded-tl-xl md:px-1 md:py-1",
        )}>
        <TimeBox label="Днів" value={timeLeft.days} white navigation={navigation} />
      </div>
      <div
        className={twMerge(
          "relative right-2 flex space-x-1 justify-center shadow-xl bg-white rounded-br-xl py-2 pr-2 pl-4 md:pr-1",
          navigation ? "md:py-0 md:pl-4" : "md:py-1 md:pl-2",
        )}>
        <TimeBox label="Год" value={timeLeft.hours} navigation={navigation} />
        <span
          className={twMerge(
            "text-[#464648] font-bold text-2xl",
            navigation ? "text-sm" : "md:text-xl mt-0.5",
          )}>
          :
        </span>
        <TimeBox label="Хв" value={timeLeft.minutes} navigation={navigation} />
        <span
          className={twMerge(
            "text-[#464648] font-bold text-2xl",
            navigation ? "text-sm" : "md:text-xl mt-0.5",
          )}>
          :
        </span>
        <TimeBox label="Сек" value={timeLeft.seconds} navigation={navigation} />
      </div>
    </div>
  );
};

const TimeBox: React.FC<{
  label: string;
  white?: boolean;
  value: number;
  navigation?: boolean;
}> = ({ white, label, value, navigation }) => (
  <div
    className={twMerge(
      "flex flex-col items-center min-w-12",
      navigation ? "md:min-w-5" : "md:min-w-10",
    )}>
    <span
      className={twMerge(
        "text-4xl font-bold ",
        navigation ? "md:text-sm" : "md:text-2xl",
        white ? "text-white" : "text-red-600",
      )}>
      {value}
    </span>
    <span
      className={twMerge(
        "uppercase",
        navigation ? "text-[6px]" : "text-[8px] ",
        white ? "text-white" : "text-black",
      )}>
      {label}
    </span>
  </div>
);

export default CountdownTimer;
