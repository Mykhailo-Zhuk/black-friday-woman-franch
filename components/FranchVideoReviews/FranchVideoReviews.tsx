import React from "react";
import { FranchVideoReviewsCarousel, StaticHeader } from "../index";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
const SLIDES = [
  "/videos/mudrik-school.mp4",
  "/videos/solodki.mp4",
  "/videos/maliata-na-tata.mp4",
  "/videos/crr.mp4",
  "/videos/kvitka.mp4",
  "/videos/ucook.mp4",
  "/videos/mudrik-stryi.mp4",
];

const FranchVideoReviews = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-10">
          <StaticHeader className="text-black mt-6 px-5 md:px-14">
            ВІДЕО-ТУР ПО ФРАНШИЗАХ
          </StaticHeader>
          <FranchVideoReviewsCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default FranchVideoReviews;
