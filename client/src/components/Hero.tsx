import React from "react";
import HeroImage from "../assets/Hero.jpeg";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="absolute z-10 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-600">San Diego Blood Bank</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Your source for lifesaving blood donations
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="mr-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-lg"
          >
            Donate Blood
          </a>
          <a
            href="#"
            className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-md text-lg"
          >
            Find Blood
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
