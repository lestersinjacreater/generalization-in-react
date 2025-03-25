// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-6 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/services" className="hover:text-yellow-300">Services</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
      <div className="mt-4">
        <p>Email: support@cropyieldpro.co.ke | Phone: +254 700 123 456</p>
      </div>
      <p className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} CropYieldPro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
