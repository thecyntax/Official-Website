// import React from "react";
// import Lottie from "lottie-react";
// import JsonAnimation from "../../../assets/lottie/hero-lottie/AIlogoForiday.json";

// const Card = () => {
//   return (
//     <div>
//       <div className="flex items-center bg-white ">
//         <div>
//           <Lottie
//             animationData={JsonAnimation}
//             loop={true}
//             autoplay={true}
//             className="w-32 h-32"
//           />
//         </div>

//         <div>
//           <h1>Got an idea you want to build?</h1>
//           <p>Let’s bring it to life.</p>
//           <button>Get in Touch</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import Lottie from "lottie-react";
import JsonAnimation from "../../../assets/lottie/hero-lottie/AIlogoForiday.json";

const Card = () => {
  return (
    <div className="flex items-center gap-5 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl px-6 py-5 max-w-[340px] hover:shadow-2xl transition-all duration-300">
      {/* Animation */}
      <Lottie
        animationData={JsonAnimation}
        loop
        autoplay
        className="w-28 h-28"
      />

      {/* Content */}
      <div>
        <h3 className="text-[18px] font-semibold text-gray-900 leading-tight">
          Got an idea you want to build?
        </h3>

        <p className="text-[14px] text-gray-500 mt-1">
          Let’s bring it to life.
        </p>

        <button className="mt-2 text-[14px] font-medium text-black border-b border-black hover:text-gray-600 hover:border-gray-600 transition">
          Get in Touch →
        </button>
      </div>
    </div>
  );
};

export default Card;
