import React from "react";
import { BackgroundImage, StaticHeader } from "../index";
import { detailedAnalysisBackground, detailedAnalysisWoman } from "@/public/images/index";
import Image from "next/image";

const DetailedAnalysis = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="relative px-5 pt-10 text-white overflow-hidden">
        <div className="flex justify-end">
          <div className="h-1 w-1/5 bg-headerColor mb-3 mt-6" />
        </div>
        <StaticHeader className="mt-3 text-right">
          детальний аналіз можливостей і ризиків для кожної з акцій:
        </StaticHeader>
        <p className="text-base text-highlightColor mt-6">
          «Чорна п’ятниця – Мрія на старті»
          <br />
          (спеціальна ціна + 0% роялті на 3 місяці)
        </p>
        <p className="text-base max-w-[80%] mt-6 text-highlightColor">Позитивні сторони:</p>
        <ul className="text-base max-w-[80%] mt-6 flex flex-col space-y-6 list-inside list-disc">
          <li>
            Збільшення інтересу до франшизи: знижка в 50% і 0% роялті на 3 місяці — привабливі умови
            для старту.
          </li>
          <li>
            Зменшення фінансового бар’єру для новачків: нульова роялті спростить стартовий етап,
            мотивуючи партнерів укладати угоду.
          </li>
        </ul>
        <div className="relative">
          <Image
            src={detailedAnalysisWoman}
            alt={detailedAnalysisWoman.src}
            width={detailedAnalysisWoman.width}
            height={detailedAnalysisWoman.height}
            className="absolute -left-12 -bottom-40 object-contain w-full h-full z-[5]"
          />
          <div className="absolute -bottom-72 -left-48 bg-headerColor w-[400px] aspect-square rounded-full z-0"></div>
          <div className="max-w-[60%] ml-auto mb-40 relative z-10">
            <p className="text-base mt-6 text-highlightColor">Негативні сторони:</p>
            <ul className="text-base mt-6 flex flex-col space-y-6 list-inside list-disc">
              <li>
                Короткочасний прибуток: знижка та відсутність роялті зменшують дохід у перші 3
                місяці.
              </li>
              <li>
                Ризик непостійних партнерів: деякі можуть скористатися акційними умовами без
                серйозного наміру довготривалого розвитку франшизи.
              </li>
            </ul>
          </div>
        </div>

        <BackgroundImage backgroundImage={detailedAnalysisBackground} />
      </div>
    </div>
  );
};

export default DetailedAnalysis;
