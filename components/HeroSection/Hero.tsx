import React from "react";
import { heroBackground } from "@/public/images/index";
import Image from "next/image";
import { saleStraps } from "@/public/icons";

const Hero = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto">
        <div className="relative px-5 py-10 min-h-[90vh] bg-mainBgColor overflow-hidden">
          <h1 className="text-[72px] base:text-[86px] font-bebas leading-tight uppercase text-center text-black font-bold -tracking-normal mt-20 relative z-10">
            BLACK FRIDAY
          </h1>
          <p className="text-black font-semibold text-xl uppercase text-center font-openSans relative z-10">
            ваша успішна кар'єра розпочнеться у цю пятницю!
          </p>
          {/* Background image */}
          <div className="flex justify-center">
            <Image
              src={heroBackground}
              width={heroBackground.width}
              height={heroBackground.height}
              alt="hero box with gift"
              className="object-contain relative z-10"
            />
          </div>
          <Image
            src={saleStraps}
            alt={saleStraps.src}
            width={saleStraps.width}
            height={saleStraps.height}
            className="object-cover w-full absolute top-1/2 -translate-y-1/2 left-0 z-0"
          />
          <h1 className="uppercase text-center text-xl font-openSans absolute left-0 right-0 bottom-16 text-white z-10">
            спеціальні ціни на найкращі франшизи від{" "}
            <span className="font-bold text-highlightColor">woman franch</span>
          </h1>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 h-1/2 z-[5]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
