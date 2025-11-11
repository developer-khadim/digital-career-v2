import React from "react";
import { Sparkles } from "lucide-react";
import teamwork from "../../assets/teamwork.png";
import RadialGlowShape from "../UI/RadialGlowShape";
import idea from "../../assets/inovation.png";

const MasterPieces = () => {
  return (
    <section className="w-full container mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-10">
      <div className="w-full h-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10 lg:gap-16 mb-8">
          {/* Left: Heading */}
          <div className="w-full lg:w-1/2">
            <h2
              className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold 
              text-white
              leading-tight
              relative z-10
            "
            >
              Turning Ideas Into{" "}
              <span className="relative inline-block text-primary">
                Masterpieces
              </span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="w-full lg:w-1/2">
            <p
              className="
              text-sm sm:text-base md:text-lg 
              text-gray-200 
              leading-relaxed
              font-medium
            "
            >
              We transform your vision into reality through innovative software
              solutions that drive growth and success. Our team of expert
              developers and designers craft digital experiences that not only
              meet your business objectives but exceed expectations. From
              concept to deployment, we're committed to delivering excellence in
              every line of code and every pixel designed.
            </p>
          </div>
        </div>

        {/* Images Section - Responsive with Hover Effects */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 sm:gap-8 md:gap-10 items-center pt-5">
          {/* Image 1: Teamwork - Larger Image */}
          <div className="w-full md:w-[65%] relative group overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Decorative Glow */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-4 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <RadialGlowShape
                size={50}
                color="#a3e635"
                intensity={10}
                rays={5}
              />
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={teamwork}
                alt="Team collaboration and development"
                className="
                  w-full h-[250px] sm:h-[300px] md:h-[400px] 
                  object-cover 
                  transform group-hover:scale-110 
                  transition-transform duration-700 ease-out
                "
              />

              {/* Overlay - appears on hover */}
              <div
                className="
  absolute inset-0 
  bg-gradient-to-t from-black/70 via-black/30 to-transparent
  opacity-0 group-hover:opacity-100
  transition-opacity duration-500
  flex items-end justify-start
  p-4 sm:p-6 md:p-8
"
              >
                <div
                  className="
    bg-primary/95 backdrop-blur-sm
    rounded-lg sm:rounded-xl
    px-4 py-3 sm:px-6 sm:py-4
    transform translate-y-4 group-hover:translate-y-0 
    transition-transform duration-500
    shadow-lg
    max-w-md
  "
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                      Collaborative Development
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    Our expert team working together to build innovative
                    solutions
                  </p>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div
                className="
                absolute inset-0 
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-1000 ease-in-out
                pointer-events-none
              "
              />
            </div>
          </div>

          {/* Image 2: Innovation - Smaller Vertical Image */}
          <div className="w-full md:w-[35%] relative group overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={idea}
                alt="Innovation and creative thinking"
                className="
                  w-full h-[300px] sm:h-[400px] md:h-[500px]
                  object-cover 
                  transform group-hover:scale-110 group-hover:rotate-2
                  transition-all duration-700 ease-out
                "
              />

              {/* Overlay - appears on hover */}
              <div
                className="
  absolute inset-0 
  bg-gradient-to-t from-black/80 via-black/40 to-transparent
  opacity-0 group-hover:opacity-100
  transition-opacity duration-500
  flex items-end justify-start
  p-4 sm:p-6 md:p-8
"
              >
                <div
                  className="
    bg-primary/95 backdrop-blur-sm
    rounded-lg sm:rounded-xl
    px-4 py-3 sm:px-6 sm:py-4
    transform translate-y-4 group-hover:translate-y-0 
    transition-transform duration-500
    shadow-xl
    border border-lime-300/30
    max-w-sm
  "
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                      Creative Innovation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    Transforming bold ideas into digital masterpieces
                  </p>
                </div>
              </div>

              {/* Corner glow effect */}
              <div
                className="
                absolute top-0 right-0 
                w-24 h-24 
                bg-lime-400/30 
                rounded-bl-full 
                blur-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
              />

              {/* Shine effect on hover */}
              <div
                className="
                absolute inset-0 
                bg-gradient-to-br from-transparent via-white/30 to-transparent
                -translate-x-full -translate-y-full 
                group-hover:translate-x-0 group-hover:translate-y-0
                transition-transform duration-1000 ease-in-out
                pointer-events-none
              "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPieces;
