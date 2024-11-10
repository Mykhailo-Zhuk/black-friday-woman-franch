import React from "react";
import { ActionButton, StaticHeader, StaticText } from "../index";
import Image from "next/image";
import { blackFridayIcon, blackFridayStraight } from "@/public/icons/index";

const SignForm = () => {
  return (
    <section>
      <div className="container mx-auto bg-[#662421]">
        <div className="relative px-5 py-10">
          <StaticHeader className="text-white">ЗАПОВНІТЬ ФОРМУ ПРОСТО ЗАРАЗ</StaticHeader>
          <StaticText className="mt-6 max-w-md text-white">
            Кнопка для онлайн-консультації в реальному часі — спеціальний чат-бот або навіть
            можливість забронювати дзвінок з представником компанії.
          </StaticText>
          <ActionButton url="#black-form" action="ОТРИМАТИ КОНСУЛЬТАЦІЮ" className="mt-8" />
          <div className="mt-6">
            <Image
              src={blackFridayIcon}
              alt={blackFridayIcon.src}
              width={blackFridayIcon.width}
              height={blackFridayIcon.height}
              className="object-contain w-full"
            />
          </div>
          <div className="relative -bottom-5">
            <Image
              src={blackFridayStraight}
              alt={blackFridayStraight.src}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="absolute top-[40%] -translate-y-[40%] right-7">
            <Image
              src={blackFridayStraight}
              alt={blackFridayStraight.src}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignForm;
