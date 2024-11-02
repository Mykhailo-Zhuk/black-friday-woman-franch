import React from "react";
import Image from "next/image";
import { competitorsOfferBackground, questionMarks } from "@/public/images/index";
import { BackgroundImage } from "../index";

const WhatCompetitorsOffer = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto">
        <div className="relative px-5 pt-10">
          <div className="h-1 w-1/6 bg-headerColor mb-3 mt-6" />
          <h1 className="font-openSans uppercase text-4xl text-headerColor">
            що пропонують конкуренти?
          </h1>
          <p className="mt-6 text-base text-white">
            Для Чорної П’ятниці компанії, що займаються франчайзингом, зазвичай пропонують акції,
            які можуть включати <span className="text-highlightColor">спеціальні ціни</span> на
            вартість франшизи,{" "}
            <span className="text-highlightColor">зниження паушального внеску</span> або спеціальні
            умови для нових партнерів. Наприклад,{" "}
            <span className="text-highlightColor">Franchise Group</span> іноді пропонує на цей
            період знижки на обрані франшизи або
            <span className="text-highlightColor">безкоштовну підтримку</span> на етапі запуску, що
            включає консультації, маркетинговий супровід або навчання для персоналу.
          </p>
          <p className="mt-6 text-base text-white">
            Такі акції зазвичай привертають увагу підприємців, які хочуть скористатися вигідними
            умовами для старту бізнесу під відомим брендом.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src={questionMarks}
              alt={questionMarks.src}
              width={questionMarks.width}
              height={questionMarks.height}
              className="object-contain w-full h-full"
            />
          </div>
          {/* Background image */}
          <BackgroundImage backgroundImage={competitorsOfferBackground} />
        </div>
      </div>
    </section>
  );
};

export default WhatCompetitorsOffer;
