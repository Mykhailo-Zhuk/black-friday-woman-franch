import React from "react";
import { FranchVideoReviewsCarousel, StaticHeader } from "../index";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
const SLIDES = [
  "/videos/mudrik-ivano-frankovo.mp4",
  "/videos/mudrik-school.mp4",
  "/videos/first.mp4",
  "/videos/maliata-na-tata.mp4",
  "/videos/mudrik-school.mp4",
  "/videos/video-kvitka1.mp4",
  "/videos/video-kvitka2.mp4",
  "/videos/video-kvitka3.mp4",
  "/videos/video-kvitka4.mp4",
  "/videos/video-kvitka5.mp4",
  "/videos/video-kvitka6.mp4",
  "/videos/video-kvitka7.mp4",
  "/videos/video-kvitka8.mp4",
  "/videos/video-kvitka9.mp4",
  "/videos/video-kvitka10.mp4",
  "/videos/мудрик-стрий.mp4",
  "/videos/crr.mp4",
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
