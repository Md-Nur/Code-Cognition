import React from "react";

const Hero = () => {
  return (
    <header className="bg-primary hero text-white h-[1080px] sm:text-3xl md:text-5xl lg:text-7xl p-3 font-bold">
        <p className="bg-pink-300 max-w-[684px]">
          ELEVATE
          <span className="text-secondary"> YOUR BUSINESS WITH EXPERT </span>
          PROGRAMMING SOLUTIONS
        </p>
      {/* <div className="w-1/2 flex justify-center">
        <img src="./src/assets/hero/heroplus.png" />
      </div> */}
    </header>
  );
};

export default Hero;
