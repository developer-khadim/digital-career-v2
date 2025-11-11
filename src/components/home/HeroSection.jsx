import React from "react";
import Custom_lines from "./Custom_lines";
import TrueFocus from "../UI/TrueFocus";

const HeroSection = () => {
  return (
    <header className="relative text-center space-y-4 sm:space-y-6 max-w-8xl pb-6 sm:pb-8 md:pb-10 px-4">
      {/* Main heading with focus animation and decorative lines */}
      <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-tight">
        Empowering Brands <br />
        <span className="relative inline-block">
          Through{" "}
          <span className="relative inline-block">
            <TrueFocus
              sentence="Creative Solutions"
              manualMode={false}
              blurAmount={3}
              borderColor="var(--primary)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
            {/* Decorative accent lines */}
            <Custom_lines
              className="
                absolute
                bottom-[0.2em]
                right-[0.05em]
                translate-x-[100%] translate-y-[40%]
                scale-50 sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100
                pointer-events-none select-none
              "
              aria-hidden="true"
            />
          </span>
        </span>
      </h1>
    </header>
  );
};

export default HeroSection;