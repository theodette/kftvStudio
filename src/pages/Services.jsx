import React, { useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Clients from "../pages/Clients";
import { Link as ScrollLink, Element } from "react-scroll";

import {
  FaVideo,
  FaCamera,
  FaMusic,
  FaTv,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaRing,
  FaBullhorn,
  FaGlobe,
  FaCode,
  FaLaptopCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["about", "services", "contact", "gallery"];

  return (
    <section className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="h-16 w-16 md:h-20 md:w-20 rounded-full" src="/logo.png" alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 text-gray-700 font-semibold">
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer hover:text-red-600 transition-colors duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-start">
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer text-gray-700 font-semibold w-full hover:text-red-600 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* About Section */}
      <Element name="about">
        <About />
      </Element>

      {/* Services Section */}
      <Element name="services">
        <div className="px-4 md:px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-12 md:mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Tree 1: Film & Multimedia */}
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg mb-6 text-lg md:text-xl font-semibold flex items-center gap-2">
                <FaVideo /> Film & Multimedia
              </div>
              <div className="space-y-3 md:space-y-4 w-full">
                {[
                  { icon: FaVideo, text: "Film production" },
                  { icon: FaCamera, text: "Event coverage" },
                  { icon: FaMusic, text: "Music & video production" },
                  { icon: FaRing, text: "Wedding photography" },
                  { icon: FaPaintBrush, text: "Graphic design" },
                  { icon: FaTv, text: "TV program production" },
                  { icon: FaChalkboardTeacher, text: "E-learning videos" },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow p-3 md:p-4 flex items-center gap-3 hover:bg-gray-50 transition"
                  >
                    <service.icon className="text-red-600" /> {service.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Tree 2: IT & Marketing */}
            <div className="flex flex-col items-center">
              <div className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg mb-6 text-lg md:text-xl font-semibold flex items-center gap-2">
                <FaLaptopCode /> IT & Marketing
              </div>
              <div className="space-y-3 md:space-y-4 w-full">
                {[
                  { icon: FaGlobe, text: "Website design" },
                  { icon: FaCode, text: "Software development" },
                  { icon: FaBullhorn, text: "Social media management" },
                  { icon: FaBullhorn, text: "Marketing & promotion" },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow p-3 md:p-4 flex items-center gap-3 hover:bg-gray-50 transition"
                  >
                    <service.icon className="text-red-600" /> {service.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* Clients Section */}
      <Clients />

      {/* Contact Section */}
      <Element name="contact">
        <Contact />
      </Element>

      {/* Gallery Section */}
      <Element name="gallery"></Element>

      {/* Scroll Up Button & Footer */}
      <section>
        <div className="flex justify-end  px-4 md:px-20 py-6">
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer flex justify-center items-center font-bold text-xl rounded-full hover:text-yellow-300 py-3 px-5 bg-red-600 transition-colors duration-300"
          >
            Up
          </ScrollLink>
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default Services;
