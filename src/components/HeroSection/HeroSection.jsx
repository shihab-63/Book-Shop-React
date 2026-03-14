import React from "react";
import heroImg from "../../assets/heroimg.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 bg-gray-100 rounded-2xl my-10 h-full py-12 md:py-24">
      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-around items-center">
        <div>
          <h1 className="text-3xl font-medium md:text-6xl mb-12 leading-tight">
            Books to freshen up <br className="hidden md:block" /> your bookshelf
          </h1>
          <button className="bg-green-500 py-6 px-8 text-lg md:text-xl text-white btn">View The List</button>
        </div>
        <img src={heroImg} alt={heroImg} />
      </div>
    </div>
  );
};

export default HeroSection;
