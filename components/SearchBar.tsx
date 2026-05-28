"use client";

import React from "react";

import CustomButton from "./CustomButton";

const SearchBar = () => {
  return (
    <section className="w-full mt-10">
      <div className="max-w-[1440px] mx-auto shadow-lg py-6 flex flex-col lg:flex-row items-center gap-4">
        {/* Car Name */}
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Car Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Car Model */}
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Car Model"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Fuel Dropdown */}
        <div className="w-full lg:w-[180px]">
          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black bg-white">
            <option>Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Year Dropdown */}
        <div className="w-full lg:w-[180px]">
          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black bg-white">
            <option>Year</option>
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="w-full lg:w-auto">
          <CustomButton
            title="Search"
            containerStyles="bg-black text-white hover:bg-gray-800 px-6 py-3 w-full lg:w-auto"
            textStyles="text-sm font-medium flex items-center justify-center gap-2"
            handleClick={() => console.log("Search")}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
