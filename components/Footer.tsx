"use client";

import React from "react";
import Link from "next/link";
import { SocialIcons } from "./index";
import { twMerge } from "tailwind-merge";

const MainFooter = () => {
  const date = new Date().getFullYear();

  return (
    <footer id="contacts">
      <div className={twMerge("container mx-auto bg-[#662421]")}>
        <div className="px-5 pt-8 pb-16">
          <SocialIcons color="text-white" />
          <ul className="flex flex-col sm:flex-row gap-1 space-x-1 justify-center items-center mt-6">
            <li>
              <Link href="#policy" className="text-center hover:underline text-white">
                Політика конфіденційності
              </Link>
            </li>
            <li>
              <Link href="#temps-of-use" className="text-center hover:underline text-white">
                Умови використання
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1-umzph_K4gPj4yrTPaIZFU923hQ7Ro0rtR8KBs4KzyY/edit#heading=h.eq1m8c2p8a6f"
                className="text-white">
                Договір оферти
              </Link>
            </li>
          </ul>
          <p className="text-center mt-6 text-white">© {date} Woman Franch. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
