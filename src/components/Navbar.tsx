// filepath: c:\Users\User\Desktop\final year\predictions frontend\crop-yield-frontend\src\pages\Home.tsx
import React from "react";
import HeroSection from "../pages/landingpage/Herosection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="w-full bg-green-700 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">CropYieldPro</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-yellow-300">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-300">About</a>
          </li>
          <li>
            <a href="/services" className="hover:text-yellow-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-300">Contact</a>
          </li>
        </ul>
        <a
          href="https://next-tetra-61.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2F"
          className="bg-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-200"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Farmers Say</h2>
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <p className="italic text-gray-700">
              "Ever since using CropYieldPro, my harvests have been more predictable and profitable!"
            </p>
            <p className="mt-2 font-semibold text-green-700">- James Mwangi, Nakuru</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <p className="italic text-gray-700">
              "The AI insights helped me plan better and avoid unexpected losses."
            </p>
            <p className="mt-2 font-semibold text-green-700">- Aisha Hassan, Mombasa</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-6 text-center">
        <p className="text-lg font-semibold">Contact Us</p>
        <p>Email: support@cropyieldpro.co.ke | Phone: +254 700 123 456</p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} CropYieldPro. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;