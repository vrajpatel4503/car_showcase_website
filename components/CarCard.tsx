"use client";

import React, { useState } from "react";
import Image from "next/image";

import hero from "../public/hero.png";
import tire from "../public/tire.svg"
import steeting from "../public/steering-wheel.svg"
import fuel from "../public/gas.svg"

import CustomButton from "./CustomButton";
import { capitalizeFirstLetter } from "@/utils";

import car from "../public/hero.png";
import CarDetails from "./CarDetails";
import { CarProps } from "@/types/index.types";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden p-4">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{capitalizeFirstLetter(`${car.make}`)}</h2>

          <p className="mt-1 text-gray-500 text-sm">{capitalizeFirstLetter(`${car.model}`)}</p>
        </div>

        <div>
          <p className="text-xl font-bold text-black">
            ₹4,500
            <span className="text-sm text-gray-500 font-normal"> /day</span>
          </p>
        </div>
      </div>

      {/* Car Image */}
      <div className="relative w-full h-[180px] my-6 flex justify-center items-center">
        <Image
          src={hero}
          alt="car"
          priority
          className="object-contain w-full h-full"
        />
      </div>

      <hr className="my-4" />

      {/* Features */}
      <div className="relative flex w-full">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={steeting}
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="car-card__icon">
            <Image src={tire} width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src={fuel} width={18} height={18} alt="seat" />
            <span className="text-sm text-gray-500 mt-1">{car.fuel_type}</span>
          </div>
        </div>
      </div>

      {/* Feature 3 */}

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
        car={car}
      />
    </div>
  );
};

export default CarCard;
