import React from "react";
import { Plus } from "lucide-react";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="m-2 mt-0 ">
      <div className="hero-section-bg min-h-[60vh] lg:h-[92vh] rounded-2xl p-15  w-full flex flex-col justify-center ">
        <div className="text-white flex items-end justify-between">
          <div>
            <h1 className="leading-[0.5]">
              <span className="text-[60px] font-medium ml-3 "> the</span> <br />
              <span className="text-[300px] font-semibold ">syntax</span>
            </h1>
            <div className="flex items-center justify-between my-[170px] ">
              <Plus className="text-[#e4e4e4]" />
              <Plus className="text-[#e4e4e4]" />
              <Plus className="text-[#e4e4e4]" />
            </div>
          </div>

          <div>
            <div className="font-bold text-[17px] flex flex-col gap-2 ">
              <p>Intuitive UI/UX Design </p>
              <p>Cross-Platform Mobile Apps </p>
              <p>Full-Stack Digital Platforms </p>
              <p>Growth-Driven Digital Marketing </p>
            </div>
            <div className="my-[170px]">
              <Plus className="text-[#e4e4e4]" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end ">
          <div className="max-w-[600px]">
            <p className="text-[#dddddd] text-[22px] font-medium indent-10 leading-[1.1] max-w-[600px]">
              No generic solutions. No empty promises.
              <span className="text-[#767676]">
                Just powerful digital experiences that help your business grow
                and your brand stand out.
              </span>
            </p>
          </div>

          <div className="text-white flex justify-between gap-10 items-end">
            <p className=" text-[14px] " >© {new Date().getFullYear()} the syntax.</p>
            <div>
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
