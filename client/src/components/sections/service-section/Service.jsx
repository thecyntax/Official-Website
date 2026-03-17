import React, { useState } from 'react';

const Service = () => {
  // State to track which accordion item is currently open
  const [expandedId, setExpandedId] = useState('001');

  // Master data array for all services
  const servicesData = [
    {
      id: '001',
      title: 'Web design and development',
      description: 'Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop',
      iconLetter: 'M',
      categories: ['Packaging design', 'Logo design', 'Rebranding', 'Typography', 'Guidelines', 'Visual identity'],
      extraCount: '6+'
    },
    {
      id: '002',
      title: 'Social media marketing',
      description: 'Strategic social campaigns crafted to build brand awareness, engage your target audience, and drive meaningful growth.',
      image: 'https://images.unsplash.com/photo-1611162619698-10029b3527fb?q=80&w=400&auto=format&fit=crop',
      iconLetter: 'S',
      categories: ['Content Creation', 'Campaign Strategy', 'Analytics', 'Community Management'],
      extraCount: '2+'
    },
    {
      id: '003',
      title: 'SEO and content marketing',
      description: 'Data-driven SEO and engaging content designed to improve visibility and rank your brand at the top of search results.',
      image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=400&auto=format&fit=crop',
      iconLetter: 'C',
      categories: ['Keyword Research', 'Copywriting', 'Link Building', 'Technical SEO'],
      extraCount: '4+'
    },
    {
      id: '004',
      title: 'Branding and identity',
      description: 'Memorable brand identities that tell your unique story and establish a lasting connection with your audience.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop',
      iconLetter: 'B',
      categories: ['Logo Design', 'Brand Strategy', 'Typography', 'Color Theory'],
      extraCount: '3+'
    }
  ];

  // Toggle function
  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    // Background uses a dark gradient to mimic the slight lighting texture in the screenshot
    <section className="w-full min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#050505] text-white rounded-t-[2.5rem] pt-16 pb-32 px-6 md:px-12 font-sans overflow-hidden shadow-2xl transition-all">
      
      {/* 1. Header Section */}
      <div className="relative w-full max-w-400 mx-auto flex justify-center items-center mt-8 mb-32 md:mb-40">
        
        {/* Top Left Badge */}
        <div className="absolute left-0 top-4 flex items-center gap-2.5">
          <div className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center font-bold text-[14px] leading-none">
            +
          </div>
          <span className="text-[15px] font-medium tracking-wide">
            What we do
          </span>
        </div>

        {/* Massive Centered Title */}
        <h1 className="text-[20vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter flex items-start text-white">
          Services.
          <span className="text-[5vw] md:text-[2.5vw] text-gray-500 font-semibold tracking-tight mt-2 md:mt-6 ml-2 md:ml-4">
            (4)
          </span>
        </h1>
      </div>

      {/* 2. Interactive Accordion List */}
      <div className="w-full max-w-400 mx-auto flex flex-col">
        
        {servicesData.map((service) => {
          const isExpanded = expandedId === service.id;

          return (
            <div 
              key={service.id} 
              onClick={() => handleToggle(service.id)}
              className={`border-b border-white/10 transition-colors cursor-pointer group ${isExpanded ? 'pb-12 pt-4' : 'py-8 hover:bg-white/2'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Col 1: Index Number */}
                <div className={`md:col-span-1 ${isExpanded ? 'pt-2' : 'pt-0 items-center'}`}>
                  <span className="text-[15px] text-gray-400 font-medium">({service.id})</span>
                </div>

                {/* Col 2 & 3: Dynamic Content Area */}
                {isExpanded ? (
                  <>
                    {/* Expanded Content: Image & Description */}
                    <div className="md:col-span-5 flex flex-col xl:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="w-35 h-20 bg-gray-800 rounded-xl overflow-hidden relative shrink-0 shadow-lg">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-11 h-11 bg-[#e4e4e4] rounded-[10px] flex items-center justify-center rotate-[-20deg] shadow-lg border border-white/20">
                          <span className="text-black font-black text-xl tracking-tighter">{service.iconLetter}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-1">
                        <h3 className="text-[28px] font-bold leading-none tracking-tight">
                          {/* Split the title on " and " to mimic the exact line break in the design */}
                          {service.title.includes(' and ') ? (
                            <>
                              {service.title.split(' and ')[0]} and<br />
                              {service.title.split(' and ')[1]}
                            </>
                          ) : (
                            service.title
                          )}
                        </h3>
                        <p className="text-[14px] text-gray-400 leading-[1.6] max-w-85 font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Expanded Content: Categories Tags */}
                    <div className="md:col-span-5 flex flex-col gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                      <span className="text-[11px] text-gray-500 font-medium tracking-wide">Categories</span>
                      <div className="flex flex-wrap gap-2.5 max-w-105">
                        {service.categories.map((category, index) => (
                          <span key={index} className="bg-white text-black text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide hover:bg-gray-200 transition-colors cursor-default">
                            {category}
                          </span>
                        ))}
                        <span className="bg-[#222] text-gray-300 text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide cursor-default hover:bg-[#333] transition-colors">
                          {service.extraCount}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Collapsed Content: Just Title */
                  <div className="md:col-span-10 flex items-center">
                    <h3 className="text-[26px] font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                )}

                {/* Col 4: Toggle Action Button */}
                <div className={`md:col-span-1 flex justify-start md:justify-end ${isExpanded ? 'pt-2' : ''}`}>
                  <button 
                    className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isExpanded 
                        ? 'border-gray-700 bg-transparent hover:bg-white/10' 
                        : 'border-white/20 bg-transparent group-hover:bg-white group-hover:text-black'
                    }`}
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    {isExpanded ? (
                      // Minus Icon
                      <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H14" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    ) : (
                      // Plus Icon
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    )}
                  </button>
                </div>

              </div>
            </div>
          );
        })}

        {/* 3. Get Started Button Area */}
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Empty col-span-1 to push the button perfectly under the text columns */}
            <div className="md:col-span-1 hidden md:block"></div> 
            
            <div className="md:col-span-11">
              <button className="bg-white text-black font-semibold text-[15px] px-8 py-3.5 rounded-full hover:scale-105 transition-transform tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Get started
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;