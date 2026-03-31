import { useEffect } from "react";

const GrainEffect = ({ id = "grained", className = "" }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.grained) {
      // Small timeout to ensure the DOM is fully painted
      const timer = setTimeout(() => {
        window.grained(`#${id}`, {
          animate: true,
          patternWidth: 100,
          patternHeight: 100,
          grainOpacity: 0.20,
          grainDensity: 1,
          grainWidth: 1,
          grainHeight: 1,
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [id]);

  return (
    <div
      id={id}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
      style={{ position: 'absolute' }}
    />
  );
};

export default GrainEffect;