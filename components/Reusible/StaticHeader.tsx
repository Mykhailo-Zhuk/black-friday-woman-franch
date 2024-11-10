import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const StaticHeader = ({
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={twMerge(
        "text-sm base:text-lg uppercase text-black leading-tight font-light",
        className,
      )}>
      {children}
    </h1>
  );
};
export default StaticHeader;
