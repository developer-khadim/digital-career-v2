import React from "react";
import hero from "../../assets/hero.jpg";

const CenterContent = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10">
      {/* Main Heading */}
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
          Innovate Your{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryHigh">
              Brand
            </span>
            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-primary/20 blur-sm"></span>
          </span>
        </h1>
        <p className="text-gray-800 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto px-2">
          Transform your digital presence with cutting-edge solutions
        </p>
      </div>

      {/* Hero Image Container */}
      <div className="relative group w-full flex justify-center">
        {/* Animated Rings */}
        <div className="absolute inset-0 -m-2 sm:-m-4">
          <div className="absolute inset-0 rounded-full bg-lime-500/20 blur-xl sm:blur-2xl group-hover:bg-lime-500/30 transition-all duration-500"></div>
          <div className="absolute inset-0 rounded-full border-2 border-lime-500/30 animate-ping"></div>
        </div>

        {/* Image Wrapper */}
        <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-lg sm:blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div> */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-primary/40 shadow-xl sm:shadow-2xl">
            <img
              src={hero}
              alt="Innovation Showcase"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primaryHigh text-gray-800 text-[10px] xs:text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-6 sm:py-2 rounded-full shadow-lg shadow-primary/50 whitespace-nowrap">
          ✨ Award Winning
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
