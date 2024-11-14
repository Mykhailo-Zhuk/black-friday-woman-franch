// components/DropdownMenu.tsx
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <RxHamburgerMenu size={24} className="text-white" onClick={toggleMenu} />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            <a
              href="#our-franchises"
              className="block px-4 py-2 hover:bg-gray-100 text-xs xl:text-base font-normal text-[#100f0d] tracking-wide leading-tight">
              Франшизи Woman Franch
            </a>
            <a
              href="#step-instrustion"
              className="block px-4 py-2 text-xs xl:text-base font-normal text-[#100f0d] tracking-wide leading-tight hover:bg-gray-100">
              Покрокова інструкція
            </a>
            <a
              href="#black-form"
              className="block px-4 py-2 text-xs xl:text-base font-normal text-[#100f0d] tracking-wide leading-tight hover:bg-gray-100">
              Заявка на купівлю франшизи
            </a>
            <a
              href="#contacts"
              className="block px-4 py-2 text-xs xl:text-base font-normal text-[#100f0d] tracking-wide leading-tight hover:bg-gray-100">
              Контакти
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationDropdownMenu;
