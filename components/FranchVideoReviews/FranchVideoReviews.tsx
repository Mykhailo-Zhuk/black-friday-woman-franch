import React from "react";
import { FranchVideoReviewsCarousel, Logo, StaticHeader } from "../index";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
const SLIDES = ["/videos/mudrik-ivano-frankovo.mp4", "/videos/mudrik-school.mp4"];

const FranchVideoReviews = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-10">
          <div className="flex justify-center px-5">
            <Logo />
          </div>
          <StaticHeader className="text-black mt-6 px-5">ВІДЕО-ТУР ПО ФРАНШИЗАХ</StaticHeader>
          <FranchVideoReviewsCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default FranchVideoReviews;
