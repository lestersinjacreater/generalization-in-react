// src/components/PricingPlans.tsx
import React from "react";

const PricingPlans: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-600">
        Choose a plan that suits your farm's needs.
      </p>
      <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center">
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">Basic</h3>
          <p className="mt-2 text-gray-600">Essential features to get started</p>
          <p className="mt-4 text-2xl font-semibold">Free</p>
        </div>
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="mt-2 text-gray-600">Advanced insights and support</p>
          <p className="mt-4 text-2xl font-semibold">Ksh 500/month</p>
        </div>
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="mt-2 text-gray-600">Custom solutions for large-scale operations</p>
          <p className="mt-4 text-2xl font-semibold">Custom Pricing</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
