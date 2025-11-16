import React from "react";
import { motion } from "framer-motion";

const bullets = [
  { title: "99.9% Mission Assurance", note: "Validated under extreme conditions" },
  { title: "Extended Endurance", note: "Long-duration operations with minimal logistics" },
  { title: "Secure by Design", note: "Encrypted links & hardened hardware" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Highlights() {
  return (
    <motion.section
      className="mt-14 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-2xl text-center font-semibold"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Why VyomGarud
      </motion.h3>
      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {bullets.map((b, i) => (
          <motion.div
            key={i}
            className="card-panel p-6 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-vyomOrange mx-auto"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              ✔
            </motion.div>
            <motion.h4
              className="mt-4 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
              viewport={{ once: true }}
            >
              {b.title}
            </motion.h4>
            <motion.p
              className="mt-2 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              viewport={{ once: true }}
            >
              {b.note}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
