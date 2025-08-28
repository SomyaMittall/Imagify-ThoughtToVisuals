import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center justify-center my-24 px-6 md:px-28">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl sm:text-4xl font-semibold mb-2 text-center text-white drop-shadow-lg"
      >
        What Our Users Say
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-gray-400 mb-12 text-center max-w-2xl"
      >
        Creators, designers, and developers love Imagify.
      </motion.p>

      {/* Testimonials Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 md:grid-cols-3 w-full max-w-6xl mt-5"
      >
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-purple-800/30 
                       rounded-2xl p-6 shadow-lg transition-transform hover:scale-105"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-purple-400/60"
              />
              <div>
                <h3
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 
                             text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
                >
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{item.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-200 italic mb-4">“{item.text}”</p>

            {/* Stars */}
            <div className="flex gap-1">
              {Array(item.stars)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
