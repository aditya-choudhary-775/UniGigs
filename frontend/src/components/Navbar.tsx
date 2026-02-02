import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed inset-x-0 mx-auto flex w-full max-w-4xl items-center justify-between rounded-xl border border-gray-200 bg-cyan-50/80 px-3 py-3 backdrop-blur-3xl z-5">
      <span className="font-rubik-glitch cursor-pointer px-4 text-2xl text-teal-500">
        UniGigs
      </span>
      <div className="flex items-center justify-center gap-5 px-5 text-xs">
        <button className="cursor-pointer rounded-md bg-teal-100 px-4 py-2 tracking-wide text-green-700 shadow-md transition-all duration-200 text-shadow-2xs hover:bg-teal-200 hover:text-green-800 hover:shadow-xl">
          Login
        </button>
        <button className="cursor-pointer rounded-md bg-teal-400 px-3 py-2 text-white shadow-md transition-all duration-200 text-shadow-md hover:bg-teal-500 hover:shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};
