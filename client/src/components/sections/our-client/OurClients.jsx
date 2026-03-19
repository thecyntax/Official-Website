import React, { useState } from "react";

const clients = [
  {
    id: "logo-ipsum",
    label: "Logo Ipsum",
    logo: (
      <svg viewBox="0 0 110 44" width="110" height="44" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="32" fontFamily="inherit" fontWeight="700" fontSize="28" letterSpacing="-2" fill="currentColor">
          LOGO
        </text>
        <text x="2" y="43" fontFamily="inherit" fontWeight="400" fontSize="8" letterSpacing="3" fill="currentColor" opacity="0.5">
          IPSUM
        </text>
      </svg>
    ),
  },
  {
    id: "warpspeed",
    label: "Warpspeed",
    logo: (
      <span className="flex items-center gap-1.5 text-[15px] font-medium">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Warpspeed
      </span>
    ),
  },
  {
    id: "starburst",
    label: "Starburst",
    logo: (
      <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
          <polygon points="24,2 26.5,10 24,8 21.5,10" />
          <polygon points="24,46 21.5,38 24,40 26.5,38" />
          <polygon points="2,24 10,21.5 8,24 10,26.5" />
          <polygon points="46,24 38,26.5 40,24 38,21.5" />
          <polygon points="6.1,6.1 11.7,13.1 9.3,11.3 11.3,9.3" />
          <polygon points="41.9,41.9 36.3,34.9 38.7,36.7 36.7,38.7" />
          <polygon points="6.1,41.9 13.1,36.3 11.3,38.7 9.3,36.7" />
          <polygon points="41.9,6.1 34.9,11.7 36.7,9.3 38.7,11.3" />
          <circle cx="24" cy="24" r="4.5" />
        </g>
      </svg>
    ),
  },
  {
    id: "loqo",
    label: "LOQO",
    logo: (
      <svg viewBox="0 0 120 40" width="120" height="40" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="32" fontFamily="inherit" fontWeight="700" fontSize="34" letterSpacing="-3" fill="currentColor">
          LOQO
        </text>
        <circle cx="108" cy="22" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "device",
    label: "Device Co",
    logo: (
      <svg viewBox="0 0 80 48" width="80" height="48" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="58" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="10" y="14" width="18" height="20" rx="2" fill="currentColor" />
        <rect x="34" y="14" width="18" height="20" rx="2" fill="currentColor" />
        <rect x="62" y="12" width="12" height="10" rx="6" fill="currentColor" />
        <line x1="62" y1="17" x2="66" y2="17" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "nexus",
    label: "Nexus",
    logo: (
      <svg viewBox="0 0 80 48" width="80" height="48" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="38" fontFamily="inherit" fontWeight="700" fontSize="42" letterSpacing="-3" fill="currentColor">
          N
        </text>
        <line x1="54" y1="10" x2="54" y2="38" stroke="currentColor" strokeWidth="5" />
        <line x1="54" y1="10" x2="70" y2="38" stroke="currentColor" strokeWidth="5" />
        <line x1="70" y1="10" x2="70" y2="38" stroke="currentColor" strokeWidth="5" />
      </svg>
    ),
  },
];

const OurClients = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-6 bg-[#f5f5f5] font-sans">

      {/* Header */}
      <div className="flex items-center gap-16 mb-5 pl-12">
        <div className="flex items-center gap-2 text-sm font-medium text-[#111]">
          <div className="w-5 h-5 rounded-full border-[1.5px] border-[#111] flex items-center justify-center text-sm leading-none flex-shrink-0">
            +
          </div>
          Our clients
        </div>
        <span className="text-[13px] text-[#888]">(2016–25©)</span>
      </div>

      {/* Logo Grid */}
      <div
        className="grid gap-4 pl-50 pr-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-xl flex items-center justify-center p-6 cursor-default transition-colors duration-200 text-[#111]"
            style={{
              aspectRatio: "4 / 3",
              border: hovered === client.id ? "0.5px solid #bbb" : "0.5px solid #e5e5e5",
            }}
            onMouseEnter={() => setHovered(client.id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={client.label}
          >
            {client.logo}
          </div>
        ))}
      </div>

    </section>
  );
};

export default OurClients;