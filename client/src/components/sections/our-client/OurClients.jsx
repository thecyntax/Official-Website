import { Plus } from "lucide-react";
import LogoLoop from "../../../animation/LogoLoop";

const clients = [
  { id: "1", label: "TECH" },
  { id: "2", label: "RETAIL" },
  { id: "3", label: "EDUCATION" },
  { id: "4", label: "HEALTH" },
  { id: "5", label: "CREATORS" },
];

const logos = clients.map((c) => ({ alt: c.label }));

const OurClients = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="px-4 py-[10px] mx-auto lg:m-10 lg:mb-0 lg:py-8 sm:py-10 md:py-12 lg:min-h-svh lg:flex lg:flex-col">
        {/* HEADER (UNCHANGED) */}
        <div className="pt-6 sm:pt-8 md:pt-10">
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <div className="w-full lg:w-1/4 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border border-black bg-black flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 text-[13px] sm:text-[15px]">
                Our clients
              </span>
            </div>

            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
              <h2 className="font-bold tracking-tighter text-black leading-[0.9] text-[clamp(42px,13vw,120px)]">
                Clients.
              </h2>

              <span className="text-base sm:text-lg lg:text-[2vw] font-bold text-gray-400 mt-1">
                (Across industries)
              </span>
            </div>

            <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
              <p className="text-gray-500 text-[12px] sm:text-[14px] leading-normal max-w-[260px]">
                We collaborate with businesses of all sizes, delivering design
                and development solutions tailored to different industries.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-10 lg:flex-1 lg:justify-center lg:gap-20 pb-6 sm:pb-8 lg:pb-0">
          {/* HERO TEXT */}
          <div className="text-center max-w-[700px] mx-auto">
            <h3 className="text-[20px] sm:text-[28px] lg:text-[42px] font-semibold tracking-tight text-black leading-tight">
              Designed for businesses that want to stand out.
            </h3>

            <p className="text-gray-500 text-[14px] sm:text-[16px] lg:text-[18px] mt-4 leading-relaxed">
              From emerging brands to established companies, we create digital
              experiences that are clear, impactful, and built to perform.
            </p>
          </div>

          {/* INDUSTRY TAGS */}
          <div className="flex flex-wrap justify-center gap-3 max-w-[700px] mx-auto">
            {[
              "Startups",
              "Agencies",
              "E-commerce",
              "Personal Brands",
              "Enterprises",
              "Creators",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 text-[12px] sm:text-[14px] bg-white rounded-full shadow-sm text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>

          {/* PREMIUM TYPOGRAPHY LOGO LOOP */}
          <div className="overflow-hidden w-full relative">
            {/* side fade */}
            <div className="pointer-events-none absolute left-0 top-0 w-20 h-full bg-linear-to-r from-[#f5f5f5] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 w-20 h-full bg-linear-to-l from-[#f5f5f5] to-transparent z-10" />

            <LogoLoop
              logos={logos}
              speed={90}
              direction="left"
              logoHeight={100}
              gap={50}
              scaleOnHover
              renderItem={(logo) => (
                <div className="group h-[100px] sm:h-[130px] lg:h-[160px] aspect-2/1 rounded-[10px] overflow-hidden bg-white border border-black/5 flex items-center justify-center px-6 transition-all duration-300 ">
                  <span className="font-semibold tracking-[0.2em] text-[14px] sm:text-[16px] lg:text-[18px] text-gray-400 group-hover:text-black transition-all duration-300">
                    {logo.alt}
                  </span>
                </div>
              )}
            />
          </div>

          {/* BOTTOM LINE */}
          <div className="text-center">
            <p className="text-gray-400 text-[13px] sm:text-[15px]">
              Flexible solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
