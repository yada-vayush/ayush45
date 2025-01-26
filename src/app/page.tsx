import Image from "next/image";
import About from "./components/About";
import Connected from "./components/Connected";
import Dealership from "./components/Dealership";
import Features from "./components/Features";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { assets } from "@/assets/assets";
import Footer from "./components/Footer";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <>
      <div className="font-normal bg-white text-black">
        <Navbar />
        <Header />
        <Dealership />
        <Product />
        <Features />
        <About />
        <Connected
          heading="Stay Connected"
          description="Follow OneLot on Facebook and Instagram to stay up to date with our
          latest offers, updates, and new product features."
          border={true}
        />
        <div className="bg-white my-12 mx-32">
          <Image
            src={assets.midImage}
            alt="midImage"
            className="w-full  object-contain"
          />
        </div>
        <Questions />
        <Connected
          heading="Get Started today"
          description="We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market"
          border={false}
        />

        <Footer />
      </div>
    </>
  );
}
