import React from "react";
import Image, { StaticImageData } from "next/image";

const BackgroundImage = ({ backgroundImage }: { backgroundImage: StaticImageData }) => {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center items-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt={backgroundImage.src}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
};

export default BackgroundImage;
