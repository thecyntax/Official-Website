import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const servicesData = [
  {
    id: "001",
    title: "Web design and development",
    description:
      "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop",
    iconLetter: "M",
    categories: [
      "Packaging design",
      "Logo design",
      "Rebranding",
      "Typography",
      "Guidelines",
      "Visual identity",
    ],
    extraCount: "6+",
  },
  {
    id: "002",
    title: "Social media marketing",
    description:
      "Strategic social campaigns crafted to build brand awareness, engage your target audience, and drive meaningful growth.",
    image:
      "https://images.unsplash.com/photo-1611162619698-10029b3527fb?q=80&w=400&auto=format&fit=crop",
    iconLetter: "S",
    categories: [
      "Content Creation",
      "Campaign Strategy",
      "Analytics",
      "Community Management",
    ],
    extraCount: "2+",
  },
  {
    id: "003",
    title: "SEO and content marketing",
    description:
      "Data-driven SEO and engaging content designed to improve visibility and rank your brand at the top of search results.",
    image:
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=400&auto=format&fit=crop",
    iconLetter: "C",
    categories: [
      "Keyword Research",
      "Copywriting",
      "Link Building",
      "Technical SEO",
    ],
    extraCount: "4+",
  },
  {
    id: "004",
    title: "Branding and identity",
    description:
      "Memorable brand identities that tell your unique story and establish a lasting connection with your audience.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
    iconLetter: "B",
    categories: ["Logo Design", "Brand Strategy", "Typography", "Color Theory"],
    extraCount: "3+",
  },
];

const Service = () => {
  const [expandedId, setExpandedId] = useState("001");

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-2 sm:p-3 lg:p-2 w-full bg-[#f5f5f5]">
      <section className="w-full rounded-2xl overflow-hidden text-white  bg-[#070707] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1b1b1b] via-[#090909] to-[#050505] shadow-2xl">
        <div className="px-4 py-10 md:py-12 mx-auto lg:m-10">
          {/* Header */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-8 mb-16 md:mb-24">
            <div className="w-full lg:w-1/4 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full border-[1.5px] bg-black flex items-center justify-center text-sm leading-none shrink-0 pt-px">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 font-medium text-[15px]">
                What we do
              </span>
            </div>

            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
              <h1 className="text-[18vw] lg:text-[11vw] leading-[0.85] font-bold tracking-tighter text-white">
                Services.
              </h1>
              <span className="text-3xl lg:text-[2.5vw] font-bold tracking-tighter text-gray-400 mt-2 lg:mt-4">
                ({servicesData.length})
              </span>
            </div>

            <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
              <p className="text-gray-400 text-[15px] font-medium leading-[1.6] max-w-[260px]">
                We provide comprehensive digital solutions designed to elevate
                your brand and drive meaningful growth.
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {servicesData.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <motion.article
                  key={service.id}
                  layout
                  transition={{
                    layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className={`group relative overflow-hidden rounded-3xl border ${
                    isExpanded
                      ? "border-white/15 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <button
                    type="button"
                    onClick={() => handleToggle(service.id)}
                    className="relative z-10 w-full text-left px-5 sm:px-6 md:px-7 py-5 sm:py-6 md:py-7"
                    aria-expanded={isExpanded}
                    aria-controls={`accordion-panel-${service.id}`}
                  >
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-start md:items-center gap-4 md:gap-10 min-w-0">
                        <span className="text-[13px] sm:text-[14px] text-gray-500 font-medium shrink-0 mt-1 md:mt-0">
                          ({service.id})
                        </span>

                        <h3
                          className={`min-w-0 text-[20px] sm:text-[24px] md:text-[30px] lg:text-[34px] leading-[1.08] tracking-tight  transition-colors duration-300 ${
                            isExpanded
                              ? "text-white"
                              : "text-white/90 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                          isExpanded
                            ? "border-white/15 bg-white/5"
                            : "border-white/15 bg-transparent group-hover:bg-white group-hover:text-black"
                        }`}
                      >
                        <span className="relative block w-4 h-4">
                          <span className="absolute left-0 top-1/2 w-4 h-px -translate-y-1/2 bg-current rounded-full" />
                          {!isExpanded && (
                            <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current rounded-full" />
                          )}
                        </span>
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`accordion-panel-${service.id}`}
                        key="content"
                        initial={{ height: 0, opacity: 0, y: -8 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.25, ease: "easeOut" },
                          y: { duration: 0.25, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 md:px-7 pb-6 md:pb-7">
                          <div className="pt-2 md:pt-1 grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-8 md:gap-10 items-start">
                            {/* Image */}
                            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                              <motion.img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.04 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  duration: 0.6,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                              <motion.div
                                initial={{
                                  scale: 0.9,
                                  opacity: 0,
                                  rotate: -18,
                                }}
                                animate={{ scale: 1, opacity: 1, rotate: -14 }}
                                transition={{
                                  duration: 0.45,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute -bottom-3 -right-3 w-14 h-14 bg-[#e8e8e8] rounded-2xl flex items-center justify-center shadow-xl border border-white/20"
                              >
                                <span className="text-black font-black text-2xl tracking-tighter">
                                  {service.iconLetter}
                                </span>
                              </motion.div>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-6 md:pt-2">
                              <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-400 leading-[1.7] max-w-[560px]">
                                {service.description}
                              </p>

                              <div className="flex flex-col gap-3">
                                <span className="text-[11px] sm:text-[12px] text-gray-500 font-medium tracking-[0.22em] uppercase">
                                  Categories
                                </span>

                                <div className="flex flex-wrap gap-2.5 max-w-[650px]">
                                  {service.categories.map((category, index) => (
                                    <span
                                      key={index}
                                      className="bg-white/5 border border-white/10 text-white/90 text-[12px] sm:text-[13px] font-medium px-4 py-2 rounded-full tracking-wide hover:bg-white/10 hover:border-white/15 transition-all duration-300 cursor-default"
                                    >
                                      {category}
                                    </span>
                                  ))}

                                  <span className="bg-white/8 border border-white/10 text-gray-300 text-[12px] sm:text-[13px] font-bold px-4 py-2 rounded-full tracking-wide cursor-default">
                                    {service.extraCount}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-24 flex justify-center w-full">
            <button className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-[15px] px-10 py-4 rounded-full shadow-[0_0_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
              Get started
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
