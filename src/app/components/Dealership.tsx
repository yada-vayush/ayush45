import React from "react";
import Button from "./Button";
import Card from "./Card";
import { assets } from "@/assets/assets";

const Dealership = () => {
  return (
    <div className="bg-white mb-32">
      <div className=" max-w-screen-2xl mx-auto md:grid-cols-2 grid grid-cols-1 gap-8 items-center text-left  ">
        <div className="mx-5 md:mx-24 md:my-12 flex flex-col items-start justify-start  border-b border-gray-300 md:border-none">
          <p className="text-black text-2xl font-bold lg:text-4xl ">
            {" "}
            Everything you need to grow your business
          </p>
          <p className="text-gray-500 text-base lg:text-xl font-normal mt-8">
            OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealership. We also offer digital tools for
            streamlined operations and growth of your dealership.
          </p>
          <div className="self-start">
            <Button text="Learn more" isRightArrow={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mx-5 md:mx-12  ">
          <Card
            heading="Dealer Loans"
            subHeading="Accelerate your growth with tailored loan  solutions"
            content="Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights."
            color="text-cyan-500"
            src={assets.band1}
          />
          <Card
            heading="Dealership Management System"
            subHeading="Enhance Efficiency and Sales with free digital tools for car dealership"
            color="text-purple-500"
            content="OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations."
            src={assets.band}
          />
        </div>
      </div>
    </div>
  );
};

export default Dealership;
