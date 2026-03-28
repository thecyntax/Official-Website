import React from "react";
import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.10,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
