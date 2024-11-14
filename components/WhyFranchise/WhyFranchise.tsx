import React from "react";
import { StaticText, StaticHeader, ActionButton } from "../index";

const IdeasSuggestions = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <div className="h-0.5 w-1/3 bg-[#e3dcdc] mb-10 ml-5 md:ml-[60px]" />
        <StaticHeader className="px-5 md:px-14">
          чому саме франшиза від <span className="font-black">woman franch?</span>
        </StaticHeader>
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#e3dcdc] py-2 mt-6 md:w-1/2 md:pr-24">
            <StaticText className="uppercase px-5 font-semibold">Woman Franch — це:</StaticText>
            <StaticText className="px-5 md:font-medium">
              Потужний бренд із відмінною репутацією. Ми створили ім&apos;я, яке впізнають і цінують
              і ви стаєте частиною цієї історії.
            </StaticText>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-6 md:mt-16 md:px-16">
          <div className="relative px-5 md:w-1/3 ">
            <StaticText className="uppercase font-semibold">
              Перевірені бізнес-моделі, що працюють.
            </StaticText>
            <StaticText className="md:font-medium">
              Наші франшизи продумані до дрібниць, тому ви будете впевнені у кожному кроці на шляху
              до успіху.
            </StaticText>
            <span className="text-[#e3dcdc] text-6xl xl:text-7xl absolute -top-6 left-4 font-semibold -z-10">
              1
            </span>
          </div>
          <div className="relative px-5 mt-10 md:w-1/3 md:mt-0">
            <StaticText className="uppercase font-semibold">
              Постійна підтримка і навчання.
            </StaticText>
            <StaticText className="md:font-medium">
              Ми не залишимо вас наодинці — ви отримуєте доступ до знань і досвіду нашої команди, що
              допоможе вирішувати будь-які питання.
            </StaticText>
            <span className="text-[#e3dcdc] text-6xl xl:text-7xl absolute -top-6 left-4 font-semibold -z-10">
              2
            </span>
          </div>
          <div className="relative px-5 mt-10 md:w-1/3 md:mt-0">
            <StaticText className="uppercase font-semibold">
              Ексклюзивність та унікальність продукту.
            </StaticText>
            <StaticText className="md:font-medium">
              Кожна франшиза Woman Frаnch має свої переваги та сильні сторони, які відрізняють її
              від інших на ринку. Це не просто бізнес, а стиль, цінності та якість, які приваблюють
              клієнтів.
            </StaticText>
            <span className="text-[#e3dcdc] text-6xl xl:text-7xl absolute -top-6 left-4 font-semibold -z-10">
              3
            </span>
          </div>
        </div>
        <ActionButton
          url="#black-form"
          action="Отримайте безкоштовно покрокову інструкцію 30 кроків до відкриття власної справи"
          className="px-2 py-1 uppercase"
          wrapper="max-w-[85%] mx-auto"
          internal
        />
      </div>
    </div>
  );
};

export default IdeasSuggestions;
