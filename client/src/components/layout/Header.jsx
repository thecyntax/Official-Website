import React, { useState } from "react";
import Logo from "../../assets/images/logo/theCyntax-Logo.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Services", id: "services" },
  ];

  // ✅ SAME HEIGHT USED EVERYWHERE
  const HEADER_HEIGHT = "h-[56px] lg:h-[48px] xl:h-[60px]";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full ${HEADER_HEIGHT} px-4 md:px-8 flex items-center justify-between bg-[#F5F5F5] md:justify-start lg:justify-between md:gap-10 z-50`}
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="The Cyntax Logo"
          className="h-5 md:h-6 lg:h-5 xl:h-6"
        />

        {/* Desktop Nav */}
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.id}`}
            className={`hidden md:block whitespace-nowrap lg:text-[13px] xl:text-[16px] cursor-pointer font-semibold text-[#090909] tracking-[-0.03em]
            transition-opacity duration-300 ease-in-out
            ${
              menuOpen
                ? "opacity-0 pointer-events-none"
                : "opacity-100 delay-150"
            }`}
          >
            {item.name}
          </a>
        ))}

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-auto flex flex-col gap-1.5 p-1 md:ml-0"
        >
          <span
            className={`block h-0.5 w-8 bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-8 bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* SPACER (MATCHES HEADER EXACTLY) */}
      <div className={HEADER_HEIGHT} />

      {/* MENU */}
      <div
        className={`fixed left-0 right-0 top-[56px] lg:top-[48px] xl:top-[60px] z-40 bg-[#F5F5F5] transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex min-h-[75vh] flex-col justify-between">
          {/* CENTER MENU */}
          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="relative overflow-hidden cursor-pointer group px-2 block"
              >
                <p className="text-[40px] sm:text-[50px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.1] tracking-[-0.03em] text-[#090909] transition-transform duration-200 group-hover:-translate-y-full">
                  {item.name}
                </p>

                <p className="absolute left-0 top-0 text-[40px] sm:text-[50px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.1] tracking-[-0.03em] text-[#090909] translate-y-full transition-transform duration-200 group-hover:translate-y-0 px-2">
                  {item.name}
                </p>
              </a>
            ))}
          </div>

          {/* FOOTER */}
          <div className="px-4 md:px-8 pb-6 text-sm text-[#090909]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-1">
                <p>(312) 555-2468</p>
                <p className="font-semibold underline underline-offset-4 cursor-pointer">
                  hello@thecyntax.com
                </p>
              </div>

              <div className="flex gap-6 text-xs md:text-sm">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Service</p>
              </div>

              <div className="text-xs md:text-sm">
                © {new Date().getFullYear()} The Cyntax
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
