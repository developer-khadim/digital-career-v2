import React from "react";

const Custom_lines = ({ className = '' }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Horizontal Line using span */}
      <span className="rounded-lg block border-t-2 border-[#baed62] w-[30px] rotate-[-16deg]" />
      <span className="rounded-lg block border-t-2 border-[#baed62] w-[30px]" />
      <span className="rounded-lg block border-t-2 border-[#baed62] w-[30px] rotate-[25deg]" />
    </div>
  );
};

export default Custom_lines;