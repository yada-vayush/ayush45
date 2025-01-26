import Image, { StaticImageData } from "next/image";
import React from "react";
interface FeatureCard {
  src: string | StaticImageData;
  heading: string;
  content: string;
}
const FeatureCard: React.FC<FeatureCard> = ({ src, heading, content }) => {
  return (
    <div className=" w-full sm:w-auto mx-auto sm:mr-0 col-span-1  ">
      <div className="flex rounded-lg border border-gray-200 bg-white shadow-md flex-col  sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  sm:h-auto h-72 xl:h-80 items-center">
        <Image
          src={src}
          width={70}
          height={70}
          className="mt-6 rounded-lg"
          alt="featureimage"
        />
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <p className="text-black text-lg lf:text-2xl font-semibold tracking-tight">
            {heading}
          </p>
          <p className="text-gray-400 text-base font-normal xl:text-lg">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
