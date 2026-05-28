"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

import logo from "../public/logo.svg";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={118} height={18} priority className="object-contain" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <CustomButton
            title="Login"
            containerStyles="bg-white border border-black text-black hover:bg-gray-100"
            textStyles="text-sm font-medium"
            handleClick={() => alert("Login Successful")}
          />

          <CustomButton
            title="Sign Up"
            containerStyles="bg-black text-white hover:bg-gray-800"
            textStyles="text-sm font-medium"
            handleClick={() => alert("Register Successful ")}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
