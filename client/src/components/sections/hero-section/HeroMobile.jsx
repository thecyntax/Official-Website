import React from "react";
import { Plus } from "lucide-react";
import Card from "./Card";

const HeroMobile = () => {
  return (
    <section className="p-2 pt-0 sm:p-3 lg:hidden w-full overflow-y-auto">
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#070707] text-white ring-1 ring-white/10">
        {/* background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[42px_42px]" />

        <div className="relative z-10 h-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col">
          {/* top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-2 gap-2 text-white/70 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase">
              <Plus className="w-4 h-4" />
              The Cyntax
            </div>
            <Plus className="w-4 h-4 text-white/45" />
          </div>

          {/* middle */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-[380px]">
              <p className="text-white/55 text-[12px] sm:text-[13px] leading-normal max-w-[260px] mb-4">
                We build digital experiences with sharp typography, calm
                spacing, and strong conversion intent.
              </p>

              <h1 className="flex flex-col tracking-tighter leading-[0.85]">
                <span className="text-[28px] sm:text-[34px] font-medium text-white/70 ml-1">
                  Craft the
                </span>

                <span className="font-bold text-[clamp(48px,16vw,90px)] leading-[0.9]">
                  Syntax.
                </span>
              </h1>

              <div className="mt-4 flex items-center gap-3 text-white/50">
                <Plus className="w-4 h-4" />
                <div className="h-px flex-1 bg-white/20" />
                <Plus className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col gap-3 sm:gap-4 pb-1">
            {/* 🔥 unified spacing block */}
            <div className="flex flex-col gap-2 mt-4">
              {/* services */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "UI/UX Systems",
                  "Web & App Development",
                  "Brand Identity",
                  "Marketing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] sm:text-[13px] font-medium text-white/85"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-5 backdrop-blur-sm">
                <p className="text-[14px] sm:text-[16px] font-medium leading-[1.3] text-white/90">
                  No templates. No noise.
                </p>
                <p className="mt-1 text-[12px] sm:text-[14px] leading-normal text-white/45">
                  Just refined digital products that help your business grow.
                </p>
              </div>
            </div>

            {/* CTA + footer */}
            <div className="flex flex-col gap-3">
              <div className="w-full">
                <Card />
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-[12px] text-white/40 uppercase tracking-[0.22em] border-t border-white/10 pt-3">
                <p>© {new Date().getFullYear()} the Cyntax.</p>
                <Plus className="w-4 h-4 text-white/50" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroMobile;
