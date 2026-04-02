import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-black">
        Newsletter
      </h2>

      <form
        className="space-y-6 sm:space-y-8 flex-1"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Input */}
        <label className="block">
          <div className="border-b border-gray-300 py-2 focus-within:border-black">
            <input
              type="text"
              placeholder="Your name *"
              className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-2 text-sm md:text-base"
              required
            />
          </div>
        </label>

        {/* Email Input */}
        <label className="block">
          <div className="border-b border-gray-300 py-2 flex items-center">
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-2 text-sm md:text-base"
              required
            />
            <div className="ml-2 text-teal-600">✉</div>
          </div>
        </label>

        {/* Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-4 hover:bg-gray-800"
          >
            <span className="text-sm font-semibold">Subscribe</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="mt-6 text-gray-500 text-sm md:text-base">
        Join our newsletter and stay updated on the latest trends.
      </p>
    </div>
  );
};

export default NewsLetter;
