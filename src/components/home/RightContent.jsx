import React from "react";
import {
  Star,
  Rocket,
  Code,
  Zap,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import arrow from "../../assets/heroarrow.png";

const RightContent = () => {
  const stars = 5;

  return (
    <section
      className="
        flex flex-col items-center md:items-end
        gap-4 sm:gap-5 md:gap-6 lg:gap-8
        flex-1
        px-4 relative w-full
      "
      aria-label="Experience and achievements"
    >
      {/* Rating + Years */}
      <div
        className="
          w-full max-w-xs
          text-center md:text-right
        "
        role="img"
        aria-label={`${stars} out of ${stars} star rating, 2 years experience`}
      >
        <div
          className="flex gap-1 mb-2 sm:mb-3 justify-center md:justify-end"
          aria-hidden="true"
        >
          {Array.from({ length: stars }).map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 fill-primary text-primary"
            />
          ))}
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          2 Years
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
          Building Digital Solutions
        </p>
      </div>

      {/* Primary CTA Button */}
      <div className="w-full max-w-xs">
        <button
          className="
          w-full
          flex items-center justify-center gap-2
          px-4 sm:px-5 md:px-6 py-2.5 sm:py-3
          hover:bg-primaryHigh
          text-secondary font-semibold
          rounded-lg sm:rounded-xl
          border-2 border-primary
          transition-all duration-300
          text-sm sm:text-base
        "
        >
          <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Start Your Project</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <img
        src={arrow}
        alt="Arrow"
        className="hidden lg:block absolute left-0 bottom-[125px] w-32 lg:w-40 h-auto object-contain rotate-[220deg]"
      />

      {/* Tech Stack Badges */}
      <div className="w-full max-w-xs space-y-2 sm:space-y-3">
        {/* Modern Tech Stack */}
        <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-primary">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="text-left flex-1">
            <p className="text-xs sm:text-sm font-bold text-gray-900">Modern Stack</p>
            <p className="text-[10px] sm:text-xs text-gray-600">React • Next.js • Node</p>
          </div>
        </div>

        {/* Fast Delivery */}
        <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-primary">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="text-left flex-1">
            <p className="text-xs sm:text-sm font-bold text-gray-900">Lightning Fast</p>
            <p className="text-[10px] sm:text-xs text-gray-600">2-Week Turnaround</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default RightContent;