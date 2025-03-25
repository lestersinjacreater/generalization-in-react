// src/components/FeaturesSection.tsx
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose CropYieldPro?</h2>
      <p className="mt-4 text-lg text-gray-600">Smart solutions tailored for Kenyan farmers.</p>
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
          <p className="mt-2 text-gray-600">
            Get accurate crop yield predictions based on real-time data.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Weather Forecasting</h3>
          <p className="mt-2 text-gray-600">
            Plan better with precise climate predictions tailored to your region.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-semibold">Market Trends</h3>
          <p className="mt-2 text-gray-600">
            Make informed decisions with access to real-time market price data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
