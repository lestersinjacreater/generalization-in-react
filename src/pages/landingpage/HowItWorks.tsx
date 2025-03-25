// src/components/HowItWorks.tsx
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
      <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">1</div>
          <h3 className="mt-4 font-semibold text-lg">Sign Up</h3>
          <p className="mt-2 text-gray-600">Register with your farm details and join our community.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">2</div>
          <h3 className="mt-4 font-semibold text-lg">Enter Data</h3>
          <p className="mt-2 text-gray-600">Input your crop type and planting dates.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">3</div>
          <h3 className="mt-4 font-semibold text-lg">Get Predictions</h3>
          <p className="mt-2 text-gray-600">Receive AI-driven yield predictions and actionable insights.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
