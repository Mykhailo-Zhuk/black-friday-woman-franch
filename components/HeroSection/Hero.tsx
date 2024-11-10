import React from "react";
import { BackgroundImage, StaticHeader } from "../index";
import { bottomRedStrap, heroBg, womenHero } from "@/public/images/index";
import { blackFridayIcon, blackFridaySale, heroBoxLeft, heroBoxRight } from "@/public/icons";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="relative container mx-auto">
        <div className="relative pt-10 text-white overflow-hidden">
          <div className="mt-16 px-5">
            <Image
              src={blackFridayIcon}
              alt={blackFridayIcon.src}
              width={blackFridayIcon.width}
              height={blackFridayIcon.height}
              className="object-contain w-full"
            />
          </div>
          <div className="relative top-16 base:top-20">
            <Image
              src={womenHero}
              alt={womenHero.src}
              width={womenHero.width}
              height={womenHero.height}
              className="relative object-contain w-full z-[11]"
            />
            <Image
              src={blackFridaySale}
              alt={blackFridaySale.src}
              width={blackFridaySale.width}
              height={blackFridaySale.height}
              className="object-contain w-full absolute top-0 z-10"
            />
          </div>
          <div className="relative flex flex-col justify-center items-center h-1/3 pb-10 z-20">
            <StaticHeader className="text-center text-white font-semibold mt-16 relative z-20 px-5">
              ваша успішна кар&apos;єра розпочнеться у цю пятницю!
            </StaticHeader>
            <StaticHeader className="text-center text-white relative z-20 mt-4 px-5">
              спеціальні ціни на найкращі франшизи від{" "}
              <span className="font-bold">woman franch</span>
            </StaticHeader>
            <div className="absolute bottom-0 left-0 right-0 max-h-60">
              <Image
                src={bottomRedStrap}
                alt={bottomRedStrap.src}
                width={bottomRedStrap.width}
                height={bottomRedStrap.height}
                className="object-contain w-full"
              />
            </div>
            <Image
              src={heroBoxRight}
              alt={heroBoxRight.src}
              width={75}
              height={70}
              className="object-contain absolute -top-10 right-0 z-10"
            />
            <Image
              src={heroBoxLeft}
              alt={heroBoxLeft.src}
              width={75}
              height={70}
              className="object-contain absolute bottom-0 left-0 z-10"
            />
          </div>
        </div>
        <BackgroundImage backgroundImage={heroBg} />
      </div>
    </section>
  );
};

export default Hero;
