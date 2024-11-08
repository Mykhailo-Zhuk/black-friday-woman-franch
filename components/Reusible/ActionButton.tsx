"use client";

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ActionButton = ({
  url,
  action,
  className,
  wrapper,
  internal = false,
}: {
  internal?: boolean;
  url: string;
  action: string;
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
          "inline-block text-center max-w-fit px-5 py-2 opacity-90 bg-gradient-to-r from-[#f70202] to-[#9e1b16] text-white text-sm font-semibold rounded-lg shadow-2xl transition duration-150 ease-in-out transform hover:opacity-100 hover:scale-95 active:scale-90 focus:scale-95",
          className,
        )}>
        {action}
      </Link>
    </div>
  );
};

export default ActionButton;
