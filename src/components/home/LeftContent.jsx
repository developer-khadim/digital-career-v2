import React from "react";
import { Globe, TrendingUp } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Tagline */}
      <div className="relative">
        <div className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-lime-500 to-transparent"></div>
        <p className="text-gray-900 leading-relaxed text-xs sm:text-sm md:text-base">
          From web development to branding, we deliver innovative strategies that elevate your brand and drive growth. Let's create something exceptional together!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Global Clients */}
        <div className="group relative bg-gradient-to-br from-primary/30 to-primary/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-lime-500/50 transition-all duration-300">
          <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl"></div>
          <div className="relative">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mb-1.5 sm:mb-2" />
            <p className="text-[10px] sm:text-xs text-gray-800 mb-0.5 sm:mb-1">Global Clients</p>
            <p className="text-sm sm:text-base lg:text-lg font-bold text-primaryHigh">5+ Countries</p>
          </div>
        </div>

        {/* Success Rate */}
        <div className="group relative bg-gradient-to-br from-primary/30 to-primary/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-lime-500/50 transition-all duration-300">
          <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl"></div>
          <div className="relative">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mb-1.5 sm:mb-2" />
            <p className="text-[10px] sm:text-xs text-gray-800 mb-0.5 sm:mb-1">Success Rate</p>
            <p className="text-sm sm:text-base lg:text-lg font-bold text-primaryHigh">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
