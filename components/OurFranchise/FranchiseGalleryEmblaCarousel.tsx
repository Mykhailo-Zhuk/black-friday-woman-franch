"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

type PropType = {
  slides: StaticImageData[];
  options?: EmblaOptionsType;
};

const FranchiseGalleryEmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="embla" style={{ margin: "24px 0 0 0" }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={item}
                alt={item.src}
                width={item.width}
                height={item.height}
                className="object-contain aspect-square"
              />
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
              className={"bg-white embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FranchiseGalleryEmblaCarousel;
