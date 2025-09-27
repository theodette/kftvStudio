import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
            About <span className="text-red-600">KFTV Studio</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            Kigali Film and Television Studio delivers high-quality film, multimedia, IT, and marketing services across East Africa. We combine creativity, professionalism, and over a decade of experience to serve local and international clients.
          </p>
        </motion.div>

        {/* Images */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xs sm:max-w-md md:max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {["14", "15", "16", "17", "18", "19"].map((num, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-200 hover:border-red-600 shadow-md hover:shadow-red-300/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="h-32 sm:h-36 w-full object-cover"
                src={`/public/${num}.jpg`}
                alt={`KFTV Studio ${num}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
