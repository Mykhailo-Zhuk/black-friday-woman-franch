"use client";

import React, { useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "../OurFranchise/EmblaCarouselDotButtons";
import useEmblaCarousel from "embla-carousel-react";
import { twMerge } from "tailwind-merge";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const VideoBlock = ({ videoSrc, className }: { videoSrc: string; className?: string }) => {
  return (
    <div
      className={twMerge(
        "relative h-72 aspect-square overflow-hidden rounded-full bg-gray-300",
        className,
      )}>
      <video loop muted playsInline autoPlay className="w-full h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

const FranchVideoReviewsCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="embla" style={{ marginTop: "24px" }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <VideoBlock videoSrc={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchVideoReviewsCarousel;
