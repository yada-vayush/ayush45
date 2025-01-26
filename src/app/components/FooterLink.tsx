import React from "react";
interface FooterProps {
  heading: string;
  options: {
    text?: string;
  }[];
}

const FooterLink: React.FC<FooterProps> = ({ heading, options }) => {
  return (
    <div className="mb-5 sm:mb-0 ">
      <span className="font-bold mb-2 block">{heading}</span>
      <div className="flex-col flex justify-between  ">
        {options.map((item, id) => (
          <>
            <a
              key={id}
              className="text-gray-700 hover:text-purple-600 "
              href="/"
            >
              {item.text}
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
