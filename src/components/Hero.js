import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[440px]">
      <img
        className="w-full h-full object-cover"
        src="./images/Rec.png"
        alt=""
      />
      <div className="absolute text-center sm:text-left w-full top-[16%] px-20 py-6 mt-6 md:px-22">
        <p className=" md:text-justify text-[48px] font-semibold text-white">
          Watch
        </p>
        <p className="text-[48px] font-semibold text-white">
          Something
        </p>
        <p className=" text-[48px] font-semibold text-white">
          Incredible.
        </p>
      </div>
    </div>
  );
};

export default Hero;
