"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Image, { StaticImageData } from "next/image";
import { ClipLoader } from "react-spinners";

type PropType = {
  slides: StaticImageData[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll).on("scroll", onScroll).on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla" style={{ margin: "24px 0 0 0" }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              {loading ? (
                <div className="w-[326px] aspect-square flex justify-center items-center">
                  <ClipLoader />
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={`slide item with index ${index}`}
                  width={340}
                  height={340}
                  className="object-cover aspect-square"
                  loading="lazy"
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)} // Stop loading if an error occurs
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
