// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="w-full  text-gray-200  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-32 w-32 rounded-full "
              src="/logo.png"
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden text-2xl font-bold md:flex space-x-12">
            <Link
              to="/"
              className=" hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/services"
              className=" hover:text-yellow-300 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/about"
              className=" hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className=" hover:text-yellow-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              {/* You can add hamburger icon here */}
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
