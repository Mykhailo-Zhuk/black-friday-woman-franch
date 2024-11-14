import React from "react";
import { ActionButton, StaticHeader, StaticText } from "../index";
import { blackBox, bulgaria, poland, questionMark, shoppingCart, ukraine } from "@/public/icons";
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
      <div className="container mx-auto pt-5">
        <div className="py-10">
          <div className="px-5 md:px-14">
            <StaticHeader className="max-w-[220px] md:max-w-xl">
              кількість франшиз <span className="font-semibold">WOMAN FRANCH</span> в україні та
              європі
            </StaticHeader>
            {/* Statistic */}
            <div className="flex flex-wrap mt-6">
              {statistics.map((item) => {
                return (
                  <div key={item.id} className="w-1/2 md:w-1/4 p-3">
                    <h1 className="text-center text-4xl font-light md:font-semibold text-nowrap">
                      {item.count}
                    </h1>
                    <StaticText className="text-center mt-3">{item.description}</StaticText>
                  </div>
                );
              })}
            </div>
            {/* Maps */}
            <div className="flex flex-col md:flex-row mt-6">
              <div className="relative p-5 flex justify-center items-center md:w-1/3">
                <Image
                  src={ukraine.src}
                  alt="Ukraine map"
                  width={ukraine.width}
                  height={ukraine.height}
                  className="object-contain"
                />
                <p className="text-[#7a7b7c] font-extralight text-xl uppercase absolute bottom-0 md:-bottom-2 left-0 md:left-1/2 md:-translate-x-1/2">
                  ukraine
                </p>
              </div>
              <div className="flex md:w-2/3">
                <div className="w-1/2 relative p-1 md:p-7 pb-5 flex justify-center items-center">
                  <Image
                    src={poland.src}
                    alt="Poland map"
                    width={poland.width}
                    height={poland.height}
                    className="object-contain max-w-[70%]"
                  />
                  <p className="text-[#7a7b7c] font-extralight text-xl uppercase absolute -bottom-2 left-0 md:left-1/2 md:-translate-x-1/2">
                    poland
                  </p>
                </div>
                <div className="w-1/2 relative p-2 md:p-8 pb-5 flex justify-center items-center">
                  <Image
                    src={bulgaria.src}
                    alt="Bulgaria map"
                    width={bulgaria.width}
                    height={bulgaria.height}
                    className="object-contain"
                  />
                  <p className="text-[#7a7b7c] font-extralight text-xl uppercase absolute -bottom-2 left-0 md:left-1/2 md:-translate-x-1/2">
                    bulgaria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex">
            <div className="w-1/2 md:w-1/3 py-1 pr-1 md:py-5 md:pr-5 flex justify-center items-center">
              <Image
                src={shoppingCart.src}
                alt="Shopping cart"
                width={shoppingCart.width}
                height={shoppingCart.height}
                className="object-contain w-full"
              />
            </div>
            <div className="w-1/2 md:w-1/3 p-1 md:p-5">
              <StaticText className="uppercase text-center text-base">
                ЯКЕ МІСТО НАСТУПНЕ
              </StaticText>
              <div className="flex justify-center items-center mt-2">
                <Image
                  src={questionMark.src}
                  alt="Question mark"
                  width={questionMark.width}
                  height={questionMark.height}
                  className="object-contain w-full"
                />
              </div>
              <ActionButton
                url="#black-form"
                action="придбати франшизу"
                className="uppercase text-xs max-w-min"
              />
            </div>
            <div className="hidden md:flex">
              <div className="p-5 flex justify-center items-center -rotate-[24deg]">
                <Image
                  src={blackBox.src}
                  alt="Black friday box"
                  width={76}
                  height={blackBox.height}
                  className="object-contain"
                />
              </div>
              <div className="relative p-5 flex justify-center items-center -rotate-45 -top-5">
                <Image
                  src={blackBox.src}
                  alt="Black friday box"
                  width={96}
                  height={blackBox.height}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberOfFranchises;
