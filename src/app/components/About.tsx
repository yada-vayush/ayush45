import React from "react";
import Carousel from "./Carousel";
import { assets } from "@/assets/assets";

const cards = [
  {
    heading: "Testimonials",
    image: assets.pic,
    content:
      "The Service of OneLot is top notch ,they act fast and can provide dealers with the funds  they need .when they need it",
    paragraph: "Mark Vergel de Dios",
    spam: "Owner,MVD Auto works",
  },

  {
    heading: "Testimonials",
    image: assets.pic,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo recusandae, voluptatum dignissimos voluptatem voluptatibus assumenda eveniet nostrum rem libero quos repellendus voluptate quam alias consectetur perspiciatis. Eveniet, exercitationem! Ducimus, ipsum!",
    paragraph: "Mark Vergel de Dios",
    spam: "Owner,MVD Auto works",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="text-center max-w-screen-2xl mx-auto">
        <Carousel cards={cards} autoSlideInterval={3000} />
      </div>
    </div>
  );
};

export default About;
