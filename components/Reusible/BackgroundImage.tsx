import React from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

const BackgroundImage = ({
  backgroundImage,
  imageClassName,
  aclipse = false,
}: {
  backgroundImage: StaticImageData;
  imageClassName?: string;
  aclipse?: boolean;
}) => {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center items-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt={backgroundImage.src}
        className={twMerge("h-full w-full object-cover", imageClassName)}
      />
      {aclipse ? <div className="absolute inset-0 bg-black/70" /> : null}
    </div>
  );
};

export default BackgroundImage;
