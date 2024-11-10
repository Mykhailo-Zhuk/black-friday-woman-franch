"use client";

import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface HiddenTextProps {
  text: string;
  className: string;
  maxRows?: number;
}
const HiddenText = ({ text, className, maxRows = 3 }: HiddenTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const getLineClampClass = () => {
    switch (maxRows) {
      case 3:
        return "line-clamp-3";
      case 5:
        return "line-clamp-5";
      default:
        return "line-clamp-3";
    }
  };

  useEffect(() => {
    if (textRef.current) {
      const textHeight = textRef.current.offsetHeight;
      setIsOverflowing(textHeight > 45);
      console.log(textHeight);
    }
  }, [text]);

  return (
    <div className={twMerge("max-w-lg mx-auto", className)}>
      <p
        ref={textRef}
        className={twMerge(
          "mt-2 transition-all duration-300 ease-in-out text-xs font-light text-[#100f0d] tracking-wide leading-tight",
          isExpanded ? "line-clamp-none" : getLineClampClass(),
        )}>
        {text}
      </p>

      {isOverflowing && (
        <button
          onClick={toggleExpanded}
          className="mt-2 text-blue-500 hover:text-blue-700 font-medium text-xs">
          {isExpanded ? "Згорнути" : "Показати більше"}
        </button>
      )}
    </div>
  );
};
export default HiddenText;
