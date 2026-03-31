import React from "react";
import { Plus, ArrowUpRight, AtSign, Mail } from "lucide-react";

const SectionTwo = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-start">
        {/* first section */}
        <div>
          <div className="py-10 md:py-16 lg:py-25">
            <Plus className="text-[#767676]" />
          </div>

          <div>
            <p className="text-[#767676] text-[14px] font-medium pb-3">
              Navigation
            </p>

            <div className="text-xl md:text-2xl font-medium flex flex-col gap-2">
              <p>Home</p>
              <p>Projects</p>
              <p>Why Choose Us</p>
              <p>Services</p>
            </div>
          </div>
        </div>

        {/* second section */}
        <div>
          <div className="py-10 md:py-16 lg:py-25">
            <Plus className="text-[#767676]" />
          </div>

          <div>
            <p className="text-[#767676] text-[14px] font-medium pb-3">
              Connect Us
            </p>

            <div className="text-xl md:text-2xl font-medium flex flex-col gap-2">
              <p className="flex items-center gap-2">
                Linked In <ArrowUpRight className="text-[#767676]" />
              </p>

              <p className="flex items-center gap-2">
                Contact Us <ArrowUpRight className="text-[#767676]" />
              </p>

              <p className="flex items-center gap-2">
                Mail Us <ArrowUpRight className="text-[#767676]" />
              </p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="py-10 md:py-16 lg:py-25">
            <Plus className="text-[#767676]" />
          </div>

          <div>
            <div className="flex gap-1 mb-2">
              <AtSign />
              <Mail />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium underline whitespace-nowrap">
            thecyntax.company@gmail.com
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
