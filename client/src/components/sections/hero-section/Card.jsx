


import React from "react";
import Lottie from "lottie-react";
import JsonAnimation from "../../../assets/lottie/hero-lottie/AIlogoForiday.json";

const Card = () => {
  return (
    <div
      className="group/card flex flex-col items-center text-center
      lg:flex-row lg:items-center lg:text-left
      gap-4 sm:gap-5
      bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl
      px-4 py-4 sm:px-6 sm:py-5
      w-full lg:max-w-[360px]
      hover:shadow-2xl transition-all duration-500"
    >
      {/* Lottie */}
      <div className="group-hover/card:-translate-y-2 transition-transform duration-500 ease-in-out shrink-0">
        <Lottie
          animationData={JsonAnimation}
          loop
          autoplay
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-2">
        <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-gray-900 leading-tight">
          Got an idea you want to build?
        </h3>

        <p className="text-[13px] sm:text-[14px] text-gray-500">
          Let’s bring it to life.
        </p>

        {/* Button */}
        <div className="relative group w-fit mt-2">
          <div className="absolute -inset-0.5 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-60 transition duration-500 group-hover:duration-200 animate-tilt"></div>

          <button
            className="relative flex items-center cursor-pointer gap-3
            bg-black text-white px-4 sm:px-5 py-2 rounded-full leading-none
            transition-all duration-200 hover:bg-zinc-900 active:scale-95"
          >
            <span className="text-[12px] sm:text-[13px] font-semibold">
              Get in Touch
            </span>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-3 w-3 rounded-full bg-white/40 scale-0 group-active:scale-150 transition-transform duration-200"></div>
              <div className="relative h-2 w-2 rounded-full bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;