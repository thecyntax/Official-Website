import React from "react";
import Logo from "../../assets/images/logo/theCyntax-Logo.png";

const Header = () => {
  return (
    <header className="mx-6 my-5 flex items-center justify-between md:mx-10 md:justify-start lg:justify-between md:gap-10">
      {/* 1. Logo - Always Visible */}
      <img src={Logo} alt="The Cyntax Logo" className="h-5 md:h-6.25" />

      {/* 2. Navigation Items - Hidden on mobile, Flex on desktop (md and up) */}
      <p className="hidden cursor-pointer font-semibold text-[#090909] tracking-[-0.05em] md:block whitespace-nowrap">
        Home
      </p>
      <p className="hidden cursor-pointer font-semibold text-[#090909] tracking-[-0.05em] md:block whitespace-nowrap">
        Projects
      </p>
      <p className="hidden cursor-pointer font-semibold text-[#090909] tracking-[-0.05em] md:block whitespace-nowrap">
        Why Choose Us
      </p>
      <p className="hidden cursor-pointer font-semibold text-[#090909] tracking-[-0.05em] md:block whitespace-nowrap">
        Services
      </p>

      {/* 3. The Hamburger Menu - Always Visible, pushed to the right on mobile */}
      <button className="ml-auto flex flex-col gap-1.5 p-1 md:ml-0">
        {/* Top Line */}
        <span className="block h-0.5 w-10 bg-black"></span>
        {/* Bottom Line */}
        <span className="block h-0.5 w-10 bg-black"></span>
      </button>
    </header>
  );
};

export default Header;
