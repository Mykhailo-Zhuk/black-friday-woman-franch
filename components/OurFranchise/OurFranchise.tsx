"use client";

import React from "react";
import { FranchisesEmblaCarousel, StaticHeader, StaticText } from "../index";
import { blackFridaySale } from "@/public/icons/index";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import "../CSS/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const OurFranchise = () => {
  return (
    <section>
      <div className="container mx-auto pb-10">
        <StaticHeader className="px-5 mb-6 md:px-14 max-w-[220px] md:max-w-full">
          ФРАНШИЗИ <span className="font-semibold">WOMAN FRANCH –</span> КРАЩІ З КРАЩИХ
        </StaticHeader>
        {/* Carousel */}
        <FranchisesEmblaCarousel options={OPTIONS} />
        <div>
          <Image
            src={blackFridaySale.src}
            alt="Black friday sale strap"
            width={blackFridaySale.width}
            height={blackFridaySale.height}
            className="object-contain w-full"
          />
          <StaticText className="font-semibold text-center">
            + відсутність РОЯЛТІ на 3 місяці
          </StaticText>
        </div>
      </div>
    </section>
  );
};

export default OurFranchise;
