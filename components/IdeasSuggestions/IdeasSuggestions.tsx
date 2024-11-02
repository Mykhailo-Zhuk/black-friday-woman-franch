import React from "react";
import { BackgroundImage, StaticHeader, StaticSubHeader } from "../index";
import { ideasSuggestionsBackground, trolleyWithMoney } from "@/public/images/index";
import Image from "next/image";

const IdeasSuggestions = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="relative px-5 py-10">
        <div className="flex justify-end max-w-[80%]">
          <div className="h-1 w-1/5 bg-headerColor mb-3 mt-6" />
        </div>
        <StaticHeader className="max-w-[80%] mt-3">ідеї та пропозиції </StaticHeader>
        <StaticSubHeader className="mt-6 max-w-[80%]">
          різні меседжі та посил, спеціальна ціна усюди
        </StaticSubHeader>
        <p className="text-base max-w-[80%] text-white">
          <span className="text-highlightColor">“Чорна п’ятниця – Мрія на старті”</span>
          <br />
          Спеціальна ціна + роялті 0% на 3 місяців.
        </p>
        <p className="text-base max-w-[80%] text-white">
          <span className="text-highlightColor">“Порадь франшизу – отримай подвійну вигоду!”</span>
          <br />
          Знижка 50% для кожного з друзів, хто придбає франшизу у Чорну П’ятницю. Така акція
          приверне більшу кількість учасників, адже від двох людей ви матимете більший профіт.
        </p>
        <BackgroundImage backgroundImage={ideasSuggestionsBackground} />
        <div className="max-w-[80%] ml-auto">
          <Image
            src={trolleyWithMoney}
            alt={trolleyWithMoney.src}
            width={trolleyWithMoney.width}
            height={trolleyWithMoney.height}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default IdeasSuggestions;
