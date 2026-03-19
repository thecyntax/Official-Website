import React from "react";
import { Plus } from "lucide-react";
import Card from "./Card";

const HeroMobile = () => {
  return (
    /* Mobile hero wrapper */
    <section className="p-2 pt-0 sm:p-3 sm:pt-0 lg:hidden w-full min-h-[93vh] flex flex-col">
      {/* Main hero container */}
      <div className="hero-section-bg relative flex-1 rounded-2xl p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-zinc-900 to-black ring-1 ring-white/10 shadow-2xl overflow-hidden">
        {/* Top section — Title */}
        <div className="z-10 mt-4">
          <h1 className="flex flex-col tracking-tighter text-white  ">
            <span className="text-xl  sm:text-2xl font-medium -mb-12 sm:-mb-17 ml-1 sm:ml-2">
              the
            </span>

            <span className="text-[22vw] sm:text-[16vw] font-bold bg-clip-text ">
              syntax.
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-8 opacity-60">
            <Plus size={20} className="text-zinc-300" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-500/50 to-transparent" />
            <Plus size={20} className="text-zinc-300" />
          </div>
        </div>

        {/* Middle section — Features & description */}
        <div className="z-10 mt-10 flex flex-col gap-10">
          {/* Feature tags */}
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Intuitive UI/UX",
              "Cross-Platform Apps",
              "Full-Stack Platforms",
              "Growth Marketing",
            ].map((feature, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-zinc-200 backdrop-blur-md"
              >
                {feature}
              </li>
            ))}
          </ul>

          {/* Description */}
          <div className="text-lg sm:text-xl font-medium leading-relaxed  text-white text-center">
            <p className="" > No generic solutions. No empty promises.</p>
            <p className="text-[#8b8b8b]">
              Just powerful digital experiences that help your business grow and
              your brand stand out.
            </p>
          </div>
        </div>

        {/* Bottom section — CTA card & footer */}
        <div className="z-10 mt-12 flex flex-col gap-8 w-full">
          <div className="w-full">
            <Card />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs sm:text-sm text-zinc-500 uppercase tracking-widest border-t border-white/10 pt-6">
            <p>© {new Date().getFullYear()} the syntax.</p>
            <Plus size={16} className="text-zinc-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
