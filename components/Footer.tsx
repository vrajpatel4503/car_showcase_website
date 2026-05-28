import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants/index.constants";

import logo from "../public/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Top Footer */}
      <div className="container-width py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="max-w-sm">
            <Image
              src={logo}
              alt="logo"
              width={130}
              height={24}
              className="object-contain"
            />

            <p className="mt-6 text-gray-600 leading-7 text-sm">
              Discover premium car rental experiences with CarHub. Find the
              perfect vehicle for your journey quickly, easily, and affordably.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              ©2026 CarHub. All Rights Reserved.
            </p>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            {footerLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {link.title}
                </h3>

                <div className="flex flex-col gap-3">
                  {link.links.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className=" text-gray-500 hover:text-black transition-all duration-200 text-sm w-fit
                      "
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="container-width py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Built with modern web technologies for seamless car booking.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
