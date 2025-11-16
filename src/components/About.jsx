import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mt-16 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl text-center font-bold"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About VyomGarud
      </motion.h2>
      <motion.div
        className="mt-6 text-center max-w-3xl mx-auto text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          VyomGarud pushes the boundaries of autonomous aerial systems. We deliver hardened UAV platforms with encrypted communications,
          deterministic navigation, and payload flexibility — engineered for reliability in austere environments.
        </motion.p>
        <motion.p
          className="mt-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Our mission is simple: provide precision, endurance, and trust so operators can focus on mission outcomes, not system limitations.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
