import React from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

const BackgroundImage = ({
  backgroundImage,
  imageClassName,
  aclipse = false,
  red = false,
}: {
  backgroundImage: StaticImageData;
  imageClassName?: string;
  aclipse?: boolean;
  red?: boolean;
}) => {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center items-center overflow-hidden">
      <Image
        src={backgroundImage.src}
        alt="background item"
        width={backgroundImage.width}
        height={backgroundImage.height}
        className={twMerge("h-full w-full object-cover", imageClassName)}
      />
      {aclipse ? <div className="absolute inset-0 bg-black/70" /> : null}
      {red ? <div className="absolute inset-0 bg-[#662421]/70" /> : null}
    </div>
  );
};

export default BackgroundImage;
