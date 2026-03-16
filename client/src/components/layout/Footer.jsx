// import React from "react";
// import NewsLetter from "./footer-components/NewsLetter";

// const Footer = () => {
//   return (
//     <div className="m-10">
//       {/* responsive 2-column: stacked on small, equal halves on md+ */}
//       <div className="flex flex-col md:flex-row gap-5 items-stretch">
//         {/* quote - takes half width on md+ */}
//         <div className="w-full md:w-1/2 flex flex-col gap-10">
//           <p className="text-[#767676] text-3xl font-medium indent-8">
//             Whether you’re looking to build a stunning website, boost your
//             brand, or drive measurable results,{" "}
//             <span className="text-black">we’re here to help.</span>
//           </p>

//           <div className="flex items-center gap-3">
//             <img
//               className="w-12 h-12 rounded-full object-cover"
//               src="https://placehold.co/200x200"
//               alt="placeholder"
//             />
//             <div>
//               <p className="font-semibold">Steve Jobs</p>
//               <p className="text-[#767676] text-[12px]">Co-founder of Apple</p>
//             </div>
//           </div>
//         </div>

//         {/* newsletter - takes half width on md+ */}
//         <div className="w-full md:w-1/2">
//           <NewsLetter />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import NewsLetter from "./footer-components/NewsLetter";

const Footer = () => {
  return (
    <div className="px-4 py-10 md:py-12 lg:py-16 mx-auto lg:m-10 ">
      {/* stacked on small, side-by-side on md+ / lg+, equal width columns */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-stretch">
        {/* quote - flexible column */}
        <div className="flex-1 min-w-0 flex flex-col  gap-6">
          <p className="text-[#767676] text-2xl sm:text-2xl md:text-3xl font-medium 
                        sm:text-left md:indent-8 lg:indent-12">
            &nbsp; &nbsp;  &nbsp; Whether you’re looking to build a stunning website, boost your brand,
            or drive measurable results, <span className="text-black">we’re here to help.</span>
          </p>

          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://placehold.co/200x200"
              alt="placeholder"
            />
            <div>
              <p className="font-semibold text-sm md:text-base">Steve Jobs</p>
              <p className="text-[#767676] text-[11px] md:text-[12px]">Co-founder of Apple</p>
            </div>
          </div>
        </div>

        {/* newsletter - flexible column */}
        <div className="flex-1 min-w-0">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Footer;