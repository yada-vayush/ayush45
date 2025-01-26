import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface ButtonProp {
  text?: string;
  isRightArrow?: boolean;
  color?: string;
  textcolor?: string;
}
const Button: React.FC<ButtonProp> = ({
  text,
  isRightArrow = false,
  color = "bg-white",
  textcolor = "text-purple-600",
}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center font-medium py-2 focus:z-10 ${color} rounded-md focus:outline-none ${textcolor}  mt-8 cursor-pointer  p-2 `}
    >
      <span className="flex items-center gap-2 text-md">
        {text}
        {/* Arrow SVG with dynamic direction and purple color */}
        {isRightArrow && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 ${textcolor} `} // Rotate the arrow for direction
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </>
        )}
      </span>
    </button>
  );
};

export default Button;
