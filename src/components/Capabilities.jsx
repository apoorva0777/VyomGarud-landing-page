import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Tactical UAV", desc: "Rugged ISR and precision payload delivery.", icon: "✈️" },
  { title: "Autonomous Swarm", desc: "Cooperative multi-agent autonomous operations.", icon: "🕸️" },
  { title: "Ground Control", desc: "Secure mission planning and telemetry.", icon: "🛰️" },
  { title: "Edge Processing", desc: "Onboard real-time data analysis & ML.", icon: "⚡" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Capabilities() {
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
        Our Capabilities
      </motion.h3>
      <motion.p
        className="text-center text-muted mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Engineered for operational resilience and mission success
      </motion.p>

      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((it, idx) => (
          <motion.article
            key={idx}
            className="card-panel p-6 hover:scale-[1.02] transition-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {it.icon}
            </motion.div>
            <motion.h4
              className="mt-4 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              {it.title}
            </motion.h4>
            <motion.p
              className="mt-2 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              {it.desc}
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <button className="px-3 py-2 rounded bg-white/5 text-sm">Learn more</button>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
