import React from "react";
import { Logo } from "../index";

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-xl w-full bg-black/10 backdrop-blur-sm shadow-lg z-50">
      <div className="p-5 flex max-h-24">
        <Logo light width={130} height={96} />
      </div>
    </header>
  );
};

export default Header;
