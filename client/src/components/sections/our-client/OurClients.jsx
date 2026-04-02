// import { Plus } from "lucide-react";
// import LogoLoop from "../../../animation/LogoLoop";
// import { motion } from "framer-motion";

// const clients = [
//   {
//     id: "1",
//     label: "Logo Ipsum",
//     logo: "https://placehold.co/200x100/ffffff/111111?text=Logo+Ipsum",
//   },
//   {
//     id: "2",
//     label: "Warpspeed",
//     logo: "https://placehold.co/200x100/ffffff/111111?text=Warpspeed",
//   },
//   {
//     id: "3",
//     label: "Starburst",
//     logo: "https://placehold.co/200x100/ffffff/111111?text=Starburst",
//   },
//   {
//     id: "4",
//     label: "LOQO",
//     logo: "https://placehold.co/200x100/ffffff/111111?text=LOQO",
//   },
//   {
//     id: "5",
//     label: "Device",
//     logo: "https://placehold.co/200x100/ffffff/111111?text=Device",
//   },
//   {
//     id: "6",
//     label: "Nexus",
//     logo: "https://placehold.co/200x100/ffffff/111111?text=Nexus",
//   },
// ];

// const logos = clients.map((c) => ({ src: c.logo, alt: c.label }));

// const OurClients = () => {
//   return (
//     <section className="bg-[#f5f5f5]">
//       <div className="px-4 mx-auto lg:m-10 h-[92vh] flex flex-col">
//         {/* 🔝 HEADER */}
//         <div className="pt-10 md:pt-12">
//           <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-8 mb-10 lg:mb-12">
//             <motion.div 
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="w-full lg:w-1/4 flex items-center gap-2.5"
//             >
//               <div className="w-5 h-5 rounded-full border border-black bg-black flex items-center justify-center">
//                 <Plus className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-gray-500 font-medium text-[15px]">
//                 Our clients
//               </span>
//             </motion.div>

//             <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center overflow-hidden">
//               <motion.h2 
//                 initial={{ opacity: 0, y: "100%" }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//                 className="text-[18vw] lg:text-[9vw] leading-[0.85] font-bold tracking-tighter text-black"
//               >
//                 Clients.
//               </motion.h2>
//               <motion.span 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-2xl lg:text-[2vw] font-bold tracking-tighter text-gray-400 mt-2"
//               >
//                 ({new Date().getFullYear()})
//               </motion.span>
//             </div>

//             <motion.div 
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="w-full lg:w-1/4 flex justify-start lg:justify-end"
//             >
//               <p className="text-gray-500 text-[14px] font-medium leading-[1.6] max-w-65">
//                 We collaborate with ambitious brands to create impactful digital
//                 products and experiences.
//               </p>
//             </motion.div>
//           </div>
//         </div>

//         {/* 🔥 CONTENT AREA */}
//         <div className="flex-1 flex flex-col justify-center gap-16 lg:gap-20 pb-10">
//           {/* 🧠 CENTER TEXT */}
//           <motion.div 
//             initial={{ opacity: 0, y: 40, scale: 0.98 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-center max-w-200 mx-auto px-4"
//           >
//             <h3 className="text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] font-medium text-black leading-[1.2] tracking-tight">
//               Trusted by brands that value design, performance, and clarity.
//             </h3>

//             <p className="text-gray-500 text-[15px] sm:text-[16px] lg:text-[18px] mt-5 lg:mt-6 leading-relaxed max-w-137.5 mx-auto">
//               From startups to growing businesses, we help teams build digital
//               products that stand out and scale confidently.
//             </p>
//           </motion.div>

//           {/* 🔁 LOGO LOOP WITH CURVED CARDS */}
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="overflow-hidden w-full"
//           >
//             <LogoLoop
//               logos={logos}
//               speed={200}
//               direction="left"
//               logoHeight={150}
//               gap={110}
//               fadeOut
//               fadeOutColor="#f5f5f5"
//               scaleOnHover
//               //Curve
//               renderItem={(logo, index) => (
//                 <div className="h-[150px] w-auto aspect-2/1 rounded-3xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-4">
//                   <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain pointer-events-none" />
//                 </div>
//               )}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurClients;


import { Plus } from "lucide-react";
import LogoLoop from "../../../animation/LogoLoop";
import { motion } from "framer-motion";

const clients = [
  { id: "1", label: "Logo Ipsum", logo: "https://placehold.co/200x100/ffffff/111111?text=Logo+Ipsum" },
  { id: "2", label: "Warpspeed", logo: "https://placehold.co/200x100/ffffff/111111?text=Warpspeed" },
  { id: "3", label: "Starburst", logo: "https://placehold.co/200x100/ffffff/111111?text=Starburst" },
  { id: "4", label: "LOQO", logo: "https://placehold.co/200x100/ffffff/111111?text=LOQO" },
  { id: "5", label: "Device", logo: "https://placehold.co/200x100/ffffff/111111?text=Device" },
  { id: "6", label: "Nexus", logo: "https://placehold.co/200x100/ffffff/111111?text=Nexus" },
];

const logos = clients.map((c) => ({ src: c.logo, alt: c.label }));

const OurClients = () => {
  return (
    <section className="">
      
      {/* 🔥 KEY FIX: mobile compact, desktop same */}
      <div className="px-4 py-[10px] mx-auto lg:m-10 lg:py-8 sm:py-10 md:py-12 lg:min-h-[100svh] lg:flex lg:flex-col">

        {/* HEADER */}
        <div className="pt-6 sm:pt-8 md:pt-10">
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4 flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full border border-black bg-black flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 font-medium text-[13px] sm:text-[15px]">
                Our clients
              </span>
            </motion.div>

            {/* CENTER */}
            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center overflow-hidden">
              
              <motion.h2
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-bold tracking-tighter text-black leading-[0.9] text-[clamp(42px,13vw,120px)]"
              >
                Clients.
              </motion.h2>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg lg:text-[2vw] font-bold tracking-tighter text-gray-400 mt-1"
              >
                ({new Date().getFullYear()})
              </motion.span>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4 flex justify-start lg:justify-end"
            >
              <p className="text-gray-500 text-[13px] sm:text-[14px] font-medium leading-[1.5] max-w-[260px]">
                We collaborate with ambitious brands to create impactful digital
                products and experiences.
              </p>
            </motion.div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-1 lg:justify-center lg:gap-20 pb-6 sm:pb-8 lg:pb-10">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-[600px] mx-auto"
          >
            <h3 className="text-[18px] sm:text-[24px] lg:text-[36px] font-medium text-black leading-[1.3] tracking-tight">
              Trusted by brands that value design, performance, and clarity.
            </h3>

            <p className="text-gray-500 text-[12px] sm:text-[15px] lg:text-[18px] mt-2 sm:mt-5 leading-relaxed">
              From startups to growing businesses, we help teams build digital
              products that stand out and scale confidently.
            </p>
          </motion.div>

          {/* LOGO LOOP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="overflow-hidden w-full"
          >
            <LogoLoop
              logos={logos}
              speed={120}
              direction="left"
              logoHeight={80}
              gap={30}
              fadeOut
              fadeOutColor="#f5f5f5"
              scaleOnHover
              renderItem={(logo) => (
                <div className="h-[80px] sm:h-[100px] lg:h-[150px] aspect-[2/1] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
              )}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurClients;