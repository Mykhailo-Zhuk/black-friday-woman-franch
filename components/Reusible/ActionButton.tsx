"use client";

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ActionButton = ({
  url,
  action,
  className,
  wrapper,
  isTransparent,
  internal = false,
}: {
  internal?: boolean;
  url: string;
  action: string;
  isTransparent?: boolean;
  className?: string;
  wrapper?: string;
}) => {
  return (
    <div className={twMerge("flex justify-center mt-6", wrapper)}>
      <Link
        href={url}
        target={internal ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className={twMerge(
          "inline-block text-center max-w-fit px-5 py-2 opacity-90 text-white text-[10px] font-semibold rounded-lg shadow-2xl transition duration-150 ease-in-out transform hover:opacity-100 hover:scale-95 active:scale-90 focus:scale-95",
          isTransparent ? "bg-transparent" : "bg-gradient-to-r from-[#f70202] to-[#9e1b16]",
          className,
        )}>
        {action}
      </Link>
    </div>
  );
};

export default ActionButton;
