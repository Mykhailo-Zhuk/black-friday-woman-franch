import React from "react";
import { StaticText, StaticHeader } from "../index";

const IdeasSuggestions = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="py-10">
        <div className="h-0.5 w-1/3 bg-[#e3dcdc] mb-10 ml-5" />
        <StaticHeader className="px-5">
          чому саме франшиза від <span className="font-semibold">woman franch?</span>
        </StaticHeader>
        <StaticText className="mt-6 font-semibold px-5">
          Ми знаємо, що кожна велика справа починається з правильного вибору партнера. Обираючи
          франшизу Woman Franch, ви отримуєте не просто готовий бізнес-проєкт, а команду підтримки,
          яка допоможе вам на кожному кроці.
        </StaticText>
        <div className="bg-[#e3dcdc] py-1 mt-6">
          <StaticText className="uppercase px-5 font-semibold">Woman Franch — це:</StaticText>
          <StaticText className="px-5">
            Потужний бренд із відмінною репутацією. Ми створили ім&apos;я, яке впізнають і цінують і
            ви стаєте частиною цієї історії.
          </StaticText>
        </div>
        <div className="relative px-5">
          <StaticText className="mt-6 uppercase font-semibold">
            Перевірені бізнес-моделі, що працюють.
          </StaticText>
          <StaticText>
            Наші франшизи продумані до дрібниць, тому ви будете впевнені у кожному кроці на шляху до
            успіху.
          </StaticText>
          <span className="text-[#e3dcdc] text-6xl absolute -top-6 left-4 font-semibold -z-10">
            1
          </span>
        </div>
        <div className="relative px-5 mt-10">
          <StaticText className="uppercase font-semibold">
            Постійна підтримка і навчання.
          </StaticText>
          <StaticText>
            Ми не залишимо вас наодинці — ви отримуєте доступ до знань і досвіду нашої команди, що
            допоможе вирішувати будь-які питання.
          </StaticText>
          <span className="text-[#e3dcdc] text-6xl absolute -top-6 left-4 font-semibold -z-10">
            2
          </span>
        </div>
        <div className="relative px-5 mt-10">
          <StaticText className="uppercase font-semibold">
            Ексклюзивність та унікальність продукту.
          </StaticText>
          <StaticText>
            Кожна франшиза Woman Frаnch має свої переваги та сильні сторони, які відрізняють її від
            інших на ринку. Це не просто бізнес, а стиль, цінності та якість, які приваблюють
            клієнтів.
          </StaticText>
          <span className="text-[#e3dcdc] text-6xl absolute -top-6 left-4 font-semibold -z-10">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default IdeasSuggestions;
