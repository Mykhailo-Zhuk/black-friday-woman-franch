import React from "react";
import { ActionButton, BackgroundImage, Logo, StaticHeader, StaticText } from "../index";
import { howItWork } from "@/public/images/index";
import { check, consult, receive, request, sign, start } from "@/public/icons/index";
import Image from "next/image";

const howItWorkList = [
  {
    id: "4248395669",
    title: "Заявка на співпрацю",
    imageSrc: request,
  },
  { id: "7994504565", title: "Перша консультація", imageSrc: consult },
  { id: "4125846837", title: "Отримання інформаційного пакета", imageSrc: receive },
  { id: "3517141777", title: "Перевірка та узгодження умов", imageSrc: check },
  { id: "0789187088", title: "Підписання договору", imageSrc: sign },
  { id: "9283217366", title: "Початкова підготовка та навчання", imageSrc: receive },
  { id: "0615206591", title: "Запуск та підтримка бізнесу", imageSrc: start },
];

const HowItWork = () => {
  return (
    <section>
      <div className="relative container mx-auto">
        <div className="p-5">
          <div className="flex justify-center">
            <Logo />
          </div>
          <StaticHeader className="text-center mt-6">ЯК ЦЕ ВІДБУВАЄТЬСЯ?</StaticHeader>
          <ul className="flex flex-wrap justify-center mt-6">
            {howItWorkList.map((item, index) => {
              return (
                <li key={item.id} className="flex flex-col space-y-2 p-1 w-1/3">
                  <h1 className="text-6xl text-white font-bold text-center">{index + 1}</h1>
                  <div className="flex justify-center items-center mt-1">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageSrc.src}
                      width={34}
                      height={41}
                      className="object-contain"
                    />
                  </div>
                  <StaticText className="mt-1 text-center">{item.title}</StaticText>
                </li>
              );
            })}
          </ul>
          <ActionButton
            url="#black-form"
            internal
            action="Придбати франшизу"
            className="uppercase max-w-min py-1"
          />
        </div>
        <BackgroundImage backgroundImage={howItWork} />
      </div>
    </section>
  );
};

export default HowItWork;
