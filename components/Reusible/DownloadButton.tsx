import React from "react";
import { twMerge } from "tailwind-merge";

const DownloadButton = ({
  file,
  children,
  className,
}: {
  file: string;
  children: string;
  className?: string;
}) => {
  return (
    <a
      href={`/files/${file}`}
      download={file}
      className={twMerge(
        "text-xs xl:text-base font-normal text-[#100f0d] tracking-wide leading-tight",
        className,
      )}>
      {children}
    </a>
  );
};

export default DownloadButton;
