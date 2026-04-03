const Project = () => {
  const portfolioCards = [
    {
      id: 1,
      title: "NexLab.",
      year: "/2025",
      image: "/NexLab.webp",
      brandName: "NexLab",
      coloredDots: true,
      logo: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-white fill-current"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="11" fill="white" />
          <path d="M13 6L7 13h4v5l6-7h-4V6z" fill="#998375" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Ephemeral.",
      year: "/2025",
      image:
        "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1000&auto=format&fit=crop",
      brandName: "Ephemeral",
      coloredDots: false,
      logo: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Powersurge.",
      year: "/2024",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      brandName: "",
      coloredDots: false,
      logo: null,
    },
    {
      id: 4,
      title: "Mastermail.",
      year: "/2024",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
      brandName: "",
      coloredDots: false,
      logo: null,
    },
  ];

  return (
    <section id="projects" className="bg-[#f5f5f5]">
      <div className="px-4 py-8 sm:py-10 md:py-12 mx-auto lg:m-10">
        {/* HEADER */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0 mb-10 sm:mb-16 md:mb-24">
          {/* LEFT */}
          <div className="w-full lg:w-1/4">
            <span className="text-gray-500 font-medium text-[13px] sm:text-[15px]">
              (27)
            </span>
          </div>

          {/* CENTER */}
          <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
            <div className="flex flex-col items-start">
              {/* 🔥 FIXED HEADING */}
              <h2 className="font-bold tracking-tighter text-black leading-[0.9] text-[clamp(48px,14vw,120px)]">
                Projects.
              </h2>

              <span className="text-lg sm:text-xl lg:text-[2.2vw] font-bold tracking-tighter text-black mt-1 sm:mt-3">
                ©2025
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
            <p className="text-gray-500 text-[13px] sm:text-[15px] font-medium leading-[1.6] max-w-[260px]">
              We've helped businesses across industries achieve their goals.
              Here are some of our recent projects.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
            {portfolioCards.map((card) => (
              <div key={card.id} className="flex flex-col gap-2 sm:gap-3 group">
                {/* HEADER BAR */}
                <div className="bg-white rounded-[16px] sm:rounded-[20px] px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-transform group-hover:-translate-y-1">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="font-bold text-[14px] sm:text-lg tracking-tight text-black">
                      {card.title}
                    </span>
                    <span className="text-gray-400 text-[10px] sm:text-xs font-medium">
                      {card.year}
                    </span>
                  </div>

                  {/* DOTS */}
                  <div className="flex gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${card.coloredDots ? "bg-[#ff5f56]" : "bg-gray-200"}`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full ${card.coloredDots ? "bg-[#ffbd2e]" : "bg-gray-200"}`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full ${card.coloredDots ? "bg-[#27c93f]" : "bg-gray-200"}`}
                    ></div>
                  </div>
                </div>

                {/* Card Image Wrapper */}
                <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm">
                  {card.image?.endsWith('.mp4') ? (
                    <video
                      src={card.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                    />
                  ) : (
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

                  {card.brandName && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 text-white z-10">
                      {card.logo}
                      <span className="font-bold text-lg sm:text-2xl md:text-3xl tracking-tight">
                        {card.brandName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
