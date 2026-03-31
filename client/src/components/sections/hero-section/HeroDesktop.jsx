import React from "react";
import { Plus } from "lucide-react";
import Card from "./Card";
import HeroVideo from "../../../assets/videos/HeroVideo.mp4";
import GrainEffect from "../../../animation/GrainEffect";

const Hero = () => {
  return (
    <div className="m-2 mt-0 hidden lg:block">
      <section className="relative h-[92vh] overflow-hidden rounded-2xl bg-[#070707] text-white">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>

        {/* 🌑 Dark Overlay (for contrast + readability) */}
        <div className="absolute inset-0 bg-black/30 z-1" />

        {/* 🎞 Grain Effect */}
        <div className="absolute inset-0 w-full h-full z-2 mix-blend-screen opacity-50 pointer-events-none">
          <GrainEffect />
        </div>

        {/* ✨ Light Gradients */}
        <div className="absolute inset-0 z-3 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 z-3 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />

        {/* 🧱 MAIN GRID */}
        <div className="relative z-10 h-full grid grid-cols-12 px-10 xl:px-16 py-10 gap-6">
          {/* LEFT */}
          <div className="col-span-7 flex flex-col justify-between">
            {/* top label */}
            <div className="flex items-center gap-2 text-white/70 text-[12px] tracking-[0.25em] uppercase">
              <Plus className="w-4 h-4" />
              The Cyntax
            </div>

            {/* main text */}
            <div>
              <h1 className="flex flex-col tracking-tight leading-[0.78]">
                <span className="text-[48px] xl:text-[70px] font-medium text-white/70 ml-2">
                  Craft the
                </span>

                <span className="text-[140px] lg:text-[180px] xl:text-[240px] font-bold">
                  Syntax.
                </span>
              </h1>

              <div className="mt-6 flex items-center gap-4 text-white/50">
                <Plus className="w-4 h-4" />
                <div className="w-24 h-px bg-white/20" />
                <Plus className="w-4 h-4" />
              </div>
            </div>

            {/* bottom text */}
            <p className="text-[18px] xl:text-[20px] font-medium leading-[1.2] text-white/90 max-w-125">
              No generic solutions.
              <span className="text-white/40">
                {" "}
                Just powerful digital experiences that help your business grow.
              </span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-span-5 flex flex-col justify-between">
            {/* services */}
            <div className="flex flex-col items-end text-right gap-3 text-[14px] font-light text-white/80 leading-[0.5] ">
              <p className="text-white/80">&lt;full-stack.dev /&gt;</p>
              <p className="text-white/80">&lt;app.build /&gt;</p>
              <p className="text-white/80">&lt;ui-ux.design /&gt;</p>
              <p className="text-white/40">&lt;growth.marketing /&gt;</p>
            </div>

            {/* glass card */}
            <div className="flex justify-end">
              <div className="w-full max-w-90 rounded-3xl border border-white/10 bg-white/4 backdrop-blur-md p-6">
                <p className="text-[16px] font-medium text-white/90 leading-[1.4]">
                  No templates. No noise.
                </p>

                <p className="mt-2 text-[13px] text-white/40 leading-[1.6]">
                  Just refined digital products built with clarity and purpose.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px]">
                    Fast
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px]">
                    Clean
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px]">
                    Scalable
                  </span>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="flex items-end justify-between gap-6">
              <p className="text-[12px] text-white/40">
                © {new Date().getFullYear()}
              </p>

              <div className="scale-[0.9] origin-bottom-right">
                <Card />
              </div>
            </div>
          </div>
        </div>

        {/* border */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
      </section>
    </div>
  );
};

export default Hero;
