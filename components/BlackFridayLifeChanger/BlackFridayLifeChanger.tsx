"use client";

import React from "react";
import Image from "next/image";
import { BlackFridayLifeChangerBackground, blackFridayLifeChangerPc } from "@/public/images/index";
import { ActionButton, BackgroundImage, StaticHeader, StaticText } from "../index";
import { blackBox } from "@/public/icons/index";
import { useMediaQuery } from "react-responsive";

const BlackFridayLifeChanger = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section>
      <div className="container mx-auto">
        <div className="relative px-5 py-10 md:px-14">
          <div className="h-0.5 w-1/3 bg-[#e4dcdc] mb-10 md:hidden" />
          <StaticHeader className="text-white mt-6 md:mt-0 max-w-sm">
            «Чорна П&apos;ятниця» — шанс, який змінить ваше життя!
          </StaticHeader>
          <StaticText className="mt-6 text-white font-semibold max-w-sm">
            Настав момент для рішучого кроку — ідеальний час перестати відкладати на завтра свою
            мрію про власний бізнес.
          </StaticText>
          <StaticText className="mt-6 text-white font-semibold max-w-sm">
            Цього Чорної П&apos;ятниці Woman Frаnch відкриває двері для тих, хто готовий змінити
            своє життя раз і назавжди.
          </StaticText>
          <StaticText className="text-white mt-6 max-w-sm">
            Ми пропонуємо унікальну можливість стати частиною бренду, який забезпечує успіх, навіть
            якщо ви ще не маєте досвіду у бізнесі. Це момент, коли зміни відбуваються тут і зараз,
            коли ціна вашого майбутнього успіху стала{" "}
            <span className="text-sm font-semibold">неймовірно вигідною</span>.
          </StaticText>

          <div className="relative">
            <ActionButton
              url="#black-form"
              action="До франшиз"
              className="uppercase"
              wrapper="justify-start"
              internal
            />
            <Image
              src={blackBox.src}
              alt="black box"
              width={125}
              height={121}
              className="object-contain absolute top-0 right-0"
            />
          </div>

          {/* Background image */}
          {!isTablet && (
            <BackgroundImage
              backgroundImage={BlackFridayLifeChangerBackground}
              red
              imageClassName="object-top"
            />
          )}
          {isTablet && <BackgroundImage backgroundImage={blackFridayLifeChangerPc} />}
        </div>
      </div>
    </section>
  );
};

export default BlackFridayLifeChanger;
