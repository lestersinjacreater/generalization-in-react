import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col justify-center items-center text-center p-6">
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          Crop Yield Prediction
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Empowering Kenyan farmers with data-driven insights to maximize crop yields.
        </p>
      </header>

      <section className="flex flex-col md:flex-row gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
        >
          Register
        </Link>
      </section>

      <footer className="mt-12 text-gray-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Crop Yield Prediction. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
