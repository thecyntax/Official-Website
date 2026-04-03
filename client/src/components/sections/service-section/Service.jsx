import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const servicesData = [
  {
    id: "001",
    title: "Web design and development",
    description:
      "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    image: "/des vs dev.webp",
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
    image: "/vector-1756205138207-12aa66e02248.avif",
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
    image: "/vector-1762541291924-8b1ba27cd39c.avif",
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
    image: "/premium_vector-1764852623031-bc0872f50071.avif",
    categories: ["Logo Design", "Brand Strategy", "Typography", "Color Theory"],
    extraCount: "3+",
  },
];

const Service = () => {
  const [expandedId, setExpandedId] = useState(
    servicesData.length ? servicesData[0].id : null,
  );

  const handleToggle = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div id="services" className="p-2 sm:p-3 lg:p-2 w-full bg-[#f5f5f5]">
      <section className="w-full rounded-2xl overflow-hidden text-white bg-[#070707] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#1b1b1b] via-[#090909] to-[#050505] shadow-2xl">
        <div className="px-4 py-8 sm:py-10 md:py-12 mx-auto lg:m-10">
          {/* HEADER */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 mb-10 sm:mb-14 md:mb-20">
            <div className="w-full lg:w-1/4 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border bg-black flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-500 font-medium text-[13px] sm:text-[15px]">
                What we do
              </span>
            </div>

            <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
              <h1 className="font-bold tracking-tighter text-white leading-[0.9] text-[clamp(48px,14vw,120px)]">
                Services.
              </h1>

              <span className="text-lg sm:text-xl lg:text-[2.2vw] font-bold tracking-tighter text-gray-400 mt-2 sm:mt-3">
                ({servicesData.length})
              </span>
            </div>

            <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
              <p className="text-gray-400 text-[13px] sm:text-[15px] font-medium leading-[1.6] max-w-[260px]">
                We provide comprehensive digital solutions designed to elevate
                your brand and drive meaningful growth.
              </p>
            </div>
          </div>

          {/* ACCORDION */}
          <div className="space-y-3 sm:space-y-4">
            {servicesData.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <motion.article
                  key={service.id}
                  layout
                  transition={{ duration: 0.35 }}
                  className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl border ${isExpanded
                      ? "border-white/15 bg-white/5"
                      : "border-white/10 bg-white/3 hover:bg-white/5"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(service.id)}
                    className="relative z-10 w-full text-left px-4 sm:px-6 py-4 sm:py-6 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-6 min-w-0">
                        <span className="text-[12px] sm:text-[14px] text-gray-500">
                          ({service.id})
                        </span>

                        <h3 className="text-[16px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[1.1] tracking-tight text-white">
                          {service.title}
                        </h3>
                      </div>

                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-white/15 hover:bg-white hover:text-black transition-all duration-300 group-hover:bg-white group-hover:text-black">
                        <motion.div
                          initial={false}
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <Plus className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key={`content-${service.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden relative z-0"
                      >
                        <div className="px-4 sm:px-6 pb-5 sm:pb-6">
                          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 sm:gap-8">
                            {/* IMAGE */}
                            <div className="relative w-full h-[200px] sm:h-[260px] rounded-2xl overflow-hidden">
                              <img
                                src={service.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            {/* TEXT */}
                            <div className="flex flex-col gap-4">
                              <p className="text-[13px] sm:text-[15px] text-gray-400 leading-[1.6]">
                                {service.description}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {service.categories.map((c, i) => (
                                  <span
                                    key={i}
                                    className="text-[11px] sm:text-[13px] px-3 py-1.5 bg-white/5 rounded-full"
                                  >
                                    {c}
                                  </span>
                                ))}
                                <span className="text-[11px] sm:text-[13px] px-3 py-1.5 bg-white/10 rounded-full font-bold">
                                  {service.extraCount}
                                </span>
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
          <div className="mt-10 sm:mt-14 flex justify-center">
            <button className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-[13px] sm:text-[15px] px-6 sm:px-10 py-3 sm:py-4 rounded-full transition hover:scale-[1.03]">
              Get started →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;