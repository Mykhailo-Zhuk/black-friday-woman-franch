import React from "react";
import { BackgroundImage, StaticHeader } from "../index";
import { BlackFridayLifeChangerBackground, whyFranchiseBackground } from "@/public/images/index";
import Image from "next/image";

const IdeasSuggestions = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="relative px-5 py-10 bg-mainBgColor">
        <StaticHeader className="mt-6 text-black">
          чому саме франшиза від woman franch?
        </StaticHeader>
        <p className="text-base mt-6 text-black">
          Ми знаємо, що кожна велика справа починається з правильного вибору партнера. Обираючи{" "}
          <span className="font-bold">франшизу Woman Franch</span>, ви отримуєте не просто готовий
          бізнес-проєкт, а команду підтримки, яка допоможе вам на кожному кроці.
        </p>
        <p className="text-base mt-6 text-black">Woman Franch — це:</p>
        <p className="text-base mt-6 text-black">
          <span className="font-bold">Потужний бренд із відмінною репутацією.</span>
          <br />
          Ми створили ім’я, яке впізнають і цінують і ви стаєте частиною цієї історії.
        </p>
        <p className="text-base mt-6 text-black">
          <span className="font-bold">Перевірені бізнес-моделі, що працюють.</span>
          <br />
          Наші франшизи продумані до дрібниць, тому ви будете впевнені у кожному кроці на шляху до
          успіху.
        </p>
        <p className="text-base mt-6 text-black">
          <span className="font-bold">Постійна підтримка і навчання.</span> Ми не залишимо вас
          наодинці — ви отримуєте доступ до знань і досвіду нашої команди, що допоможе вирішувати
          будь-які питання.
        </p>
        <p className="text-base mt-6 text-black">
          <span className="font-bold">Ексклюзивність та унікальність продукту.</span> Кожна франшиза
          Woman Frаnch має свої переваги та сильні сторони, які відрізняють її від інших на ринку.
          Це не просто бізнес, а стиль, цінності та якість, які приваблюють клієнтів.
        </p>
        <Image
          src={whyFranchiseBackground}
          alt={whyFranchiseBackground.src}
          width={whyFranchiseBackground.width}
          height={whyFranchiseBackground.height}
          className="object-contain absolute bottom-0 right-0 -z-[1]"
        />
        {/* Background image */}
        <BackgroundImage
          backgroundImage={BlackFridayLifeChangerBackground}
          imageClassName="object-right"
        />
      </div>
    </div>
  );
};

export default IdeasSuggestions;
