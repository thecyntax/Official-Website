// export default Project;
import React from 'react';

const Project = () => {
  // Placeholder array for the top client logos
  const clientLogos = [
    { id: 1, content: <span className="font-black text-2xl italic tracking-tighter">luju<span className="text-[8px] block not-italic tracking-normal text-right mt-1">IPSUM</span></span> },
    { id: 2, content: <div className="flex items-center gap-2 font-bold text-sm"><svg className="w-6 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>Warpspeed</div> },
    { id: 3, content: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg> },
    { id: 4, content: <span className="font-bold text-3xl tracking-tighter flex items-center gap-0.5">LOQO<span className="text-[10px] self-start mt-1 relative -left-1">®</span></span> },
    { id: 5, content: <span className="font-black text-4xl italic tracking-tighter">OJ</span> },
    { id: 6, content: <span className="font-black text-5xl">N</span> },
  ];

  // Data for the large project portfolio cards
  const portfolioCards = [
    {
      id: 1,
      title: 'Boltshift.',
      year: '/2025',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      brandName: 'Boltshift',
      coloredDots: true,
      logo: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="white" />
          <path d="M13 6L7 13h4v5l6-7h-4V6z" fill="#998375" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Ephemeral.',
      year: '/2025',
      image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1000&auto=format&fit=crop',
      brandName: 'Ephemeral',
      coloredDots: false,
      logo: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Powersurge.',
      year: '/2024',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      brandName: '', 
      coloredDots: false,
      logo: null
    },
    {
      id: 4,
      title: 'Mastermail.',
      year: '/2024',
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop',
      brandName: '',
      coloredDots: false,
      logo: null
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] py-20 px-6 md:px-12 flex flex-col font-sans">
      
      {/* 1. Top Section: Client Logo Grid */}
      <div className="w-full max-w-400 mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clientLogos.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white rounded-[20px] aspect-4/3 flex items-center justify-center p-6 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              {logo.content}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Middle Section: Typography Layout */}
      <div className="w-full max-w-400 mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-0 mb-20 md:mb-32">
        <div className="w-full lg:w-1/4">
          <span className="text-gray-500 font-medium text-[15px]">
            (27)
          </span>
        </div>

        <div className="w-full lg:w-2/4 flex flex-col items-start lg:items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-[18vw] lg:text-[11vw] leading-[0.85] font-bold tracking-tighter text-black">
              Projects.
            </h2>
            <span className="text-3xl lg:text-[2.5vw] font-bold tracking-tighter text-black mt-2 lg:mt-4">
              ©2025
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
          <p className="text-gray-500 text-[15px] font-medium leading-[1.6] max-w-65">
            We've helped businesses across industries achieve their goals. Here are some of our recent projects.
          </p>
        </div>
      </div>

      {/* 3. Bottom Section: Portfolio Cards */}
      <div className="w-full max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
          {portfolioCards.map((card) => (
            <div key={card.id} className="flex flex-col gap-3 group">
              
              {/* Card Header Label */}
              <div className="bg-white rounded-[20px] px-6 py-4.5 flex justify-between items-center transition-transform group-hover:-translate-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-bold text-lg tracking-tight text-black">{card.title}</span>
                  <span className="text-gray-400 text-xs font-medium">{card.year}</span>
                </div>
                
                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${card.coloredDots ? 'bg-[#ff5f56]' : 'bg-gray-200'}`}></div>
                  <div className={`w-2 h-2 rounded-full ${card.coloredDots ? 'bg-[#ffbd2e]' : 'bg-gray-200'}`}></div>
                  <div className={`w-2 h-2 rounded-full ${card.coloredDots ? 'bg-[#27c93f]' : 'bg-gray-200'}`}></div>
                </div>
              </div>

              {/* Card Image Wrapper */}
              <div className="relative w-full aspect-16/11 md:aspect-4/3 rounded-3xl overflow-hidden cursor-pointer shadow-sm">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Optional dark overlay for better logo contrast */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>

                {/* Center Brand Overlay */}
                {card.brandName && (
                  <div className="absolute inset-0 flex items-center justify-center gap-3 text-white z-10">
                    {card.logo}
                    <span className="font-bold text-2xl md:text-3xl tracking-tight mt-1">{card.brandName}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Project;