import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const StaticText = ({
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={twMerge(
        "text-xs font-light text-[#100f0d] tracking-wide leading-tight",
        className,
      )}>
      {children}
    </p>
  );
};
export default StaticText;
