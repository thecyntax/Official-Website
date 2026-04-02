import React from "react";
import { Plus } from "lucide-react";

const reasons = [
  {
    id: "01",
    title: "Design that feels premium",
    description:
      "We create clean, modern interfaces with strong typography, balanced spacing, and a polished visual rhythm that makes your brand feel elevated.",
  },
  {
    id: "02",
    title: "Built for performance",
    description:
      "Every screen is designed to be fast, responsive, and conversion-focused, so your users get a smooth experience on every device.",
  },
  {
    id: "03",
    title: "Strategy beyond visuals",
    description:
      "We do not just make things look good. We align design, development, and marketing so the final product supports real business growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="p-2 sm:p-3 lg:p-2 w-full bg-[#f5f5f5]">
      <section className="w-full rounded-2xl overflow-hidden text-white bg-[#070707] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#1b1b1b] via-[#090909] to-[#050505] shadow-2xl">
        <div className="px-4 py-8 sm:py-10 md:py-12 mx-auto lg:m-10">
          {/* HEADER */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 mb-10 sm:mb-14 md:mb-20">
            {/* LEFT */}
            <div className="w-full lg:w-1/4 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border bg-black flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 font-medium text-[13px] sm:text-[15px]">
                Why choose us
              </span>
            </div>

            {/* CENTER */}
            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
              {/* 🔥 FIX: controlled heading */}
              <h1 className="font-bold tracking-tighter text-white leading-[0.9] text-[clamp(48px,14vw,120px)]">
                Trust.
              </h1>

              <span className="text-lg sm:text-xl lg:text-[2.2vw] font-bold tracking-tighter text-gray-400 mt-2 sm:mt-3">
                Quality / Speed / Strategy
              </span>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
              <p className="text-gray-400 text-[13px] sm:text-[15px] font-medium leading-[1.6] max-w-[260px]">
                We combine clean design, solid execution, and business-focused
                thinking to build digital experiences that actually matter.
              </p>
            </div>
          </div>

          {/* REASONS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-7 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-7">
                  <span className="text-gray-500 text-[11px] sm:text-sm font-medium tracking-[0.18em]">
                    ({item.id})
                  </span>

                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold tracking-tighter leading-[1.1] text-white mb-3 sm:mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[13px] sm:text-[15px] leading-[1.6] max-w-[320px]">
                  {item.description}
                </p>

                <div className="mt-5 sm:mt-7 h-px w-full bg-white/10" />

                <p className="mt-3 text-[10px] sm:text-[12px] uppercase tracking-[0.22em] text-gray-500">
                  The Cyntax
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-14 md:mt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8">
            <p className="text-gray-400 text-[13px] sm:text-[15px] md:text-[16px] max-w-[600px] leading-[1.6]">
              If you need a website, product experience, or marketing presence
              that feels refined and performs well, this section can help you
              position your brand with more confidence.
            </p>

            <button className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-[13px] sm:text-[15px] px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-[0_0_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
              Start your project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
