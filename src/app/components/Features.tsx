import React from "react";
import FeatureCard from "./FeatureCard";
import { assets } from "@/assets/assets";

const Features = () => {
  return (
    <div className="bg-white pb-12">
      <div className="text-center my-12 max-w-screen-2xl mx-auto">
        <h2 className="font-bold text-center text-black text-2xl mb-8">
          {" "}
          Why One Lot?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mx-6 xl:gap-12 xl:mx-12">
          <FeatureCard
            heading="Trust"
            content="Regulated by Securities and Exchange Commission (SEC) Phillippines"
            src={assets.trust}
          />
          <FeatureCard
            heading="High Amount"
            content="Get the highest loan amounts compared to other banks and lenders"
            src={assets.amount}
          />
          <FeatureCard
            heading="Fast"
            content="Get the money within a few hours on the same day"
            src={assets.fast}
          />
          <FeatureCard
            heading="Flexible"
            content="Loans are tailored to your needs "
            src={assets.flexible}
          />
          <FeatureCard
            heading="Easy"
            content="Run through an easy process and get your first loans within days"
            src={assets.easy}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
