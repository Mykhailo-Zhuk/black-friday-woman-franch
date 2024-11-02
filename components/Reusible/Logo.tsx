import React from "react";
import Image from "next/image";
import { logo, logoLight } from "@/public/icons/index";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LogoProps = { width?: number; height?: number; light?: boolean; className?: string };

const Logo = ({ width, height, light, className }: LogoProps) => {
  return (
    <div className={twMerge("max-w-44 sm:max-w-60", className)}>
      <Link href="/">
        <Image
          src={light ? logoLight : logo}
          alt="Logo of the site"
          width={width ?? logoLight.width}
          height={height ?? logoLight.height}
          priority
          className="w-full h-full object-contain cursor-pointer"
        />
      </Link>
    </div>
  );
};
export default Logo;
