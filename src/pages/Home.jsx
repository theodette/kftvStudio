import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative bg-[url('/bg1.jpg')] bg-cover bg-center min-h-screen w-full flex flex-col">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navbar */}
      <div className="relative flex justify-between items-center z-20 px-4 sm:px-6 md:px-20 py-4">
        <img className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full" src="/logo.png" alt="Logo" />

        <Link
          to="/services"
          className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold hover:bg-gray-800 transition text-sm sm:text-base md:text-lg"
        >
          Get Started
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 md:px-12 text-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Welcome to <span className="text-red-600">KFTV Studio</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">
            Kigali Film and Television Studio — Leading in film, multimedia, IT & marketing services across Rwanda and East Africa.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/services"
              className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="bg-gray-900 text-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-600 transition"
            >
              Our Services
            </Link>
            <Link
              to="/videoes"
              className="bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-600 transition"
            >
              Our Gallery
            </Link>
            <Link
              to="/services"
              className="bg-gray-900 text-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
