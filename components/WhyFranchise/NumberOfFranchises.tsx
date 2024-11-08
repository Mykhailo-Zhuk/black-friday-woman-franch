import React from "react";
import { ActionButton, StaticHeader, StaticText } from "../index";
import { bulgaria, poland, questionMark, shoppingCart, ukraine } from "@/public/icons";
import Image from "next/image";

const statistics = [
  {
    id: "3490600493",
    count: "12+",
    description: "Років на ринку",
  },
  {
    id: "2629139901",
    count: "100+",
    description: "Партнерів-франчайзі по Україні та за її межами",
  },
  {
    id: "0398039766",
    count: "500+",
    description: "Педагогів",
  },
  {
    id: "4758710076",
    count: "10 000+",
    description: "Відвідувачів щомісяця",
  },
];

const NumberOfFranchises = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto pt-5">
        <div className="py-10">
          <div className="px-5">
            <StaticHeader>
              кількість франшиз
              <br /> <span className="font-semibold">WOMAN FRANCH</span>
              <br /> в україні та європі
            </StaticHeader>
            {/* Statistic */}
            <div className="flex flex-wrap mt-6">
              {statistics.map((item) => {
                return (
                  <div key={item.id} className="w-1/2 p-3">
                    <h1 className="text-center text-4xl font-light text-nowrap">{item.count}</h1>
                    <StaticText className="text-center mt-3">{item.description}</StaticText>
                  </div>
                );
              })}
            </div>
            {/* Maps */}
            <div className="mt-6">
              <div className="relative p-5 flex justify-center items-center">
                <Image
                  src={ukraine}
                  alt={ukraine.src}
                  width={ukraine.width}
                  height={ukraine.height}
                  className="object-contain"
                />
                <p className="text-[#7a7b7c] font-extralight text-xl uppercase absolute bottom-0 left-0">
                  ukraine
                </p>
              </div>
              <div className="flex">
                <div className="w-1/2 relative p-1 pb-5 flex justify-center items-center">
                  <Image
                    src={poland}
                    alt={poland.src}
                    width={poland.width}
                    height={poland.height}
                    className="object-contain max-w-[70%]"
                  />
                  <p className="text-[#7a7b7c] font-extralight text-xl uppercase absolute -bottom-2 left-0">
                    poland
                  </p>
                </div>
                <div className="w-1/2 relative p-2 pb-5 flex justify-center items-center">
                  <Image
                    src={bulgaria}
                    alt={bulgaria.src}
                    width={bulgaria.width}
                    height={bulgaria.height}
                    className="object-contain"
                  />
                  <p className="text-[#7a7b7c] font-extralight text-xl uppercase absolute -bottom-2 left-0">
                    bulgaria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex">
            <div className="w-1/2 py-1 pr-1 flex justify-center items-center">
              <Image
                src={shoppingCart}
                alt={shoppingCart.src}
                width={shoppingCart.width}
                height={shoppingCart.height}
                className="object-contain w-full"
              />
            </div>
            <div className="w-1/2 p-1">
              <StaticHeader className="uppercase text-center text-base">
                ЯКЕ МІСТО НАСТУПНЕ
              </StaticHeader>
              <div className="flex justify-center items-center mt-2">
                <Image
                  src={questionMark}
                  alt={questionMark.src}
                  width={questionMark.width}
                  height={questionMark.height}
                  className="object-contain w-full"
                />
              </div>
              <ActionButton
                url="#black-form"
                action="придбати франшизу"
                className="uppercase max-w-min"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberOfFranchises;
