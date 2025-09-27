import React from "react";
import { motion } from "framer-motion";

function Clients() {
  const clients = [
    "1.png",
    "3.png",
    "4.jpeg",
    "5.jpeg",
    "12.png",
    "10.png",
    "13.jpeg",
    "9.jpeg",
    "8.png",
    "7.png",
    "6.png",
    "2.png",
    "11.png",
  ];

  return (
    <div className="py-16 px-4 sm:px-6 md:px-12 bg-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-600 mb-12">
        Our Clients
      </h1>

      {/* Animated grid of logos */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
      >
        {clients.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-16 sm:h-24 md:h-32 w-auto border p-2 sm:p-4 object-contain hover:grayscale transition duration-300"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Clients;
