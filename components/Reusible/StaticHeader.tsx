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
        "text-[28px] uppercase text-headerColor font-openSansfont-bold leading-tight",
        className,
      )}>
      {children}
    </h1>
  );
};
export default StaticHeader;
