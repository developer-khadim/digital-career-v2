import React from "react";
import BlobShape from "../UI/BlobShape";

const CenterContent = () => {
  return (
    <div className="flex flex-col items-center justify-center relative flex-shrink-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <BlobShape color="bg-primary" animate={true} variant="organic" className=" w-[230px] h-[210px] md:w-[350px] md:h-[350px]" />
      </div>
      <div className="relative z-10 flex items-center justify-center ">
        <img
          src="./hero.png"
          alt="Professional Woman"
          className="select-none pointer-events-none w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-lime-400/30"
        />
        
      </div>
      <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg z-20 hidden md:block">
        <p className="text-xs text-gray-700 font-medium">Innovate Your Brand</p>
      </div>
    </div>
  );
};

export default CenterContent;