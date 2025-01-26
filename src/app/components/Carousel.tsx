"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselCardProps {
  cards: {
    heading?: string;
    image?: string | StaticImageData;
    content?: string;
    paragraph?: string;
    spam?: string;
  }[];
  autoSlideInterval?: number; // Interval for auto-slide (in ms)
}

const Carousel: React.FC<CarouselCardProps> = ({
  cards,
  autoSlideInterval = 5000, // Default to 5 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, autoSlideInterval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" w-full max-w-4xl mx-auto min-h-80">
      {/* Card */}
      <div
        className="p-12 flex flex-col items-center  bg-white rounded-lg  transition-transform transform"
        key={currentIndex}
      >
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          {cards[currentIndex].heading}
        </h2>
        <Image
          src={cards[currentIndex].image}
          alt={cards[currentIndex].heading}
          width={75}
          height={75}
          className="rounded-lg object-cover mb-4"
        />
        <p className="text-black text-wrap  text-lg text-center mb-4">
          {cards[currentIndex].content}
        </p>
        <p className="text-gray-500 text-sm text-center">
          <span className="text-black text-base">
            {" "}
            {cards[currentIndex].paragraph}{" "}
          </span>
          {cards[currentIndex].spam}
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-purple-700 focus:outline-none"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-purple-700 focus:outline-none"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
