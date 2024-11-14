"use client";

import React from "react";
import { ActionButton, BackgroundImage, StaticHeader } from "../index";
import { bottomRedStrap, heroBackgroundPc, heroBg, womenHero } from "@/public/images/index";
import { blackFridayIcon, blackFridaySale, heroBoxLeft, heroBoxRight } from "@/public/icons";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section>
      <div className="relative container mx-auto">
        <div className="relative pt-10 text-white min-h-[60vh] overflow-hidden">
          <div className="max-w-full md:max-w-xs mt-16 md:mt-6 px-5 md:pl-14">
            <Image
              src={blackFridayIcon.src}
              alt="Black friday icon"
              width={blackFridayIcon.width}
              height={blackFridayIcon.height}
              className="object-contain w-full"
            />
          </div>
          {!isTablet && (
            <div className="relative top-16 base:top-20">
              <Image
                src={womenHero.src}
                alt="Women together"
                width={womenHero.width}
                height={womenHero.height}
                className="relative object-contain w-full z-[11]"
              />
              <Image
                src={blackFridaySale.src}
                alt="black friday sale strap"
                width={blackFridaySale.width}
                height={blackFridaySale.height}
                className="object-contain w-full absolute top-0 z-10"
              />
            </div>
          )}
          <div className="relative flex flex-col justify-center items-center md:items-start h-1/3 md:pb-20 z-20 md:max-w-md">
            <StaticHeader className="text-center base:text-sm md:text-left text-white font-semibold mt-16 md:mt-6 relative z-20 px-5 md:pl-14">
              ваша успішна кар&apos;єра розпочнеться у цю пятницю!
            </StaticHeader>
            <StaticHeader className="text-center md:text-left md:text-base font-normal text-white relative z-20 mt-4 px-5 md:pl-14 ">
              спеціальні ціни на найкращі франшизи від{" "}
              <span className="font-bold">woman franch</span>
            </StaticHeader>
            <ActionButton
              url="#black-form"
              action="КУПИТИ ФРАНШИЗУ"
              internal
              isTransparent
              className="border-2 border-red-600 px-3 py-1"
              wrapper="mt-4 md:pl-14"
            />
            {!isTablet && (
              <div className="absolute bottom-0 left-0 right-0 max-h-60">
                <Image
                  src={bottomRedStrap.src}
                  alt="red background"
                  width={bottomRedStrap.width}
                  height={bottomRedStrap.height}
                  className="object-contain w-full"
                />
              </div>
            )}
            {!isTablet && (
              <Image
                src={heroBoxRight.src}
                alt="Black friday box"
                width={75}
                height={70}
                className="object-contain absolute -top-10 right-0 z-10"
              />
            )}
            {!isTablet && (
              <Image
                src={heroBoxLeft.src}
                alt="Black friday box"
                width={75}
                height={70}
                className="object-contain absolute bottom-0 left-0 z-10"
              />
            )}
          </div>
        </div>
        {!isTablet && <BackgroundImage backgroundImage={heroBg} />}
        {isTablet && (
          <BackgroundImage backgroundImage={heroBackgroundPc} imageClassName="object-bottom" />
        )}
      </div>
    </section>
  );
};

export default Hero;
