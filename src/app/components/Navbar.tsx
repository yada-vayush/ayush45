"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="md:sticky top-0 z-10 lg:px-10 2xl:px-20 py-4 border-b border-gray-300 bg-white">
        <nav className="px-2 py-2.5 sm:px-4 max-w-screen-2xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center justify-between">
            <a href="#top" className="">
              <Image
                src={assets.logo}
                alt="logo"
                className="mr-16 cursor-pointer w-28"
              />
            </a>
            <ul className=" hidden md:flex items-center  space-x-4 text-sm font-medium gap-6 lg:gap-8 rounded-full px-12 py-3  shadow-sm bg-opacity-50">
              <li>
                <a
                  className="font-Ovo block text-base bg-transparent text-purple-700"
                  href="#top"
                >
                  Home
                </a>
              </li>
              <li>
                <button className=" flex items-center gap-2" type="button">
                  <a
                    className="font-Ovo block text-base  text-gray-700 hover:bg-gray-50 bg-transparent hover:text-purple-700"
                    href="#products"
                  >
                    Products{" "}
                  </a>
                  <Image
                    src={assets.downarrow}
                    alt="downarrow"
                    className="w-5"
                  />
                </button>
              </li>
              <li>
                <a
                  className="font-Ovo block text-base text-gray-700 hover:bg-gray-50 bg-transparent hover:text-purple-700"
                  href="#services"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-Ovo block text-base  text-gray-700 hover:bg-gray-50 bg-transparent hover:text-purple-700"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center justify-between gap-6 lg:gap-8   ml-auto cursor-pointer ">
            <a
              className="font-Ovo   flex items-stretch justify-center px-4 py-2 text-center font-medium focus:z-20 hover:text-[#57009C] focus:text-[#5709C] focus:outline-none border border-gray-300 text-gray-900 rounded-lg  "
              href="#login"
              type="button"
            >
              <span className="text-lg"></span>
              Login
            </a>{" "}
            <a
              className="font-Ovo flex items-stretch justify-center px-4 py-2 text-center font-medium focus:z-20 focus:outline-none text-white bg-purple-700 border border-transparent rounded-lg"
              href="#login"
            >
              Inquire Now
            </a>
          </div>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.hamburger} alt="" className="w-6" />
          </button>

          {/* mobile menu */}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-200 transition duration-500"
          >
            <div className="absolute right-6 top-6" onClick={closeMenu}>
              <Image
                src={assets.close}
                alt="close_icon"
                className="w-5 cursor-pointer"
              />
            </div>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#top">
                Home
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#products">
                Products{" "}
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#services">
                About
              </a>
            </li>
            <li>
              <a className="font-Ovo" onClick={closeMenu} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
