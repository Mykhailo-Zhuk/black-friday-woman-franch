"use client";

import React from "react";
import { ActionButton, StaticHeader, StaticText } from "../index";
import Image from "next/image";
import { blackFridayIcon, blackFridayStraight } from "@/public/icons/index";
import { useMediaQuery } from "react-responsive";

const SignForm = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section>
      <div className="container mx-auto bg-[#662421]">
        <div className="relative px-5 py-10 md:px-14">
          <StaticHeader className="text-white">ЗАПОВНІТЬ ФОРМУ ПРОСТО ЗАРАЗ</StaticHeader>
          <StaticText className="mt-6 max-w-md text-white">
            Кнопка для онлайн-консультації в реальному часі — спеціальний чат-бот або навіть
            можливість забронювати дзвінок з представником компанії.
          </StaticText>
          <ActionButton url="#black-form" action="ОТРИМАТИ КОНСУЛЬТАЦІЮ" className="mt-8" />
          <div className="relative mt-6 md:max-w-sm md:mx-auto z-10">
            <Image
              src={blackFridayIcon.src}
              alt="Black friday icon"
              width={blackFridayIcon.width}
              height={blackFridayIcon.height}
              className="object-contain w-full"
            />
          </div>
          <div className="absolute bottom-5 z-0 md:-rotate-[24deg]">
            <Image
              src={blackFridayStraight.src}
              alt="Straight black friday box"
              width={isTablet ? 76 : 40}
              height={isTablet ? 76 : 40}
              className="object-contain"
            />
          </div>
          <div className="absolute max-md:top-[40%] max-md:-translate-y-[40%] md:top-5 md:-rotate-[24deg] right-7 z-0">
            <Image
              src={blackFridayStraight.src}
              alt="Straight black friday box"
              width={isTablet ? 76 : 40}
              height={isTablet ? 76 : 40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignForm;
