"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface ToggleRowProps {
  icon: React.ReactNode; // Icon component
  text: string; // Text for the row
  content: string; // Content to display in the second row
}

const ToggleRow: React.FC<ToggleRowProps> = ({ icon, text, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-2xl min-w-80 mx-auto px-4 py-2   ">
      {/* First Row */}
      <div className="flex justify-between items-center pb-3 border-b border-gray-400">
        <div className="flex items-center gap-4 ">
          {/* Icon */}
          <div className="w-6 h-6 text-gray-500 ">{icon}</div>
          {/* Text */}
          <p
            className={`${
              isExpanded ? "text-black" : "text-gray-400"
            } font-medium `}
          >
            {text}
          </p>
        </div>
        {/* Button */}
        <button
          onClick={handleToggle}
          className="p-1 text-gray-500 hover:text-black focus:outline-none"
        >
          {isExpanded ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Second Row (Toggle Content) */}
      {isExpanded && (
        <div className="mt-4 text-gray-600 pb-5 border-b border-gray-400">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default ToggleRow;
