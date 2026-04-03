import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-black">
        Reach Us
      </h2>

      <form
        className="space-y-6 sm:space-y-8 flex-1"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Input */}
        <label className="block">
          <div className="border-b border-gray-300 py-2 focus-within:border-black transition-colors duration-300">
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
          <div className="border-b border-gray-300 py-2 flex items-center focus-within:border-black transition-colors duration-300">
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-2 text-sm md:text-base"
              required
            />
          </div>
        </label>

        {/* Message Input */}
        <label className="block">
          <div className="border-b border-gray-300 py-2 focus-within:border-black transition-colors duration-300">
            <textarea
              placeholder="Your message *"
              rows={3}
              className="w-full bg-transparent outline-none text-black placeholder-gray-400 py-2 text-sm md:text-base resize-none"
              required
            />
          </div>
        </label>

        {/* Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="group bg-black text-white px-6 py-3 rounded-full flex items-center gap-4 hover:bg-gray-800 transition-all duration-300"
          >
            <span className="text-sm font-semibold">Send Message</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full transition-transform duration-300 group-hover:scale-150" />
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="mt-8 text-gray-500 text-sm md:text-base leading-relaxed">
        Drop us a message and our team will get back to you as soon as possible.
      </p>
    </div>
  );
};

export default NewsLetter;
