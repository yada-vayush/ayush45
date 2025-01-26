import { log } from "console";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface CardProp {
  heading?: string;
  subHeading?: string;
  content?: string;
  color?: string;
  src?: string | StaticImageData;
}
const Card: React.FC<CardProp> = ({
  heading,
  subHeading,
  content,
  color = "text-black",
  src,
}) => {
  return (
    <div className=" max-w-lg rounded-md  flex items-start flex-col md:flex-row gap-6 p-6 shadow-md md:shadow-none">
      {src && (
        <Image
          src={src}
          className="rounded-full object-cover "
          width={40}
          height={40}
          alt="image"
        />
      )}
      <div className="flex flex-col gap-0.5">
        <p className="text-black text-lg lg:text-2xl font-semibold tracking-tight">
          {heading}
        </p>

        <p
          className={`${color} text-base lg:text-lg font-semibold tracking-tight`}
        >
          {subHeading}
        </p>
        <p className="text-gray-500 text-sm font-normal lg:text-lg">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
