// import React from "react";
// import { Plus } from "lucide-react";
// import Card from "./Card";

// const HeroMobile = () => {
//   return (
//     /* Mobile hero wrapper */
//     <section className="p-2 pt-0 sm:p-3 sm:pt-0 lg:hidden w-full min-h-[93vh] flex flex-col">
//       {/* Main hero container */}
//       <div className="hero-section-bg relative flex-1 rounded-2xl p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-zinc-900 to-black ring-1 ring-white/10 shadow-2xl overflow-hidden">
//         {/* Top section — Title */}
//         <div className="z-10 mt-4">
//           <h1 className="flex flex-col tracking-tighter text-white  ">
//             <span className="text-xl  sm:text-2xl font-medium -mb-12 sm:-mb-17 ml-1 sm:ml-2">
//               the
//             </span>

//             <span className="text-[22vw] sm:text-[16vw] font-bold bg-clip-text ">
//               Cyntax.
//             </span>
//           </h1>

//           {/* Divider */}
//           <div className="flex items-center gap-4 mt-8 opacity-60">
//             <Plus size={20} className="text-zinc-300" />
//             <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-500/50 to-transparent" />
//             <Plus size={20} className="text-zinc-300" />
//           </div>
//         </div>

//         {/* Middle section — Features & description */}
//         <div className="z-10 mt-10 flex flex-col gap-10">
//           {/* Feature tags */}
//           <ul className="flex flex-wrap gap-2 sm:gap-3">
//             {[
//               "Intuitive UI/UX",
//               "Cross-Platform Apps",
//               "Full-Stack Platforms",
//               "Growth Marketing",
//             ].map((feature, i) => (
//               <li
//                 key={i}
//                 className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-zinc-200 backdrop-blur-md"
//               >
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           {/* Description */}
//           <div className="text-lg sm:text-xl font-medium leading-relaxed  text-white text-center">
//             <p className="" > No generic solutions. No empty promises.</p>
//             <p className="text-[#8b8b8b]">
//               Just powerful digital experiences that help your business grow and
//               your brand stand out.
//             </p>
//           </div>
//         </div>

//         {/* Bottom section — CTA card & footer */}
//         <div className="z-10 mt-12 flex flex-col gap-8 w-full">
//           <div className="w-full">
//             <Card />
//           </div>

//           {/* Footer */}
//           <div className="flex justify-between items-center text-xs sm:text-sm text-zinc-500 uppercase tracking-widest border-t border-white/10 pt-6">
//             <p>© {new Date().getFullYear()} the Cyntax.</p>
//             <Plus size={16} className="text-zinc-400 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroMobile;


import React from "react";
import { Plus } from "lucide-react";
import Card from "./Card";

const HeroMobile = () => {
  return (
    <section className="p-2 pt-0 sm:p-3 sm:pt-0 lg:hidden w-full h-[93vh]">
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#070707] text-white ring-1 ring-white/10 shadow-2xl">
        {/* background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative z-10 h-full px-5 sm:px-8 py-5 sm:py-7 flex flex-col">
          {/* top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/70 text-[11px] tracking-[0.24em] uppercase">
              <Plus className="w-4 h-4" />
              The Cyntax
            </div>

            <div className="flex items-center gap-2 text-white/45">
              <Plus className="w-4 h-4" />
            </div>
          </div>

          {/* middle */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-[420px]">
              <p className="text-white/55 text-[13px] leading-[1.6] max-w-[280px] mb-5">
                We build digital experiences with sharp typography, calm spacing,
                and strong conversion intent.
              </p>

              <h1 className="flex flex-col tracking-tighter leading-[0.82]">
                <span className="text-[34px] sm:text-[40px] font-medium text-white/70 ml-1">
                  craft the
                </span>
                <span className="text-[18vw] sm:text-[16vw] font-bold">
                  Cyntax.
                </span>
              </h1>

              <div className="mt-5 flex items-center gap-3 text-white/50">
                <Plus className="w-4 h-4" />
                <div className="h-px flex-1 bg-white/20" />
                <Plus className="w-4 h-4" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {[
                  "UI/UX Systems",
                  "Web Development",
                  "Brand Identity",
                  "Marketing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-[12px] sm:text-[13px] font-medium text-white/85"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col gap-4 sm:gap-5 pb-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-sm">
              <p className="text-[15px] sm:text-[16px] font-medium leading-[1.35] text-white/90">
                No templates. No noise.
              </p>
              <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/45">
                Just refined digital products that help your business grow.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-full scale-[0.98] origin-bottom">
                <Card />
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-white/40 uppercase tracking-[0.22em] border-t border-white/10 pt-4">
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