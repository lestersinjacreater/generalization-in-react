// filepath: c:\Users\User\Desktop\final year\predictions frontend\crop-yield-frontend\src\pages\landingpage\Herosection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <header className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-green-600 to-green-900 text-white p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold">Precision Farming for Kenya</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
        Data-driven insights to optimize your farm's productivity and profitability.
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="https://next-tetra-61.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2F"
          className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-md font-bold hover:bg-yellow-500 transition duration-200"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default HeroSection;