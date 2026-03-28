import React from "react";
import NewsLetter from "./footer-components/NewsLetter";
import { Plus } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { AtSign, Mail } from "lucide-react";
import SectionTwo from "./footer-components/SectionTwo";

const Footer = () => {
  return (
    <div>
      <div className="px-4 py-10 md:py-12 lg:py-16 mx-auto lg:m-10 ">
        {/* section one  */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-stretch">
          {/* quote - flexible column */}
          <div className="flex-1 min-w-0 flex flex-col  gap-6">
            <p
              className="text-[#767676] text-2xl sm:text-2xl md:text-3xl font-medium 
                        sm:text-left md:indent-8 lg:indent-12"
            >
              &nbsp; &nbsp; &nbsp; Whether you’re looking to build a stunning
              website, boost your brand, or drive measurable results,{" "}
              <span className="text-black">we’re here to help.</span>
            </p>

            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://placehold.co/200x200"
                alt="placeholder"
              />
              <div>
                <p className="font-semibold text-sm md:text-base">Steve Jobs</p>
                <p className="text-[#767676] text-[11px] md:text-[12px]">
                  Co-founder of Apple
                </p>
              </div>
            </div>
          </div>

          {/* newsletter - flexible column */}
          <div className="flex-1 min-w-0">
            <NewsLetter />
          </div>
        </div>

        {/* section two  */}
        <div>
          <SectionTwo />
        </div>
      </div>
      <div className="bg-black py-4 sm:py-6 px-4 sm:px-6 md:px-10 md:pb-[120px] pb-[120px] w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-[#b3b3b3] font-medium text-[12px] sm:text-[13px] md:text-[14px]">
            &copy; {new Date().getFullYear()} The Syntax. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-[12px] sm:text-[13px] md:text-[14px] font-medium">
            <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
