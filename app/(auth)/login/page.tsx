"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-2">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 border">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue exploring cars
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-black
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-black
              "
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-black"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-black
              py-3
              text-white
              font-medium
              transition
              hover:bg-gray-800
            "
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-black hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}