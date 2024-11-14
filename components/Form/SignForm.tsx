"use client";

import React from "react";
import { ActionButton, BackgroundImage, StaticHeader, StaticText } from "../index";
import Image from "next/image";
import {
  blackFridayIcon,
  blackFridayStraight,
  consultant,
  transparentBlackBox,
} from "@/public/icons/index";
import { useMediaQuery } from "react-responsive";
import { signFormBackground, signFormBackgroundPc } from "@/public/images";

const SignForm = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section>
      <div className="container mx-auto">
        <div className="relative px-5 py-10 md:px-14">
          <StaticHeader className="text-red-900 text-2xl">
            ЗАПОВНІТЬ ФОРМУ ПРОСТО ЗАРАЗ
          </StaticHeader>
          <StaticText className="mt-6 max-w-xs text-white text-balance">
            Кнопка для онлайн-консультації в реальному часі — спеціальний чат-бот або навіть
            можливість забронювати дзвінок з представником компанії.
          </StaticText>
          <ActionButton url="#black-form" action="ОТРИМАТИ КОНСУЛЬТАЦІЮ" wrapper="justify-start" />
          <div className="relative mt-6 mb-20 md:mb-6 max-w-[200px] md:max-w-xs md:mx-auto z-20">
            <Image
              src={blackFridayIcon.src}
              alt="Black friday icon"
              width={blackFridayIcon.width}
              height={blackFridayIcon.height}
              className="object-contain w-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 max-w-[260px] md:max-w-sm z-10">
            <Image
              src={consultant.src}
              alt="Consultant icon"
              width={consultant.width}
              height={consultant.height}
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-0 bottom-5 z-0 rotate-[12deg]">
            <Image
              src={transparentBlackBox.src}
              alt="Straight black friday box"
              width={isTablet ? 144 : 96}
              height={isTablet ? 144 : 96}
              className="object-contain"
            />
          </div>
          <div className="absolute max-md:top-[20%] max-md:-translate-y-[20%] md:top-5 rotate-[24deg] right-5 z-0">
            <Image
              src={blackFridayStraight.src}
              alt="Straight black friday box"
              width={isTablet ? 96 : 60}
              height={isTablet ? 96 : 60}
              className="object-contain"
            />
          </div>
          {!isTablet && <BackgroundImage backgroundImage={signFormBackground} />}
          {isTablet && <BackgroundImage backgroundImage={signFormBackgroundPc} />}
        </div>
      </div>
    </section>
  );
};

export default SignForm;
