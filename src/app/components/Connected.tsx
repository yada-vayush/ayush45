import React from "react";
import BorderButton from "./BorderButton";
import { assets } from "@/assets/assets";
import Button from "./Button";
interface BasicProps {
  border?: boolean;
  heading?: string;
  description?: string;
}
const Connected: React.FC<BasicProps> = ({ border, heading, description }) => {
  return (
    <div className="bg-white  mx-auto w-full my-28">
      <div className=" flex-col items-center">
        <p className="text-black text-2xl font-bold lg:text-4xl  text-center">
          {heading}
        </p>
        <p className="text-gray-500 text-base lg:text-xl font-normal mx-8 mt-2 text-center  md:w-[40%] md:mx-auto ">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8">
          {border == true ? (
            <>
              {" "}
              <BorderButton
                src={assets.facebook}
                text="Follow us on Facebook"
              />
              <BorderButton
                src={assets.instagram}
                text="Follow us on Instagram"
              />
            </>
          ) : (
            <Button
              text="Inquire now"
              isRightArrow={false}
              color="bg-purple-500"
              textcolor="text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Connected;
