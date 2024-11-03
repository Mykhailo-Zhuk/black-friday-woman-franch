"use client";

import { heroBox } from "@/public/icons";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    <div className="flex justify-center items-center bg-gradient-to-b from-white to-pink-100 p-2">
      <div className="text-center p-2 shadow-xl bg-white/80 backdrop-blur-md border rounded-2xl w-[80%]">
        <div className="w-[80%] mx-auto">
          <Image
            src={heroBox}
            alt={heroBox.src}
            width={heroBox.width}
            height={heroBox.height}
            className="object-contain"
          />
        </div>
        <div className="flex space-x-2 justify-center">
          <TimeBox label="Днів" value={timeLeft.days} />
          <TimeBox label="Годин" value={timeLeft.hours} />
          <TimeBox label="Хвилин" value={timeLeft.minutes} />
          <TimeBox label="Секунд" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
};

const TimeBox: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex flex-col items-center px-2 py-1 border rounded-lg">
    <span className="text-3xl font-semibold text-pink-600">{value}</span>
    <span className="text-xs text-gray-600">{label}</span>
  </div>
);

export default CountdownTimer;
