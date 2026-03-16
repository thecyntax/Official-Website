

import React from 'react';

const NewsLetter = () => {
  return (
    // fill the parent column; let parent control the width
    <div className="w-full h-full  flex flex-col">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-10 text-black">Newsletter</h2>

      <form className="space-y-8 flex-1" onSubmit={(e) => e.preventDefault()}>
        {/* Name Input */}
        <div className="relative border-b border-gray-300 py-2 focus-within:border-black transition-colors">
          <input
            type="text"
            placeholder="Your name *"
            className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-1"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative border-b border-gray-300 py-2 focus-within:border-black transition-colors flex items-center">
          <input
            type="email"
            placeholder="Email *"
            className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-1"
            required
          />
          <div className="ml-2 text-teal-600 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-6 hover:bg-gray-800 transition-all w-fit"
          >
            <span className="font-semibold text-[12px]">Subscribe</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </button>
        </div>
      </form>

      {/* Footer Text - keep it from being too narrow */}
      <p className="mt-8 text-gray-500 text-sm leading-relaxed">
        Join our newsletter and stay updated <br /> on the latest trends in digital design.
      </p>
    </div>
  );
};

export default NewsLetter;