import React from "react";
import { heroBackground } from "@/public/images/index";
import { BackgroundImage } from "../index";
import Image from "next/image";
import { heroBox } from "@/public/icons";

const Hero = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto">
        <div className="relative px-5 py-10 min-h-[90vh] overflow-hidden">
          <h1 className="text-[72px] base:text-[100px] uppercase text-center text-headerColor font-bold tracking-tighter mt-20">
            Чорна
          </h1>
          <div className="flex flex-col-reverse base:flex-row gap-1 base:space-x-3 items-center base:items-baseline justify-center uppercase tracking-tighter">
            <p className="text-lg text-headerColor text-nowrap">29 листопада 2024</p>
            <div className="flex flex-col text-white">
              <h1 className="text-4xl border-b-2 border-b-headerColor leading-[60px]">
                п&apos;ятниця
              </h1>
              <p className="text-lg font-openSans leading-8">пропозиції та ідеї</p>
            </div>
          </div>
          {/* Background image */}
          <div className="absolute -bottom-48 -left-24 bg-headerColor w-[400px] aspect-square rounded-full"></div>
          <Image
            src={heroBox}
            width={heroBox.width}
            height={heroBox.height}
            alt="hero box with gift"
            className="absolute -bottom-16 -left-16 max-w-sm"
          />
          <BackgroundImage backgroundImage={heroBackground} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
