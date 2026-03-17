import React from 'react';

const Project = () => {
  // Placeholder array for the logos to map through
  // You can replace the inline SVGs/text with your actual image assets later
  const logos = [
    { id: 1, content: <span className="font-black text-2xl italic tracking-tighter">luju<span className="text-[8px] block not-italic tracking-normal text-right mt-1">IPSUM</span></span> },
    { id: 2, content: <div className="flex items-center gap-2 font-bold text-sm"><svg className="w-6 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>Warpspeed</div> },
    { id: 3, content: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg> },
    { id: 4, content: <span className="font-bold text-3xl tracking-tighter flex items-center gap-0.5">LOQO<span className="text-[10px] self-start mt-1 relative -left-1">®</span></span> },
    { id: 5, content: <span className="font-black text-4xl italic tracking-tighter">OJ</span> },
    { id: 6, content: <span className="font-black text-5xl">N</span> },
  ];

  return (
    <section id="projects" className="w-full min-h-screen bg-[#f5f5f5] py-20 px-6 md:px-12 flex flex-col justify-center font-sans">
      
      {/* Top Section: Logo Grid */}
      <div className="w-full max-w-[1600px] mx-auto mb-32 md:mb-48">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white rounded-[20px] aspect-[4/3] flex items-center justify-center p-6 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              {logo.content}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Typography Layout */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-0">
        
        {/* Left: Item Count */}
        <div className="w-full lg:w-1/4">
          <span className="text-gray-500 font-medium text-[15px]">
            (27)
          </span>
        </div>

        {/* Center: Massive Title & Copyright */}
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

        {/* Right: Descriptive Text */}
        <div className="w-full lg:w-1/4 flex justify-start lg:justify-end">
          <p className="text-gray-500 text-[15px] font-medium leading-[1.6] max-w-[260px]">
            We've helped businesses across industries achieve their goals. Here are some of our recent projects.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Project;
