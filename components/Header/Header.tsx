import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../index";

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 container w-full bg-black/5 backdrop-blur-sm shadow-lg z-50">
      <div className="px-5 py-1 flex justify-between items-center h-12">
        <Logo white width={96} height={36} />
        <RxHamburgerMenu size={24} className="text-white" />
      </div>
    </header>
  );
};

export default Header;
