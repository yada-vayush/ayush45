import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-sm rounded-md">
      <div className="text-center max-w-screen-2xl mx-auto">
        <div className="mx-10 sm:mx-14 md:mx-28 lg:mx-32   my-12 lg:mt-12">
          <h1 className="text-black  font-bold text-5xl ">
            Grow your dealership with working capital loans and digital tools
            from OneLot
          </h1>
          <p className="text-gray-400 text-xl font-medium lg:text-xl mt-8 md:mx-52 ">
            We enable dealers to buy more cars through our working capital loan
            solutions and sell cars more efficiently through our Dealership
            Management System with its inventory management, marketing solutions
            and market insights
          </p>
        </div>
        <a
          className="font-Ovo  items-stretch justify-center px-4 py-2 text-center font-medium focus:z-20 focus:outline-none text-white bg-purple-900/80  border border-transparent inline-block mb-12 rounded-md"
          href="#login"
        >
          Inquire Now
        </a>

        <div className="relative mb-12">
          <Image
            src={assets.home}
            alt={"homeImage"}
            className="w-[609px] lg:w-[1080px]  h-auto object-contain mx-auto "
          />
        </div>

        <div className="mb-12">
          <p className="text-gray-400 text-base font-normal lg:text-xl">
            Regulated by
          </p>
          <div className="relative">
            <Image
              src={assets.regulated}
              alt="logo"
              className="object-contain mx-auto w-[150px] lg:w-[250px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
