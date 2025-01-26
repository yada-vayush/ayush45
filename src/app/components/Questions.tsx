import React from "react";
import ToggleRow from "./ToggleRow";
import Button from "./Button";

const questions = [
  {
    text: "How do I apply for Loan",
    content:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
  {
    text: "What are the interest rates offered ?",
    content:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
  {
    text: "What kind of vehicles can I upload ?",
    content:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
  {
    text: "How can I keep track of potential ?",
    content:
      "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
  },
];
const Questions = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl text-center mx-auto ">
        <div className="mx-5 sm:mx-14 md:mx-28  pt-12 pb-3">
          <p className="text-black text-2xl font-bold lg:text-4xl mb-8">
            Frequently Asked Questions
          </p>

          {questions.map((item, id) => (
            <ToggleRow
              key={id}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              }
              text={item.text}
              content={item.content}
            />
          ))}
          <div className="flex items-center justify-center">
            <Button
              text="See all"
              isRightArrow={true}
              color="bg-purple-800"
              textcolor="text-white"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
