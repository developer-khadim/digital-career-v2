import React from "react";
import RadialGlowShape from "../UI/RadialGlowShape";

const DecorativeElements = () => {
  return (
    <>
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-pulse">
        <RadialGlowShape width={60} height={60} color="rgba(190, 242, 100, 0.6)" rays={16} />
      </div>
      <div className="absolute top-32 right-20 opacity-60 animate-pulse delay-150">
        <RadialGlowShape width={40} height={40} color="rgba(190, 242, 100, 0.4)" rays={12} />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-40">
        <RadialGlowShape width={50} height={50} color="rgba(190, 242, 100, 0.3)" rays={10} />
      </div>
    </>
  );
};

export default DecorativeElements;