"use client";

import { useState } from "react";

import { years } from "@/constants/index.constants";
import { carsOptions } from "@/constants/index.constants";

import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");

  const [showDropDown, setShowDropDown] = useState(false);

  const filteredCars = carsOptions.filter((item) =>
    item.toLowerCase().includes(carName.toLowerCase()),
  );

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (carName) params.set("cn", carName);
    if (carModel) params.set("cm", carModel);
    if (fuel) params.set("f", fuel);
    if (year) params.set("y", year);

    router.push(`/?${params.toString()}`);
  };

  const handleClearSearch = () => {
    setCarName("");
    setCarModel("");
    setFuel("");
    setYear("");

    router.push("/");
  };

  return (
    <section className="w-full mt-2">
      <div className=" mx-auto py-6 flex flex-col lg:flex-row items-center gap-4">
        {/* Car Name */}
        <div className="flex-1 w-full relative">
          <input
            type="text"
            value={carName}
            placeholder="Car Name"
            onFocus={() => setShowDropDown(true)}
            onBlur={() => setShowDropDown(true)}
            onChange={(e) => {
              setCarName(e.target.value);
              setShowDropDown(true);
            }}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
          />

          {showDropDown && filteredCars.length > 0 && carName && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-xl mt-2 shadow-lg">
              {filteredCars.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setCarName(item);
                    setShowDropDown(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Car Model */}
        <div className="flex-1 w-full">
          <input
            type="text"
            value={carModel}
            placeholder="Car Model"
            onChange={(e) => setCarModel(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Fuel Dropdown */}
        <div className="w-full lg:w-[180px]">
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black bg-white"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          >
            <option value={""}>Fuel Type</option>
            <option value={"diesel"}>Diesel</option>
            <option value={"electric"}>Electric</option>
            <option value={"gas"}>Gas</option>
          </select>
        </div>

        {/* Year Dropdown */}
        <div className="w-full lg:w-[180px]">
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black bg-white"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>Year</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button and Clearing Button */}
        <div className="w-full lg:w-auto">
          <CustomButton
            title="Search"
            containerStyles="bg-black text-white hover:bg-gray-800 !px-4 py-3 w-full lg:w-auto mr-2"
            textStyles="text-sm font-medium flex items-center justify-center gap-2"
            handleClick={handleSearch}
          />

          <CustomButton
            title="Clear"
            containerStyles="bg-red-200 text-white hover:bg-red-500 !px-4 py-3 w-full lg:w-auto"
            textStyles="text-sm font-medium flex items-center justify-center gap-2"
            handleClick={handleClearSearch}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
