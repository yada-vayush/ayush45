import { assets } from "@/assets/assets";
import { assert } from "console";
import Image from "next/image";
import React from "react";
import FooterLink from "./FooterLink";
const options = [
  { text: "Home" },
  { text: "Features" },
  { text: "About" },
  { text: "Contact" },
];
const Footer = () => {
  return (
    <div className="w-full rounded-lg shadow-md md:flex md:items-center md:justify-between bg-gray-100">
      <div className="max-w-screen-2xl mx-auto text-center p-14 md:px-24 md:py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <Image src={assets.logo} width={150} height={150} alt="logo" />
          <div className="   hidden md:flex gap-x-12 text-start">
            {options.map((item, key) => (
              <a
                key={key}
                className="text-gray-700 hover:text-purple-600  "
                href="/"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-3">
          <span className="text-gray-400 text-base">ENG</span>{" "}
          <Image src={assets.american} className="w-4 h-4 " alt="arrow" />
          <Image src={assets.downarrow} className="w-4 h-4 " alt="arrow" />
        </div>
        <hr className="w-full border-gray-300 sm:mx-auto lg:my-8 my-6" />
        <div className="w-full md:flex-col md:flex hidden  justify-start items-start gap-3 ">
          <span className="text-gray-500 ">
            © 2023 OneLot Technologies Incorporated Pte. Ltd . All Rights
            Reserved.
          </span>
          <div className="flex justify-between items-center w-full ">
            <span className="text-gray-500 ">
              © 2023 OneLot Financing Corporation All Rights Reserved.
            </span>
            <div className="flex gap-x-2">
              <Image src={assets.facebook} className="w-4 h-4" alt="facebook" />
              <Image
                src={assets.instagram}
                className="w-4 h-4"
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
