import Image, { StaticImageData } from "next/image";
import React from "react";
interface Button {
  text?: string;
  src?: string | StaticImageData;
}
const BorderButton: React.FC<Button> = ({ text, src }) => {
  return (
    <button
      type="button"
      className="flex justify-center text-center font-medium focus:z-10 focus:outline-none rounded-lg text-black border border-black mb-4 sm:mb-0 sm:mr-4 bg-white"
    >
      <span className="flex items-stretch rounded-md px-4 py-2 text-sm">
        <div className="flex items-center gap-3">
          <Image src={src} alt="icon" className="w-5 h-5" />
          <p>{text}</p>
        </div>
      </span>
    </button>
  );
};

export default BorderButton;
