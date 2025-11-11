import React from 'react';

const ProcessStep = ({ step, index }) => {
  return (
    <div className="relative flex flex-col items-center text-center px-4 sm:px-6 group">
      {/* Step Number Circle */}
      <div className="bg-primary text-secondary rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold border-4 border-primary/30 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
        {step.id}
      </div>
      
      {/* Connecting Line (hidden on last item in mobile, shown in desktop) */}
      {index < 2 && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-primary/30 -z-10"></div>
      )}
      
      {/* Content */}
      <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-6 mb-2 text-white group-hover:text-primary transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default ProcessStep;
