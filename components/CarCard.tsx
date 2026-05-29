"use client";

import React, { useState } from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";

import car from "../public/hero.png";
import CarDetails from "./CarDetails";

const CarCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden p-5">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Toyota Supra</h2>

          <p className="mt-1 text-gray-500 text-sm">Sports Performance Car</p>
        </div>

        <div>
          <p className="text-xl font-bold text-black">
            ₹4,500
            <span className="text-sm text-gray-500 font-normal"> /day</span>
          </p>
        </div>
      </div>

      {/* Car Image */}
      <div className="relative w-full h-[200px] my-6 flex justify-center items-center">
        <Image
          src={car}
          alt="car"
          priority
          className="object-contain w-full h-full"
        />
      </div>

      {/* Features */}
      <div className="flex items-center justify-between border-t pt-5">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-900">Fuel</p>

          <span className="text-sm text-gray-500 mt-1">Petrol</span>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-900">Gear</p>

          <span className="text-sm text-gray-500 mt-1">Automatic</span>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-900">Seats</p>

          <span className="text-sm text-gray-500 mt-1">4 Seats</span>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6">
        <CustomButton
          title="View Details"
          containerStyles="w-full bg-black text-white hover:bg-gray-800 py-3"
          textStyles="text-sm font-medium"
          handleClick={() => setIsOpen(true)}
        />
      </div>

      <CarDetails
      isOpen={isOpen}
       closeModal={() => setIsOpen(false)}

      />
    </div>
  );
};

export default CarCard;
