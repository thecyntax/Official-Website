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
    <div className="p-2 sm:p-3 lg:p-2 w-full bg-[#f5f5f5]">
      <section className="w-full rounded-2xl overflow-hidden text-white bg-[#070707] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1b1b1b] via-[#090909] to-[#050505] shadow-2xl">
        <div className="px-4 py-10 md:py-12 mx-auto lg:m-10">
          {/* Header */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-8 mb-16 md:mb-24">
            <div className="w-full lg:w-1/4 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full border-[1.5px] bg-black flex items-center justify-center text-sm leading-none shrink-0 pt-px">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 font-medium text-[15px]">
                Why choose us
              </span>
            </div>

            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
              <h1 className="text-[18vw] lg:text-[10vw] leading-[0.85] font-bold tracking-tighter text-white">
                Trust.
              </h1>
              <span className="text-3xl lg:text-[2.5vw] font-bold tracking-tighter text-gray-400 mt-2 lg:mt-4">
                Quality / Speed / Strategy
              </span>
            </div>

            <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
              <p className="text-gray-400 text-[15px] font-medium leading-[1.6] max-w-[260px]">
                We combine clean design, solid execution, and business-focused
                thinking to build digital experiences that actually matter.
              </p>
            </div>
          </div>

          {/* Reasons */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-gray-500 text-sm font-medium tracking-[0.18em]">
                    ({item.id})
                  </span>

                  <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold tracking-tighter leading-[1.02] text-white mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-[1.7] max-w-[360px]">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <p className="mt-4 text-[12px] uppercase tracking-[0.22em] text-gray-500">
                  The Syntax
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <p className="text-gray-400 text-[15px] md:text-[16px] max-w-[620px] leading-[1.7]">
              If you need a website, product experience, or marketing presence
              that feels refined and performs well, this section can help you
              position your brand with more confidence.
            </p>

            <button className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-[15px] px-10 py-4 rounded-full shadow-[0_0_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
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