import React from "react";
import { ArrowRight, Award, Globe } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start space-y-4 sm:space-y-5 md:space-y-6 flex-1 relative w-full">
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-center md:text-left max-w-md">
        From web development to branding, we deliver innovative strategies that elevate your brand, drive growth. Let's create something exceptional together!
      </p>

      <button className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primaryHigh text-secondary rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group text-sm sm:text-base">
        Start Your Project
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
      </button>

      <div className="w-full max-w-xs">
        {/* Global Reach */}
        <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 p-3 sm:p-4 mb-3 sm:mb-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-primary">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="text-left flex-1">
            <p className="text-xs sm:text-sm font-bold text-gray-900">Global Clients</p>
            <p className="text-[10px] sm:text-xs text-gray-600">5+ Countries Served</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 p-2.5 sm:p-3 bg-gradient-to-r from-primary/20 to-third/20 rounded-full border border-primary/30">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-secondary">
            Top Rated Agency 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;