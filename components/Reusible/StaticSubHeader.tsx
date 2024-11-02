import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const StaticSubHeader = ({
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={twMerge("text-lg text-headerColor font-semibold leading-tight", className)}>
      {children}
    </h3>
  );
};
export default StaticSubHeader;
