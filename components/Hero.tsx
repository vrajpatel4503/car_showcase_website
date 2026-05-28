"use client";

import React from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";

import hero from "../public/hero.png"

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white border">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-6 gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Find, book, or rent a car — quickly and easily!
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Streamline your car rental experience with our effortless booking
            process and explore the best vehicles at unbeatable prices.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <CustomButton
              title="Explore Cars"
              containerStyles="bg-black text-white hover:bg-gray-800 px-6 py-3"
              textStyles="text-sm font-medium"
              handleClick={() => alert("Explore Cars")}
            />

            <CustomButton
              title="Learn More"
              containerStyles="border border-black bg-white hover:bg-gray-100 px-6 py-3"
              textStyles="text-sm font-medium text-black"
              handleClick={() => alert("Learn More")}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative flex justify-center items-center w-full min-h-[500px]">
          {/* Background Shape */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[400px] bg-blue-500 rounded-tl-[200px] rounded-bl-[200px] rounded-tr-[40px] rounded-br-[40px]"
          />

          {/* Overlay Image */}
          <div className="relative z-10 w-full h-[400px]">
            <Image
              src={hero}
              alt="hero image"
              // fill
              priority
              className="object-contain"
              height={500}
              width={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
