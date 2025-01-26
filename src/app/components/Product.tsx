import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import ProductDefine from "./ProductDefine";
import { assets } from "@/assets/assets";

const Product = () => {
  return (
    <div className="bg-gray-50 mb-12">
      <div className="max-w-screen-xl mx-auto flex-col items-center justify-center">
        {/* Image on Left */}
        <div className="">
          <ProductDefine
            heading="Car Financing"
            subHeading="Dealer Loans"
            content="OneLot's working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours."
            points={[
              {
                text: "Interest as low as 1.8% per month with daily calculation of interest",
              },
              {
                text: "Financing up to 70% of the vehicle purchase",
              },
              {
                text: "Financing period up to 90 days with a flexible repayment schedule at any point",
              },
            ]}
            additionalContent="Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits"
            buttonText="View Loans"
            color="text-black"
            src={assets.leftImage} // Replace with your image path
            imagePosition="left"
          />
        </div>
        <div className="mt-16">
          {/* Image on Right */}
          <ProductDefine
            heading="Dealership Management System"
            content="OneLot's digital platform has been build with the single goal to help used car dealers to operate their business more efficiently"
            subHeading=""
            points={[
              {
                text: "Inventory Management:  Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.",
              },
              {
                text: "Marketing Tools:  Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click. ",
              },
              {
                text: "Marketing Insights: Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.",
              },
            ]}
            additionalContent="Sign-up OneLot's dealer platform today, and your cars easier"
            buttonText="Explore Now"
            color="text-blue-500"
            src={assets.rightImage} // Replace with your image path
            imagePosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
