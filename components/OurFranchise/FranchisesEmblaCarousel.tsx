"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../OurFranchise/EmblaCarouselDotButtons";
import { ActionButton, FranchiseGalleryEmblaCarousel, StaticHeader, StaticText } from "../index";
import { FRANCHISE_LIST } from "@/lib/usedData";

const OPTIONS: EmblaOptionsType = { loop: true };
const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__scale") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {FRANCHISE_LIST.map((listItem) => (
            <div className="embla__slide" key={listItem.id}>
              <div className="embla__slide__scale flex-col bg-[#e4dcdc] rounded-xl p-5">
                <div className="h-[97%]">
                  <StaticHeader>{listItem.title}</StaticHeader>
                  <StaticText className="mt-6">{listItem.description}</StaticText>

                  {/* Interal carousel */}
                  <FranchiseGalleryEmblaCarousel slides={listItem.imageSrcList} options={OPTIONS} />

                  <StaticText className="mt-6 text-center uppercase">{listItem.promo}</StaticText>
                  <div className="flex justify-center gap-1 space-x-1 mt-6">
                    {listItem.prices.map((price) => {
                      return (
                        <div key={price.id} className="flex flex-col">
                          <StaticText className="relative text-[#959595] text-center text-[10px] md:text-sm font-medium text-nowrap">
                            {price.deprecatedPrice} $
                            <span className="bg-[#ed1d24] h-[1px] absolute w-full rotate-12 top-1.5 left-0"></span>
                            <span className="bg-[#ed1d24] h-[1px] absolute w-full -rotate-12 top-1.5 left-0"></span>
                            <span className="absolute text-3xl text-white uppercase -bottom-1 -left-1 font-bold -z-10">
                              {price.type}
                            </span>
                          </StaticText>
                          <StaticText className="text-[#100f0d] text-sm md:text-lg font-bold text-nowrap">
                            {price.actualPrice} $
                          </StaticText>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <ActionButton
                  url="#black-form"
                  internal
                  action="ОТРИМАТИ ІНФОРМАЦІЮ ПРО ФРАНШИЗУ"
                  className="max-w-fit text-xs px-3 py-1"
                  wrapper="h-auto"
                />
              </div>
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
    </div>
  );
};

export default EmblaCarousel;
