// import React, { Suspense, useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const LazyProject = React.lazy(() => import('../sections/Project/Project'));
// const MotionDiv = motion.div;

// const Hero = () => {
//   const [loading, setLoading] = useState(true);
//   const [shouldLoadProject, setShouldLoadProject] = useState(
//     () => typeof window !== 'undefined' && !('IntersectionObserver' in window)
//   );
//   const projectSentinelRef = useRef(null);

//   // Simulate the loader delay matching the video
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1800);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (loading || shouldLoadProject) return;

//     const sentinelEl = projectSentinelRef.current;
//     if (!sentinelEl) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries.some((entry) => entry.isIntersecting)) {
//           setShouldLoadProject(true);
//           observer.disconnect();
//         }
//       },
//       { root: null, rootMargin: '200px 0px', threshold: 0.01 }
//     );

//     observer.observe(sentinelEl);
//     return () => observer.disconnect();
//   }, [loading, shouldLoadProject]);

//   return (
//     <>
//       {/* 1. The Preloader */}
//       <AnimatePresence>
//         {loading && (
//           <MotionDiv
//             key="loader"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="fixed inset-0 z-100 bg-[#0c0c0c] flex items-center justify-center"
//           >
//             <MotionDiv
//               initial={{ scale: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="text-white text-3xl md:text-4xl font-bold tracking-tight flex items-start"
//             >
//               fabrica<span className="text-sm mt-1 ml-[2px] font-medium">®</span>
//             </MotionDiv>
//           </MotionDiv>
//         )}
//       </AnimatePresence>

//       {/* Main Page Layout (Revealed after loading) */}
//       <div className="min-h-screen flex flex-col font-sans">
        
//         {/* 2. The Light Nav Bar (Header) */}
//         <header className="w-full bg-[#efefec] flex items-center justify-between px-6 py-4 border-b border-black/5 z-50">
//           {/* Logo Area */}
//           <div className="flex-1">
//             <a href="/" className="text-2xl font-bold tracking-tight text-black flex items-start w-fit">
//               fabrica<span className="text-sm mt-1 ml-px font-medium">®</span>
//             </a>
//           </div>

//           {/* Center Navigation Links */}
//           <nav className="hidden md:flex flex-1 justify-center space-x-10 lg:space-x-16">
//             <a href="#studio" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Studio</a>
//             <a href="#projects" className="text-sm font-medium text-black hover:opacity-60 transition-opacity flex items-start gap-1">
//               Projects <span className="text-[10px] mt-0.5 opacity-80">(3)</span>
//             </a>
//             <a href="#blog" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Blog</a>
//             <a href="#contact" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Contact</a>
//           </nav>

//           {/* Right Menu / Hamburger Button */}
//           <div className="flex-1 flex justify-end">
//             <button className="flex flex-col items-center justify-center w-14 h-8 rounded-full border border-black hover:bg-black/5 transition-colors gap-[3px]" aria-label="Toggle Menu">
//               <span className="w-5 h-[1.5px] bg-black block"></span>
//               <span className="w-5 h-[1.5px] bg-black block"></span>
//             </button>
//           </div>
//         </header>

//         {/* 3. The Dark Hero Content */}
//         <main className="relative flex-grow bg-[#0c0c0c] text-white flex flex-col justify-between pt-16 pb-8 px-8 md:px-12 overflow-hidden">
          
//           {/* Subtle Background Glow & Floating Plusses (+) */}
//           <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px]"></div>
//             <div className="absolute w-full h-full text-white/20 text-xl font-light">
//               <span className="absolute top-[30%] left-[15%]">+</span>
//               <span className="absolute top-[60%] left-[30%]">+</span>
//               <span className="absolute top-[40%] right-[35%]">+</span>
//               <span className="absolute top-[70%] right-[15%]">+</span>
//               <span className="absolute bottom-[20%] left-[50%]">+</span>
//             </div>
//           </div>

//           {/* Top/Middle Section: Huge Text & Services */}
//           <div className="relative z-10 w-full max-w-400 mx-auto flex flex-col lg:flex-row justify-between items-start mt-8">
//             <MotionDiv 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="flex flex-col"
//             >
//               <h1 className="text-[14vw] md:text-[11vw] leading-none font-bold tracking-tighter flex items-start text-white">
//                 fabrica<span className="text-[4vw] md:text-[3vw] mt-4 ml-2">®</span>
//               </h1>
//               <h2 className="text-[7vw] md:text-[5.5vw] leading-none font-bold tracking-tighter text-white text-right pr-[8vw] md:pr-[4vw]">
//                 Studio
//               </h2>
//             </MotionDiv>

//             <MotionDiv 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: loading ? 0 : 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="mt-16 lg:mt-6 lg:pt-16 lg:pr-16"
//             >
//               <ul className="space-y-3 text-lg md:text-[22px] text-gray-300 font-medium tracking-tight">
//                 <li className="hover:text-white transition-colors cursor-default">Branding and Identity</li>
//                 <li className="hover:text-white transition-colors cursor-default">Social Media Marketing</li>
//                 <li className="hover:text-white transition-colors cursor-default">Web Design and Development</li>
//                 <li className="hover:text-white transition-colors cursor-default">SEO Optimization</li>
//               </ul>
//             </MotionDiv>
//           </div>

//           {/* Bottom Section: Footer Text & Widget */}
//           <MotionDiv 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-10 mt-24 lg:mt-12"
//           >
//             <div className="max-w-md">
//               <p className="text-[19px] font-medium leading-[1.4] tracking-tight">
//                 <span className="text-white">No generic websites. No empty marketing promises. </span>
//                 <span className="text-gray-500">Just tools and strategies that help your business grow and your brand shine.</span>
//               </p>
//             </div>

//             <div className="text-gray-500 text-sm font-medium mb-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//               © 2025 fabrica® Studio
//             </div>

//             <div className="bg-[#f2f2f2] rounded-[24px] p-3 flex items-center gap-4 w-fit pr-8 shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer">
//               <img 
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
//                 alt="Lauren Thompson" 
//                 className="w-16 h-20 object-cover rounded-[18px]" 
//               />
//               <div className="flex flex-col justify-center">
//                 <span className="text-[10px] font-bold text-gray-500 tracking-wider">Team Lead<br/>at fabrica®</span>
//                 <span className="text-[17px] font-bold text-black leading-tight mt-1 mb-2">Lauren<br/>Thompson</span>
//                 <button className="bg-[#111] text-white text-[11px] font-bold py-1.5 px-3 rounded-full w-fit flex items-center gap-1.5 hover:bg-black/80 transition-colors">
//                   Let's talk
//                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                 </button>
//               </div>
//             </div>
//           </MotionDiv>
//         </main>

//         <div ref={projectSentinelRef} aria-hidden="true" />
//         <Suspense
//           fallback={
//             <section className="w-full bg-[#f5f5f5] py-20 px-6 md:px-12 font-sans">
//               <div className="w-full max-w-[1600px] mx-auto text-gray-500 font-medium text-[15px]">
//                 Loading projects…
//               </div>
//             </section>
//           }
//         >
//           {shouldLoadProject ? <LazyProject /> : null}
//         </Suspense>
//       </div>
//     </>
//   );
// };

// export default Hero;


import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Project from '../sections/Project/Project';

const LazyProject = React.lazy(() => import('../sections/Project/Project'));

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [shouldLoadProject, setShouldLoadProject] = useState(true);
  const projectSentinelRef = useRef(null);

  // Simulate the loader delay matching the video
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || shouldLoadProject) return;

    const sentinelEl = projectSentinelRef.current;
    if (!sentinelEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadProject(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: '-100px 0px', threshold: 0.01 }
    );

    observer.observe(sentinelEl);
    return () => observer.disconnect();
  }, [loading, shouldLoadProject]);

  return (
    <>
      {/* 1. The Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0c0c0c] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-white text-3xl md:text-4xl font-bold tracking-tight flex items-start"
            >
              fabrica<span className="text-sm mt-1 ml-[2px] font-medium">®</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Layout (Revealed after loading) */}
      <div className="min-h-screen flex flex-col font-sans">
        
        {/* 2. The Light Nav Bar (Header) */}
        <header className="w-full bg-[#efefec] flex items-center justify-between px-6 py-4 border-b border-black/5 z-50">
          {/* Logo Area */}
          <div className="flex-1">
            <a href="/" className="text-2xl font-bold tracking-tight text-black flex items-start w-fit">
              fabrica<span className="text-sm mt-1 ml-[1px] font-medium">®</span>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex flex-1 justify-center space-x-10 lg:space-x-16">
            <a href="#studio" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Studio</a>
            <a href="#projects" className="text-sm font-medium text-black hover:opacity-60 transition-opacity flex items-start gap-1">
              Projects <span className="text-[10px] mt-0.5 opacity-80">(3)</span>
            </a>
            <a href="#blog" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Blog</a>
            <a href="#contact" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">Contact</a>
          </nav>

          {/* Right Menu / Hamburger Button */}
          <div className="flex-1 flex justify-end">
            <button className="flex flex-col items-center justify-center w-14 h-8 rounded-full border border-black hover:bg-black/5 transition-colors gap-[3px]" aria-label="Toggle Menu">
              <span className="w-5 h-[1.5px] bg-black block"></span>
              <span className="w-5 h-[1.5px] bg-black block"></span>
            </button>
          </div>
        </header>

        {/* 3. The Dark Hero Content */}
        <main className="relative flex-grow bg-[#0c0c0c] text-white flex flex-col justify-between pt-16 pb-8 px-8 md:px-12 overflow-hidden">
          
          {/* Subtle Background Glow & Floating Plusses (+) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px]"></div>
            <div className="absolute w-full h-full text-white/20 text-xl font-light">
              <span className="absolute top-[30%] left-[15%]">+</span>
              <span className="absolute top-[60%] left-[30%]">+</span>
              <span className="absolute top-[40%] right-[35%]">+</span>
              <span className="absolute top-[70%] right-[15%]">+</span>
              <span className="absolute bottom-[20%] left-[50%]">+</span>
            </div>
          </div>

          {/* Top/Middle Section: Huge Text & Services */}
          <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col"
            >
              <h1 className="text-[14vw] md:text-[11vw] leading-none font-bold tracking-tighter flex items-start text-white">
                fabrica<span className="text-[4vw] md:text-[3vw] mt-4 ml-2">®</span>
              </h1>
              <h2 className="text-[7vw] md:text-[5.5vw] leading-none font-bold tracking-tighter text-white text-right pr-[8vw] md:pr-[4vw]">
                Studio
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: loading ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 lg:mt-6 lg:pt-16 lg:pr-16"
            >
              <ul className="space-y-3 text-lg md:text-[22px] text-gray-300 font-medium tracking-tight">
                <li className="hover:text-white transition-colors cursor-default">Branding and Identity</li>
                <li className="hover:text-white transition-colors cursor-default">Social Media Marketing</li>
                <li className="hover:text-white transition-colors cursor-default">Web Design and Development</li>
                <li className="hover:text-white transition-colors cursor-default">SEO Optimization</li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section: Footer Text & Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-10 mt-24 lg:mt-12"
          >
            <div className="max-w-md">
              <p className="text-[19px] font-medium leading-[1.4] tracking-tight">
                <span className="text-white">No generic websites. No empty marketing promises. </span>
                <span className="text-gray-500">Just tools and strategies that help your business grow and your brand shine.</span>
              </p>
            </div>

            <div className="text-gray-500 text-sm font-medium mb-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              © 2025 fabrica® Studio
            </div>

            <div className="bg-[#f2f2f2] rounded-[24px] p-3 flex items-center gap-4 w-fit pr-8 shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                alt="Lauren Thompson" 
                className="w-16 h-20 object-cover rounded-[18px]" 
              />
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold text-gray-500 tracking-wider">Team Lead<br/>at fabrica®</span>
                <span className="text-[17px] font-bold text-black leading-tight mt-1 mb-2">Lauren<br/>Thompson</span>
                <button className="bg-[#111] text-white text-[11px] font-bold py-1.5 px-3 rounded-full w-fit flex items-center gap-1.5 hover:bg-black/80 transition-colors">
                  Let's talk
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      <div ref={projectSentinelRef} aria-hidden="true" style={{ height: '1px' }} />
      <Suspense
        fallback={
          <section className="w-full bg-[#f5f5f5] py-20 px-6 md:px-12 font-sans">
            <div className="w-full max-w-[1600px] mx-auto text-gray-500 font-medium text-[15px]">
              Loading projects…
            </div>
          </section>
        }
      >
        {shouldLoadProject ? <Project /> : null}
      </Suspense>
    </>
  );
};

export default Hero;