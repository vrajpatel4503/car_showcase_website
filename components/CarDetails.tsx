"use client";

import React from "react";
import Image from "next/image";

import { CarProps } from "../types/index.types";

import hero from "../public/hero.png";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-gray-100 text-xl transition hover:bg-gray-200
          "
        >
          ×
        </button>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="flex-1">
            {/* Image */}
            <div className="relative flex h-[320px] items-center justify-center rounded-2xl bg-gray-50">
              <Image
                src={hero}
                alt="car image"
                fill
                priority
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold capitalize">
              {/* {car.make} {car.model} */}j
            </h2>

            <div className="mt-8 flex flex-col gap-5">
              {/* <DetailItem title="Make" value={car.make} /> */}
              <DetailItem title="Make" value="l" />

              {/* <DetailItem title="Model" value={car.model} /> */}
              <DetailItem title="Make" value="l" />

              {/* <DetailItem title="Year" value={car.year} /> */}
              <DetailItem title="Make" value="l" />

              {/* <DetailItem title="Fuel Type" value={car.fuel_type} /> */}
              <DetailItem title="Make" value="l" />

              <DetailItem
                title="Transmission"
                // value={car.transmission === "a" ? "Automatic" : "Manual"}
                value="j"
              />

              {/* <DetailItem title="Drive" value={car.drive.toUpperCase()} />
               */}
              <DetailItem title="Make" value="l" />

              {/* <DetailItem title="Cylinder" value={car.cylinders} /> */}
              <DetailItem title="Make" value="l" />

              {/* <DetailItem title="Displacement" value={car.displacement} /> */}
              <DetailItem title="Make" value="l" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

interface DetailItemProps {
  title: string;
  value: string | number;
}

const DetailItem = ({ title, value }: DetailItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4">
      <span className="text-gray-500">{title}</span>

      <span className="font-semibold text-black">{value}</span>
    </div>
  );
};
