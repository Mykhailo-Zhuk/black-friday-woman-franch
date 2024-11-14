"use client";

import React from "react";
import { ActionButton, BackgroundImage, CountdownTimer, StaticHeader, StaticText } from "../index";
import { butRightNowPc, buyRightNow } from "@/public/images/index";
import { useMediaQuery } from "react-responsive";

const ButRightNow = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <section>
      <div className="relative container mx-auto py-5">
        <div className="relative p-5 max-w-[80%] mx-auto">
          <StaticHeader className="uppercase text-center md:text-left font-semibold text-white">
            ПРИДБАЙТЕ ФРАНШИЗУ ПРОСТО ЗАРАЗ!
          </StaticHeader>
          <StaticText className="text-center mt-6 text-white md:text-left md:max-w-sm">
            Час настав! Зробіть крок до успіху просто зараз! Це не просто пропозиція, це шанс
            змінити своє життя та почати прибутковий бізнес, який має попит і стабільний ринок. Лише
            зараз ви можете отримати свою франшизу за найкращою ціною року – і це більше, ніж
            пропозиція. Це можливість вирватись уперед, обираючи готову бізнес-модель із надійною
            підтримкою та успішним досвідом.
          </StaticText>
          <StaticText className="text-center mt-3 text-white md:text-left md:max-w-sm">
            Приєднуйтесь до тих, хто готовий до великих змін. Час купувати, час будувати своє завтра
            – скористайтеся шансом Чорної п’ятниці!
          </StaticText>
          <div className="flex flex-col items-center mt-6 md:flex-row md:justify-between md:items-center md:max-w-md space-x-5">
            <CountdownTimer className="mt-24 md:mt-0" />
            <ActionButton
              url="black-form"
              action="КУПИТИ ЗІ ЗНИЖКОЮ"
              internal
              wrapper="mt-12 md:mt-6"
              className="text-xs"
            />
          </div>
        </div>
        {!isTablet && <BackgroundImage backgroundImage={buyRightNow} red />}
        {isTablet && <BackgroundImage backgroundImage={butRightNowPc} />}
      </div>
    </section>
  );
};

export default ButRightNow;
