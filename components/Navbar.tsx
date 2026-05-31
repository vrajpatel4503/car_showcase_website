"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

import logo from "../public/logo.svg";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-white border-b">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-1 md:-px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={118}
              height={18}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <CustomButton
            title="Login"
            containerStyles="bg-white border border-black text-black hover:bg-gray-100"
            textStyles="text-sm font-medium"
            handleClick={() => router.push("/login")}
          />

          <CustomButton
            title="Register"
            containerStyles="bg-black text-white hover:bg-gray-800"
            textStyles="text-sm font-medium"
            handleClick={() => router.push("/register")}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
