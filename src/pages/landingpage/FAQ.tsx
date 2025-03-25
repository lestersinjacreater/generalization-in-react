// src/components/FAQ.tsx
import React from "react";

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="mt-12 max-w-3xl mx-auto">
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">How accurate are the crop yield predictions?</summary>
          <p className="mt-2 text-gray-600">Our AI model is continuously trained with local data to ensure predictions are as accurate as possible. Accuracy may vary by region.</p>
        </details>
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">Do I need an internet connection?</summary>
          <p className="mt-2 text-gray-600">Yes, a stable internet connection is required to access real-time data and predictions.</p>
        </details>
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">Can I access the app on my smartphone?</summary>
          <p className="mt-2 text-gray-600">Absolutely! Our responsive design ensures a seamless experience on all devices.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
