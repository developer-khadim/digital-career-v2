

import React from "react";
import LeftContent from "./LeftContent";
import CenterContent from "./CenterContent";
import RightContent from "./RightContent";

const HeroSection = () => {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center lg:min-h-[calc(100vh-25rem)]">
          {/* Left Content - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block lg:col-span-3 order-2 lg:order-1">
            <LeftContent />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 md:col-span-12 order-1 lg:order-2">
            <CenterContent />
          </div>

          {/* Right Content - Hidden on mobile and tablet, visible on desktop */}
          <div className="hidden lg:block lg:col-span-3 order-3">
            <RightContent />
          </div>
        </div>

        {/* Mobile Stats - Only visible on small screens */}
        <div className="md:hidden mt-8 space-y-4">
          <LeftContent />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
