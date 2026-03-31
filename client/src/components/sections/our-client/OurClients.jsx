import { Plus } from "lucide-react";
import LogoLoop from "../../../animation/LogoLoop";
import { motion } from "framer-motion";

const clients = [
  {
    id: "1",
    label: "Logo Ipsum",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Logo+Ipsum",
  },
  {
    id: "2",
    label: "Warpspeed",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Warpspeed",
  },
  {
    id: "3",
    label: "Starburst",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Starburst",
  },
  {
    id: "4",
    label: "LOQO",
    logo: "https://placehold.co/200x100/ffffff/111111?text=LOQO",
  },
  {
    id: "5",
    label: "Device",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Device",
  },
  {
    id: "6",
    label: "Nexus",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Nexus",
  },
];

const logos = clients.map((c) => ({ src: c.logo, alt: c.label }));

const OurClients = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="px-4 mx-auto lg:m-10 h-[92vh] flex flex-col">
        {/* 🔝 HEADER */}
        <div className="pt-10 md:pt-12">
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-8 mb-10 lg:mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/4 flex items-center gap-2.5"
            >
              <div className="w-5 h-5 rounded-full border border-black bg-black flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 font-medium text-[15px]">
                Our clients
              </span>
            </motion.div>

            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center overflow-hidden">
              <motion.h2 
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[18vw] lg:text-[9vw] leading-[0.85] font-bold tracking-tighter text-black"
              >
                Clients.
              </motion.h2>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl lg:text-[2vw] font-bold tracking-tighter text-gray-400 mt-2"
              >
                ({new Date().getFullYear()})
              </motion.span>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/4 flex justify-start lg:justify-end"
            >
              <p className="text-gray-500 text-[14px] font-medium leading-[1.6] max-w-65">
                We collaborate with ambitious brands to create impactful digital
                products and experiences.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 🔥 CONTENT AREA */}
        <div className="flex-1 flex flex-col justify-center gap-16 lg:gap-20 pb-10">
          {/* 🧠 CENTER TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-200 mx-auto px-4"
          >
            <h3 className="text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] font-medium text-black leading-[1.2] tracking-tight">
              Trusted by brands that value design, performance, and clarity.
            </h3>

            <p className="text-gray-500 text-[15px] sm:text-[16px] lg:text-[18px] mt-5 lg:mt-6 leading-relaxed max-w-137.5 mx-auto">
              From startups to growing businesses, we help teams build digital
              products that stand out and scale confidently.
            </p>
          </motion.div>

          {/* 🔁 LOGO LOOP WITH CURVED CARDS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full"
          >
            <LogoLoop
              logos={logos}
              speed={200}
              direction="left"
              logoHeight={150}
              gap={110}
              fadeOut
              fadeOutColor="#f5f5f5"
              scaleOnHover
              //Curve
              renderItem={(logo, index) => (
                <div className="h-[150px] w-auto aspect-[2/1] rounded-[1.5rem] overflow-hidden bg-white shadow-sm flex items-center justify-center p-4">
                  <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain pointer-events-none" />
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
