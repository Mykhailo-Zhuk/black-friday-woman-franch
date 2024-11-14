import React from "react";
import Image from "next/image";
import { logo, logoWhite } from "@/public/icons/index";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LogoProps = { width?: number; height?: number; white?: boolean; className?: string };

const Logo = ({ width, height, white, className }: LogoProps) => {
  return (
    <div className={twMerge("max-w-24", className)}>
      <Link href="/">
        <Image
          src={white ? logoWhite.src : logo.src}
          alt="Logo of the site"
          width={width ?? white ? logoWhite.width : logo.width}
          height={height ?? white ? logoWhite.height : logo.height}
          priority
          className="w-full h-full object-contain cursor-pointer"
        />
      </Link>
    </div>
  );
};
export default Logo;
