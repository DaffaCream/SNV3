"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/SHAFA.png";
import { Magnifer } from "solar-icon-set/search";
import { Bell } from "solar-icon-set/notifications";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconSize, setIconSize] = useState(12); // Nilai awal
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIconSize(isSmallScreen ? 12 : 24);
  }, [isSmallScreen]);

  return (
    <header
      className={`bg-none fixed w-full z-[9999] ${
        isScrolled ? "bg-black" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center px-5 sm:px-6 py-2 lg:py-3 mt-2">
        <div className="flex gap-5">
          <Image
            src={logo}
            alt="kiaraa-logo"
            width={140}
            height={40}
            className="w-[68px] h-[18px] lg:w-[139px] lg:h-[32px]"
          />
          <ul className="lg:flex hidden gap-3 text-slate-300">
            <li className="font-semibold text-white">Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languaes</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Magnifer color="#ffff" size={iconSize} iconStyle="Linear" />
          <p className="font-medium text-white">Adult</p>
          <Bell color="#ffff" size={iconSize} iconStyle="Bold" />
        </div>
      </div>
    </header>
  );
};

export default Header;
