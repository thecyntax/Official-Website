// import React from "react";
// import { Plus } from "lucide-react";
// import Card from "./Card";

// const Hero = () => {
//   return (
//     <div className="m-2 mt-0 hidden lg:block">
//       <div className="hero-section-bg min-h-[60vh] xl:h-[92.2vh] rounded-2xl xl:p-15 w-full flex flex-col justify-center  lg:h-[92vh] lg:p-10 ">
//         <div className="text-white flex items-end justify-between">
//           <div>
//             <h1 className="flex flex-col tracking-tighter text-white leading-[0.1]">
//               <span className="xl:text-[60px] font-medium ml-3 lg:text-[40px] lg:-mb-8 xl:-mb-12">
//                 the
//               </span>
//               <span className="xl:text-[300px] font-bold lg:text-[200px] leading-[0.85]">
//                 syntax.
//               </span>
//             </h1>

//             <div className="flex items-center justify-between xl:my-42.5 lg:my-37.5">
//               <Plus className="text-[#e4e4e4]" />
//               <Plus className="text-[#e4e4e4]" /> 
//               <Plus className="text-[#e4e4e4]" />
//             </div>
//           </div>

//           <div>
//             <div className="font-bold xl:text-[17px] flex flex-col gap-2">
//               <p>Intuitive UI/UX Design</p>
//               <p>Cross-Platform Mobile Apps</p>
//               <p>Full-Stack Digital Platforms</p>
//               <p>Growth-Driven Digital Marketing</p>
//             </div>

//             <div className="xl:my-42.5 lg:my-37.5">
//               <Plus className="text-[#e4e4e4]  " />
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-between items-end">
//           <div className="xl:max-w-150">
//             <p className="text-[#dddddd] xl:text-[22px] font-medium indent-10 leading-[1.1] xl:max-w-150 lg:max-w-87.5 ">
//               No generic solutions. No empty promises.
//               <span className="text-[#767676]">
//                 Just powerful digital experiences that help your business grow
//                 and your brand stand out.
//               </span>
//             </p>
//           </div>

//           <div className="text-white flex justify-between gap-10 items-end">
//             <p className="xl:text-[14px] lg:text-[12px] ">
//               © {new Date().getFullYear()} the syntax.
//             </p>
//             <div>
//               <Card />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { Plus } from "lucide-react";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="m-2 mt-0 hidden lg:block">
      <section className="relative h-[92vh] overflow-hidden rounded-2xl bg-[#070707] text-white">

        {/* 🌌 Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)]" />

        {/* 🧱 MAIN GRID */}
        <div className="relative z-10 h-full grid grid-cols-12 px-10 xl:px-16 py-10 gap-6">

          {/* LEFT BIG TYPO */}
          <div className="col-span-7 flex flex-col justify-between">

            {/* top label */}
            <div className="flex items-center gap-2 text-white/70 text-[12px] tracking-[0.25em] uppercase">
              <Plus className="w-4 h-4" />
              The Syntax
            </div>

            {/* main text */}
            <div>
              <h1 className="flex flex-col tracking-tight leading-[0.78]">
                <span className="text-[48px] xl:text-[70px] font-medium text-white/70 ml-2">
                  craft the
                </span>

                <span className="text-[140px] lg:text-[180px] xl:text-[240px] font-bold">
                  syntax.
                </span>
              </h1>

              <div className="mt-6 flex items-center gap-4 text-white/50">
                <Plus className="w-4 h-4" />
                <div className="w-24 h-px bg-white/20" />
                <Plus className="w-4 h-4" />
              </div>
            </div>

            {/* bottom text */}
            <p className="text-[18px] xl:text-[20px] font-medium leading-[1.2] text-white/90 max-w-[500px]">
              No generic solutions.
              <span className="text-white/40">
                {" "}Just powerful digital experiences that help your business grow.
              </span>
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-5 flex flex-col justify-between">

            {/* top services */}
            <div className="flex flex-col items-end text-right gap-3 text-[14px] font-medium text-white/80">
              <p>UI/UX Systems</p>
              <p>Web Development</p>
              <p>Brand Identity</p>
              <p className="text-white/40">Marketing</p>
            </div>

            {/* center glass panel */}
            <div className="flex justify-end">
              <div className="w-full max-w-[360px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6">

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