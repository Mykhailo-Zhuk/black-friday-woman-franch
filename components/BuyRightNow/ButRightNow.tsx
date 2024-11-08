import React from "react";
import { ActionButton, BackgroundImage, CountdownTimer, StaticHeader, StaticText } from "../index";
import { buyRightNow } from "@/public/images/index";
import { percentage } from "@/public/icons/index";
import Image from "next/image";

const ButRightNow = () => {
  return (
    <section>
      <div className="relative max-w-xl mx-auto py-5">
        <div className="relative p-5 max-w-[80%] mx-auto">
          <StaticHeader className="uppercase text-center font-semibold text-white">
            ПРИДБАЙТЕ ФРАНШИЗУ ПРОСТО ЗАРАЗ!
          </StaticHeader>
          <StaticText className="text-center mt-6 text-white">
            Час настав! Зробіть крок до успіху просто зараз! Це не просто пропозиція, це шанс
            змінити своє життя та почати прибутковий бізнес, який має попит і стабільний ринок. Лише
            зараз ви можете отримати свою франшизу за найкращою ціною року – і це більше, ніж
            пропозиція. Це можливість вирватись уперед, обираючи готову бізнес-модель із надійною
            підтримкою та успішним досвідом.
          </StaticText>
          <StaticText className="text-center mt-3 text-white">
            Приєднуйтесь до тих, хто готовий до великих змін. Час купувати, час будувати своє завтра
            – скористайтеся шансом Чорної п’ятниці!
          </StaticText>
          <CountdownTimer />
          <ActionButton
            url="black-form"
            action="КУПИТИ ЗІ ЗНИЖКОЮ"
            internal
            wrapper="mt-12"
            className="text-xs"
          />
          <div className="absolute top-14 right-0 -z-[8]">
            <Image
              src={percentage}
              alt={percentage.src}
              width={29}
              height={38}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[45%] left-0 -z-[8]">
            <Image
              src={percentage}
              alt={percentage.src}
              width={41}
              height={62}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-7 -right-4 -z-[8]">
            <Image
              src={percentage}
              alt={percentage.src}
              width={50}
              height={72}
              className="object-contain"
            />
          </div>
        </div>
        <BackgroundImage backgroundImage={buyRightNow} aclipse />
      </div>
    </section>
  );
};

export default ButRightNow;
