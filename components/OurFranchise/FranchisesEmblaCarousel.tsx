// "use client";

// import React, { useCallback, useEffect, useRef } from "react";
// import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
// import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";
// import ActionButton from "../Reusible/ActionButton";
// import useEmblaCarousel from "embla-carousel-react";

// const TWEEN_FACTOR_BASE = 0.2;

// const FRANCHISE_LIST = [
//   {
//     id: "0933383786",
//     title: "ЦЕНТР РАННЬОГО РОЗВИТКУ",
//     description:
//       "Центр раннього розвитку, який випереджає час! Ексклюзивна модель без аналогів — створюйте майбутнє з нами.",
//     imageSrcList: [],
//     promo: "Центр раннього розвитку “Мудрик” за ціною:",
//     prices: [
//       { id: "5084756453", deprecatedPrice: "10 000", actualPrice: "6 600", type: undefined },
//     ],
//   },
// ];

// type PropType = {
//   options?: EmblaOptionsType;
// };

// const FranchisesEmblaCarousel: React.FC<PropType> = (props) => {
//   const { options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const tweenFactor = useRef(0);
//   const tweenNodes = useRef<HTMLElement[]>([]);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

//   const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
//     usePrevNextButtons(emblaApi);

//   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
//     tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
//       return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
//     });
//   }, []);

//   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
//   }, []);

//   const tweenParallax = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//     const engine = emblaApi.internalEngine();
//     const scrollProgress = emblaApi.scrollProgress();
//     const slidesInView = emblaApi.slidesInView();
//     const isScrollEvent = eventName === "scroll";

//     emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//       let diffToTarget = scrollSnap - scrollProgress;
//       const slidesInSnap = engine.slideRegistry[snapIndex];

//       slidesInSnap.forEach((slideIndex) => {
//         if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

//         if (engine.options.loop) {
//           engine.slideLooper.loopPoints.forEach((loopItem) => {
//             const target = loopItem.target();

//             if (slideIndex === loopItem.index && target !== 0) {
//               const sign = Math.sign(target);

//               if (sign === -1) {
//                 diffToTarget = scrollSnap - (1 + scrollProgress);
//               }
//               if (sign === 1) {
//                 diffToTarget = scrollSnap + (1 - scrollProgress);
//               }
//             }
//           });
//         }

//         const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
//         const tweenNode = tweenNodes.current[slideIndex];
//         tweenNode.style.transform = `translateX(${translate}%)`;
//       });
//     });
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;

//     setTweenNodes(emblaApi);
//     setTweenFactor(emblaApi);
//     tweenParallax(emblaApi);

//     emblaApi
//       .on("reInit", setTweenNodes)
//       .on("reInit", setTweenFactor)
//       .on("reInit", tweenParallax)
//       .on("scroll", tweenParallax)
//       .on("slideFocus", tweenParallax);
//   }, [emblaApi, tweenParallax, setTweenFactor, setTweenNodes]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {FRANCHISE_LIST.map((listItem) => (
//             <div className="embla__slide" key={listItem.id}>
//               <div className="embla__parallax">
//                 <div className="embla__parallax__layer">
//                   <h1>{listItem.title}</h1>
//                   <p>{listItem.description}</p>
//                   <ActionButton
//                     url="#black-form"
//                     internal
//                     action="ОТРИМАТИ ІНФОРМАЦІЮ ПРО ФРАНШИЗУ"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>

//         <div className="embla__dots">
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={"embla__dot".concat(
//                 index === selectedIndex ? " embla__dot--selected" : "",
//               )}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FranchisesEmblaCarousel;
