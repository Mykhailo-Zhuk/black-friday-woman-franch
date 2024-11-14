"use client";

import React from "react";
import { ActionButton, CountdownTimer, Logo, StaticText } from "../index";
import { useMediaQuery } from "react-responsive";
import NavigationDropdownMenu from "./DropdownMenu";

const Header = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const actionUrl = isTablet ? "https://t.me/+380674554621" : "tel:+380674554621";

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 container w-full bg-black/5 backdrop-blur-sm shadow-lg z-50">
      <div className="px-5 py-1 flex justify-between md:justify-start space-x-10 items-center h-12">
        <Logo white width={96} height={36} />
        {!isTablet && <NavigationDropdownMenu />}
        {isTablet && (
          <div
            className="
          flex justify-center h-9 w-full">
            <div className="w-[90%] bg-white rounded-full h-full flex items-center md:justify-center md:space-x-5">
              <StaticText className="px-3 text-[10px] font-semibold">Пропозиція дійсна</StaticText>
              <CountdownTimer navigation />
              <ActionButton
                url={actionUrl}
                action="+380 67 455 46 21"
                wrapper="mt-0"
                isTransparent
                className="text-black text-nowrap md:text-base px-3 py-1"
              />
              <ActionButton
                url="#black-form"
                action="КУПИТИ ФРАНШИЗУ"
                wrapper="mt-0"
                internal
                className="px-3 py-1 text-[8px] md:text-sm text-nowrap"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
