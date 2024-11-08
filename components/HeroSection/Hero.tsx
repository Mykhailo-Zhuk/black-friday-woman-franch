import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="max-w-xl mx-auto">
        <div className="relative px-5 py-10 min-h-[90vh] bg-black text-white overflow-hidden">
          <h1 className="text-6xl base:text-[86px] uppercase text-center mt-8 relative z-10">
            BLACK
            <span className="text-xs absolute right-[80px] top-[17px] bg-red-600 px-0.5 before:content-[''] before:absolute before:left-[-8px] before:top-0 before:border-l-8 before:border-l-transparent before:border-r-0 before:h-full border-t-0 before:border-r-transparent before:border-t-[16px] before:border-t-red-600">
              Friday
            </span>
          </h1>
          <p className="font-medium text-xs uppercase text-center mt-8 relative z-10">
            ваша успішна кар&apos;єра розпочнеться у цю пятницю!
          </p>
          {/* Background image */}
          {/* <div className="flex justify-center">
            <Image
              src={heroBackground}
              width={heroBackground.width}
              height={heroBackground.height}
              alt="hero box with gift"
              className="object-contain relative z-10"
            />
          </div> */}
          {/* <Image
            src={saleStraps}
            alt={saleStraps.src}
            width={saleStraps.width}
            height={saleStraps.height}
            className="object-cover w-full absolute top-1/2 -translate-y-1/2 left-0 z-0"
          /> */}
          <p className="uppercase text-center text-[10px] text-white z-10 mt-10">
            спеціальні ціни на найкращі франшизи від{" "}
            <span className="text-red-600">woman franch</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
