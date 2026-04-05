import React, { useState } from "react";
import { Plus } from "lucide-react";
import Card from "./Card";
import HeroVideo from "../../../assets/videos/HeroVideo.mp4";
import HeroBgImg from "../../../assets/images/hero-images/hero-bg-img.png";
import GrainEffect from "../../../animation/GrainEffect";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);

  return (
    <div className="m-2 mt-0 hidden lg:block">
      {/* ✅ FIXED HEIGHT (NO MORE VH BUG) */}
      <section className="relative h-[calc(100vh-56px-8px)] lg:h-[calc(100vh-48px-8px)] xl:h-[calc(100vh-60px-8px)] overflow-hidden rounded-2xl bg-[#070707] text-white transition-opacity duration-1000">
        {" "}
        {/* 🎥 Background Video / Fallback */}
        {videoError ? (
          <img
            src={HeroBgImg}
            alt="Hero Background"
            onLoad={() => setMediaLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-2000 ease-out ${
              mediaLoaded
                ? "opacity-100 blur-0 scale-100"
                : "opacity-0 blur-md scale-105"
            }`}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setMediaLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-2000 ease-out ${
              mediaLoaded
                ? "opacity-100 blur-0 scale-100"
                : "opacity-0 blur-md scale-105"
            }`}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        )}
        {/* 🌑 Overlay */}
        <div className="absolute inset-0 bg-black/30 z-1" />
        {/* 🎞 Grain */}
        <div className="absolute inset-0 z-2 mix-blend-screen opacity-50 pointer-events-none">
          <GrainEffect />
        </div>
        {/* ✨ Light gradients */}
        <div className="absolute inset-0 z-3 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 z-3 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
        {/* 🧱 MAIN GRID */}
        <div className="relative z-10 h-full min-h-full grid grid-cols-12 px-10 xl:px-16 py-10 gap-6">
          {/* LEFT */}
          <div className="col-span-7 flex flex-col justify-between">
            {/* top */}
            <div className="flex items-center gap-2 text-white/70 text-[12px] tracking-[0.25em] uppercase">
              <Plus className="w-4 h-4" />
              The Cyntax
            </div>

            {/* main text */}
            <div>
              <h1 className="flex flex-col leading-[0.78]">
                <span className="text-[48px] xl:text-[70px] tracking-tight font-medium text-white/70 ml-2">
                  Craft the
                </span>

                <span className="text-[140px] lg:text-[180px] xl:text-[220px] tracking-tighter font-bold">
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
            <p className="text-[16px] xl:text-[18px] font-medium leading-[1.3] text-white/90 max-w-[500px]">
              No generic solutions.
              <span className="text-white/40">
                {" "}
                Just powerful digital experiences that help your business grow.
              </span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-span-5 flex flex-col justify-between gap-10">
            {/* services */}
            <div className="flex flex-col items-end text-right gap-3 text-[14px] font-light text-white/80 leading-[0.9]">
              <p>&lt;full-stack.dev /&gt;</p>
              <p>&lt;app.build /&gt;</p>
              <p>&lt;ui-ux.design /&gt;</p>
              <p className="text-white/40">&lt;growth.marketing /&gt;</p>
            </div>

            {/* glass card */}
            <div className="flex justify-end">
              <div className="w-full max-w-[360px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                <p className="text-[15px] font-medium text-white/90 leading-[1.4]">
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
