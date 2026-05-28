"use client";

import React from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";

import hero from "../public/hero.png";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="container-width flex flex-col lg:flex-row items-center justify-between gap-10 py-10 lg:py-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
            Find, book, or rent a car — quickly and easily!
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Streamline your car rental experience with our effortless booking
            process and explore the best vehicles at unbeatable prices.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <CustomButton
              title="Explore Cars"
              containerStyles="bg-black text-white hover:bg-gray-800 px-6 py-3 w-full sm:w-auto"
              textStyles="text-sm font-medium"
              handleClick={() => alert("Explore Cars")}
            />

            <CustomButton
              title="Learn More"
              containerStyles="border border-black bg-white hover:bg-gray-100 px-6 py-3 w-full sm:w-auto"
              textStyles="text-sm font-medium text-black"
              handleClick={() => alert("Learn More")}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 relative w-full flex items-center justify-center min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]">
          {/* BACKGROUND SHAPE */}
          <div
            className="
              absolute
              right-[-60px]
              sm:right-[-40px]
              lg:right-0
              top-1/2
              -translate-y-1/2
              w-[220px]
              h-[220px]
              sm:w-[320px]
              sm:h-[320px]
              md:w-[400px]
              md:h-[380px]
              lg:w-[500px]
              lg:h-[450px]
              bg-blue-500
              rounded-tl-[120px]
              rounded-bl-[120px]
              sm:rounded-tl-[180px]
              sm:rounded-bl-[180px]
              rounded-tr-[40px]
              rounded-br-[40px]
            "
          />

          {/* IMAGE */}
          <div className="relative z-10 flex justify-center w-full">
            <Image
              src={hero}
              alt="hero image"
              priority
              className="
                w-full
                max-w-[260px]
                sm:max-w-[420px]
                md:max-w-[550px]
                lg:max-w-[700px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
