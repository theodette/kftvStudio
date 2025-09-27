import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen text-gray-700 px-4 sm:px-6 md:px-12 pt-16 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-3 sm:mb-4">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Reach out to us through
          our contact details, social media, or send us a quick message below.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full">
        {/* Left: Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 flex flex-col">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Contact Information</h3>
          
          <div className="flex items-center gap-3">
            <FaPhone className="text-red-600 text-xl" />
            <p>+250 788 306 623</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-600 text-xl" />
            <p>kftvstudio@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <p>Kigali, Rwanda</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/kftvstudio" target="_blank" className="text-gray-600 hover:text-red-600 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/KFTVSTUDIO" target="_blank" className="text-gray-600 hover:text-red-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@kftvstudio7255" target="_blank" className="text-gray-600 hover:text-red-600 text-2xl">
              <FaYoutube />
            </a>
          </div>

          <Link
            to="/videoes"
            className="mt-6 bg-black text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold flex items-center justify-center hover:bg-gray-800 transition"
          >
            Visit our gallery
          </Link>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section (optional) */}
      <div className="mt-16 w-full max-w-6xl"></div>
    </section>
  );
}

export default Contact;
