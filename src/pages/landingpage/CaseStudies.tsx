// src/components/CaseStudies.tsx
import React from "react";

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Success Stories</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        Discover how our technology has helped transform farms across Kenya.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Nakuru Maize Boost</h3>
          <p className="mt-2 text-gray-600">
            Farmer James increased his maize yield from 800kg to 1200kg per acre using our prediction tools.
          </p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Mombasa Success</h3>
          <p className="mt-2 text-gray-600">
            Aisha reduced her fertilizer costs by 20% while increasing overall yield with data-driven insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
