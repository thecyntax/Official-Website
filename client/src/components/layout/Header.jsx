import React, { useState } from "react";
import Logo from "../../assets/images/logo/theCyntax-Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Projects", "Why Choose Us", "Services"];

  return (
    <div className="relative">
      {/* HEADER */}
      <header className="mx-6 my-5 flex items-center justify-between bg-[#F5F5F5] md:mx-10 md:justify-start lg:justify-between md:gap-10 relative z-50">
        {/* Logo */}
        <img src={Logo} alt="The Cyntax Logo" className="h-5 md:h-6.25" />

        {/* Desktop Nav */}
        {menuItems.map((item) => (
          <p
            key={item}
            className={`hidden md:block whitespace-nowrap cursor-pointer font-semibold text-[#090909] tracking-[-0.03em]
            transition-opacity duration-300 ease-in-out
            ${
              menuOpen
                ? "opacity-0 pointer-events-none"
                : "opacity-100 delay-150"
            }`}
          >
            {item}
          </p>
        ))}

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-auto flex flex-col gap-1.5 p-1 md:ml-0"
        >
          <span
            className={`block h-0.5 w-10 bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-10 bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* MENU */}
      <div
        className={`absolute left-0 right-0 top-full z-40 bg-[#F5F5F5] transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-[75vh] flex-col justify-between">
          {/* CENTER MENU */}
          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            {menuItems.map((item) => (
              <div
                key={item}
                className="relative overflow-hidden cursor-pointer group px-2"
              >
                {/* ORIGINAL TEXT */}
                <p
                  className="text-[50px] font-bold leading-[1.1] tracking-[-0.03em] text-[#090909]
                  transform-gpu will-change-transform
                  transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
                  group-hover:-translate-y-full"
                >
                  {item}
                </p>

                {/* HOVER TEXT */}
                <p
                  className="absolute left-0 top-0 text-[50px] font-bold leading-[1.1] tracking-[-0.03em] text-[#090909]
                  translate-y-full
                  transform-gpu will-change-transform
                  transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
                  group-hover:translate-y-0"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="px-6 md:px-10 pb-6 text-sm text-[#090909]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              {/* LEFT */}
              <div className="flex flex-col gap-1">
                <p>(312) 555-2468</p>
                <p className="font-semibold underline underline-offset-4 cursor-pointer">
                  hello@thecyntax.com
                </p>
              </div>

              {/* CENTER */}
              <div className="flex gap-6 text-xs md:text-sm">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Service</p>
              </div>

              {/* RIGHT */}
              <div className="text-xs md:text-sm">© 2025 The Cyntax Studio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
