import React from "react";
import StaticHeader from "../Reusible/StaticHeader";
import Image from "next/image";
import { numberOfFranchises, numberOfFranchisesBoy } from "@/public/images";

const NumberOfFranchises = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto">
        <div className="p-5 pt-10 font-openSans">
          <StaticHeader className="text-black">
            кількість франшиз WOMAN fRANCH в україні та європі
          </StaticHeader>
          <div className="mt-6">
            <Image
              src={numberOfFranchises}
              alt={numberOfFranchises.src}
              width={numberOfFranchises.width}
              height={numberOfFranchises.height}
              className="object-contain w-full"
            />
          </div>
          <div className="flex gap-1 space-x-1 mt-6">
            <div className="w-1/2">
              <Image
                src={numberOfFranchisesBoy}
                alt={numberOfFranchisesBoy.src}
                width={numberOfFranchisesBoy.width}
                height={numberOfFranchisesBoy.height}
                className="object-contain w-full relative -bottom-5"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-[129px] text-center leading-none">?</h1>
              <p className="text-lg uppercase text-center base:text-nowrap">яке місто наступне</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberOfFranchises;
