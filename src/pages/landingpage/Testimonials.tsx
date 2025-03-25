// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Farmers Say</h2>
      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <p className="italic text-gray-700">
            "Since using CropYieldPro, my harvests have become more predictable and profitable!"
          </p>
          <p className="mt-2 font-semibold text-green-700">- James Mwangi, Nakuru</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <p className="italic text-gray-700">
            "The AI insights have transformed the way I manage my farm. Highly recommended."
          </p>
          <p className="mt-2 font-semibold text-green-700">- Aisha Hassan, Mombasa</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
