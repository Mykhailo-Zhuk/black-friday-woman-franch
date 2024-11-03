import React from "react";
import Image from "next/image";
import { BlackFridayLifeChangerBackground } from "@/public/images/index";
import { BackgroundImage, StaticHeader } from "../index";
import { blackFridayPinkIcon } from "@/public/icons";

const BlackFridayLifeChanger = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto">
        <div className="relative px-5 pt-10">
          <div className="h-1 w-1/6 bg-headerColor mb-3 mt-6" />
          <StaticHeader>«Чорна П&apos;ятниця» — шанс, який змінить ваше життя!</StaticHeader>
          <p className="mt-6 text-base text-white">
            Настав момент для рішучого кроку — ідеальний час перестати відкладати на завтра свою
            мрію про власний бізнес. Цього Чорної П&apos;ятниці Woman Frаnch відкриває двері для
            тих, хто готовий змінити своє життя раз і назавжди.
          </p>
          <div className="flex">
            <p className="text-base text-white w-3/5 pt-6 pb-10">
              Ми пропонуємо унікальну можливість стати частиною бренду, який забезпечує успіх,
              навіть якщо ви ще не маєте досвіду у бізнесі. Це момент, коли зміни відбуваються тут і
              зараз, коли ціна вашого майбутнього успіху стала{" "}
              <span className="text-highlightColor font-bold">неймовірно вигідною</span>.
            </p>
            <div className="w-2/5">
              <Image
                src={blackFridayPinkIcon}
                alt={blackFridayPinkIcon.src}
                width={blackFridayPinkIcon.width}
                height={blackFridayPinkIcon.height}
                className="object-contain relative -bottom-8 mt-12"
              />
            </div>
          </div>

          {/* Background image */}
          <BackgroundImage backgroundImage={BlackFridayLifeChangerBackground} />
        </div>
      </div>
    </section>
  );
};

export default BlackFridayLifeChanger;
