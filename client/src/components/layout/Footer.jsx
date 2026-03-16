// import React from "react";
// import NewsLetter from "./footer-components/NewsLetter";

// const Footer = () => {
//   return (
//     <div className=" m-10 " >
//       {/* section one  */}

//       <div className="flex gap-5" >
//         {/* quote */}
//         <div className=" flex flex-col gap-10 " >
//           <p className="text-[#767676] text-3xl max-w-[600px] font-medium  ">
          
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether you’re looking to build a stunning website, boost your
//             brand, or drive measurable results,
//             <span className=" text-black "> we’re here to help. </span>
//           </p>
//           <div className="flex items-center gap-3 " >
//             <img
//               className="w-12 h-12 rounded-full object-cover"
//               src="https://placehold.co/200x200"
//               alt="placeholder"
//             />
//             <div>
//               <p className="font-semibold" >Steve Jobs</p>
//               <p className="text-[#767676] text-[12px] " >Co-founder of Apple</p>
//             </div>
//           </div>
//         </div>

//         {/* news letter  */}
//         <div>
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
    <div className="m-10">
      {/* responsive 2-column: stacked on small, equal halves on md+ */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        {/* quote - takes half width on md+ */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <p className="text-[#767676] text-3xl font-medium indent-8">
            Whether you’re looking to build a stunning website, boost your brand,
            or drive measurable results, <span className="text-black">we’re here to help.</span>
          </p>

          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://placehold.co/200x200"
              alt="placeholder"
            />
            <div>
              <p className="font-semibold">Steve Jobs</p>
              <p className="text-[#767676] text-[12px]">Co-founder of Apple</p>
            </div>
          </div>
        </div>

        {/* newsletter - takes half width on md+ */}
        <div className="w-full md:w-1/2">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Footer;