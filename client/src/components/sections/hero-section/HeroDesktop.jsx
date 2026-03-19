// import React from "react";
// import { Plus } from "lucide-react";
// import Card from "./Card";

// const Hero = () => {
//   return (
//     <div className="m-2 mt-0 hidden lg:block ">
//       <div className="hero-section-bg min-h-[60vh] lg:h-[92vh] rounded-2xl p-15  w-full flex flex-col justify-center ">
//         <div className="text-white flex items-end justify-between">
//           <div>
//             <h1 className="leading-[0.5]">
//               <span className="text-[60px] font-medium ml-3 "> the</span> <br />
//               <span className="text-[300px] font-semibold ">syntax</span>
//             </h1>
//             <div className="flex items-center justify-between my-[170px] ">
//               <Plus className="text-[#e4e4e4]" />
//               <Plus className="text-[#e4e4e4]" />
//               <Plus className="text-[#e4e4e4]" />
//             </div>
//           </div>

//           <div>
//             <div className="font-bold text-[17px] flex flex-col gap-2 ">
//               <p>Intuitive UI/UX Design </p>
//               <p>Cross-Platform Mobile Apps </p>
//               <p>Full-Stack Digital Platforms </p>
//               <p>Growth-Driven Digital Marketing </p>
//             </div>
//             <div className="my-[170px]">
//               <Plus className="text-[#e4e4e4]" />
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-between items-end ">
//           <div className="max-w-[600px]">
//             <p className="text-[#dddddd] text-[22px] font-medium indent-10 leading-[1.1] max-w-[600px]">
//               No generic solutions. No empty promises.
//               <span className="text-[#767676]">
//                 Just powerful digital experiences that help your business grow
//                 and your brand stand out.
//               </span>
//             </p>
//           </div>

//           <div className="text-white flex justify-between gap-10 items-end">
//             <p className=" text-[14px] " >© {new Date().getFullYear()} the syntax.</p>
//             <div>
//               <Card/>
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
      <div className="hero-section-bg min-h-[60vh] xl:h-[92vh] rounded-2xl xl:p-15 w-full flex flex-col justify-center  lg:h-[92vh] lg:p-10 ">
        <div className="text-white flex items-end justify-between">
          
          <div>
            <h1 className="leading-[0.5]">
              <span className="xl:text-[60px] font-medium ml-3 lg:text-[40px] ">the</span> <br />
              <span className="xl:text-[300px] font-semibold lg:text-[200px]">syntax</span>
            </h1>

            <div className="flex items-center justify-between xl:my-42.5 lg:my-37.5">
              <Plus className="text-[#e4e4e4]" />
              <Plus className="text-[#e4e4e4]" />
              <Plus className="text-[#e4e4e4]" />
            </div>
          </div>

          <div>
            <div className="font-bold xl:text-[17px] flex flex-col gap-2">
              <p>Intuitive UI/UX Design</p>
              <p>Cross-Platform Mobile Apps</p>
              <p>Full-Stack Digital Platforms</p>
              <p>Growth-Driven Digital Marketing</p>
            </div>

            <div className="xl:my-42.5 lg:my-37.5">
              <Plus className="text-[#e4e4e4]  " />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="xl:max-w-150">
            <p className="text-[#dddddd] xl:text-[22px] font-medium indent-10 leading-[1.1] xl:max-w-150 lg:max-w-87.5 ">
              No generic solutions. No empty promises.
              <span className="text-[#767676]">
                Just powerful digital experiences that help your business grow
                and your brand stand out.
              </span>
            </p>
          </div>

          <div className="text-white flex justify-between gap-10 items-end">
            <p className="xl:text-[14px] lg:text-[12px] ">
              © {new Date().getFullYear()} the syntax.
            </p>
            <div>
              <Card />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;