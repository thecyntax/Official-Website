// import React from "react";

// const NewsLetter = () => {
//   return (
//     <div className="w-full h-full flex flex-col">
//       {/* Title */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-black">
//         Newsletter
//       </h2>

//       <form
//         className="space-y-6 sm:space-y-8 flex-1"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         {/* Name Input */}
//         <label className="block">
//           <span className="sr-only">Your name</span>
//           <div className="relative border-b border-gray-300 py-2 focus-within:border-black transition-colors">
//             <input
//               type="text"
//               placeholder="Your name *"
//               aria-label="Your name"
//               className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-2 text-sm md:text-base"
//               required
//             />
//           </div>
//         </label>

//         {/* Email Input */}
//         <label className="block">
//           <span className="sr-only">Email address</span>
//           <div className="relative border-b border-gray-300 py-2 focus-within:border-black transition-colors flex items-center">
//             <input
//               type="email"
//               placeholder="Email *"
//               aria-label="Email"
//               className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-2 text-sm md:text-base"
//               required
//             />
//             <div className="ml-2 text-teal-600 shrink-0" aria-hidden>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//               </svg>
//             </div>
//           </div>
//         </label>

//         {/* Subscribe Button - fixed size on all breakpoints */}
//         <div className="pt-1">
//           <button
//             type="submit"
//             className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-4 hover:bg-gray-800 transition-all
//                        w-auto justify-center"
//           >
//             <span className="font-semibold text-sm md:text-[12px]">
//               Subscribe
//             </span>
//             <div className="w-1.5 h-1.5 bg-white rounded-full" />
//           </button>
//         </div>
//       </form>

//       {/* Footer Text */}
//       <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
//         Join our newsletter and stay updated <br /> on the latest trends in
//         digital design.
//       </p>
//     </div>
//   );
// };

// export default NewsLetter;


const NewsLetter = () => {
  return (
    <div className="w-full h-full flex flex-col">
      
      <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
        Newsletter
      </h2>

      <form className="space-y-5 sm:space-y-6 flex-1">

        <input
          type="text"
          placeholder="Your name *"
          className="w-full border-b border-gray-300 py-2 text-sm"
        />

        <input
          type="email"
          placeholder="Email *"
          className="w-full border-b border-gray-300 py-2 text-sm"
        />

        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-gray-500 text-sm leading-[1.5]">
        Stay updated on the latest trends in digital design.
      </p>
    </div>
  );
};