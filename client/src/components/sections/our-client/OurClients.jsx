import React, { useState } from "react";
import { Plus } from "lucide-react";

const clients = [
  {
    id: "logo-ipsum",
    label: "Logo Ipsum",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Logo+Ipsum",
  },
  {
    id: "warpspeed",
    label: "Warpspeed",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Warpspeed",
  },
  {
    id: "starburst",
    label: "Starburst",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Starburst",
  },
  {
    id: "loqo",
    label: "LOQO",
    logo: "https://placehold.co/200x100/ffffff/111111?text=LOQO",
  },
  {
    id: "device",
    label: "Device Co",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Device+Co",
  },
  {
    id: "nexus",
    label: "Nexus",
    logo: "https://placehold.co/200x100/ffffff/111111?text=Nexus",
  },
];

const OurClients = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#f5f5f5]">
      {/* SAME CONTAINER AS FOOTER */}
      <div className="px-4 py-10 md:py-12 mx-auto lg:m-10 lg:pt-[80px]  ">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm font-medium text-[#111]">
            <div className="w-5  h-5 rounded-full border-[1.5px] border-[#111] flex items-center justify-center text-sm leading-none shrink-0 pt-px">
              <Plus className="w-4 h-4" />
            </div>
            Our clients
          </div>

          <span className="text-[13px] text-[#888]">(2016–25©)</span>
        </div>

        {/* Logos Flex Container */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl flex items-center justify-center p-6 sm:p-8 w-[calc(50%-12px)] sm:w-[calc(33.33%-16px)] md:w-[calc(33.33%-22px)] lg:w-[240px] xl:w-[260px] transition-all duration-200 cursor-default text-[#111]"
              style={{
                aspectRatio: "4 / 3",
                border:
                  hovered === client.id
                    ? "0.5px solid #bbb"
                    : "0.5px solid #e5e5e5",
              }}
              onMouseEnter={() => setHovered(client.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={client.logo}
                alt={client.label}
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
