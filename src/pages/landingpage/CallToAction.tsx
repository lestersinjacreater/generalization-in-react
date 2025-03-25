// src/components/CallToAction.tsx
import React from "react";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-green-700 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your farm?</h2>
      <p className="mt-4 text-lg">Join thousands of Kenyan farmers using data-driven insights.</p>
      <Link
        to="/register"
        className="mt-6 inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 transition duration-200"
      >
        Get Started Now
      </Link>
    </section>
  );
};

export default CallToAction;
