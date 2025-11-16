import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg"; // add your hero image to src/assets/hero.jpg

export default function Hero() {
  return (
    <header className="relative">
      <div
        className="h-[560px] md:h-[640px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(3,3,3,0.6), rgba(3,3,3,0.78)), url(${heroImg})`,
        }}
      >
        <div className="container-xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            VyomGarud
          </motion.h1>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
          >
            Next-generation UAV systems — precision engineering, resilient autonomy, and mission-assured platforms for the most demanding operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex justify-center gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded bg-vyomOrange text-black font-semibold shadow">
              Get Started
            </a>
            <a href="#about" className="px-6 py-3 rounded border border-gray-700 text-gray-200">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 opacity-70">
          <span className="block w-1.5 h-1.5 rounded-full bg-vyomOrange animate-bounce"></span>
        </div>
      </div>
    </header>
  );
}
