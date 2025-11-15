import React from "react";
import { Star, Zap, Code, ArrowRight } from "lucide-react";

const RightContent = () => {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Rating Card */}
      <div className="relative bg-gradient-to-br from-primary/30 to-primary/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/50 backdrop-blur-sm"></div>
        <div className="relative space-y-2 sm:space-y-3">
          {/* Stars */}
          <div className="flex gap-0.5 sm:gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-primaryHigh text-primaryHigh"
              />
            ))}
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white">2 Years</p>
            <p className="text-xs sm:text-sm text-gray-800">Building Digital Solutions</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="group relative w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primaryHigh text-gray-700 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg shadow-lime-500/30 hover:shadow-lime-500/50 transition-all duration-300 overflow-hidden text-sm sm:text-base">
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <a href="#services" className="relative flex items-center justify-center gap-2">
          Start Your Project
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </button>

      {/* Tech Badges */}
      <div className="space-y-2 sm:space-y-3">
        {/* Modern Stack */}
        <div className="group flex items-start gap-2 sm:gap-3 bg-primary/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 sm:p-4 hover:border-lime-500/50 transition-all">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-lime-500/10 rounded-lg flex items-center justify-center group-hover:bg-lime-500/20 transition-colors">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-primaryHigh">Modern Stack</p>
            <p className="text-[10px] sm:text-xs text-gray-800">React • Next.js • Node</p>
          </div>
        </div>

        {/* Fast Delivery */}
        <div className="group flex items-start gap-2 sm:gap-3 bg-primary/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 sm:p-4 hover:border-lime-500/50 transition-all">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-primaryHigh">Lightning Fast</p>
            <p className="text-[10px] sm:text-xs text-gray-800">2-Week Turnaround</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
