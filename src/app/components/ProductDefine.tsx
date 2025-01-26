import Image, { StaticImageData } from "next/image";
import React, { JSX } from "react";
import Button from "./Button";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface CardProp {
  heading: string;
  subHeading: string;
  content: string;
  points: { text: string }[];
  buttonText: string;
  color: string; // For subheading color
  src: string | StaticImageData; // Image source
  imagePosition?: "left" | "right";
  additionalContent?: string; // Prop for image placement
}

const ProductDefine: React.FC<CardProp> = ({
  heading,
  subHeading,
  content,
  points,
  buttonText,
  color,
  src,
  additionalContent,
  imagePosition = "left", // Default to left
}) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row  p-4  items-center   gap-6 justify-between  ${
        imagePosition == "right" ? "md:flex-row-reverse" : " "
      }`}
    >
      {/* Image Column */}
      <div className="  w-full md:w-3/5">
        <Image
          src={src}
          alt="ProductDefine Image"
          className="rounded-lg object-cover "
          width={800}
          height={652}
        />
      </div>

      {/* Content Column */}
      <div className="  w-full md:w-2/5 flex flex-col gap-5 text-left">
        {/* Heading */}
        <h2 className="text-black text-2xl font-bold ">{heading}</h2>

        {/* Subheading */}
        <h3 className={`text-lg font-semibold  ${color}`}>{subHeading}</h3>

        {/* Paragraph */}
        <p className="text-gray-500 text-base  font-normal  ">{content}</p>

        <hr className=" border-gray-300" />
        {/* Points with Icons */}
        <div className="">
          {points.map((point, index) => (
            <div key={index} className="flex   items-start gap-3 pt-2">
              <CheckCircleIcon className="w-5 h-5 text-purple-600" />
              <span className="text-black text-sm md:text-base font-medium tracking-tight">
                {point.text}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className=" border-gray-300" />

        {/* Paragraph */}
        <p className="text-gray-500 text-base lg:text-lg font-normal ">
          {additionalContent}
        </p>

        {/* Button */}
        <div className="flex justify-start">
          <Button
            text={buttonText}
            color="bg-purple-600"
            isRightArrow={true}
            textcolor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDefine;
