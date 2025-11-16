import React from "react";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <motion.footer
      id="contact"
      className="mt-12 bg-[#070707] border-t border-white/5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container-xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="text-xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            VyomGarud
          </motion.h4>
          <motion.p
            className="mt-3 text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Advanced UAV systems for precision operations.
          </motion.p>

          <motion.ul
            className="mt-6 space-y-2 text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <li>✉ contact@vyomgarud.example</li>
            <li>📞 +91 8881444693</li>
            <li>📍 Kanpur / Bangalore, India</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="text-xl font-semibold text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h4>
          <motion.form
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form placeholder — integrate your API or email service.");
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.input
              className="p-3 rounded bg-white/5 border border-white/6"
              placeholder="Your name"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              className="p-3 rounded bg-white/5 border border-white/6"
              placeholder="Email"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.textarea
              className="p-3 rounded bg-white/5 border border-white/6 md:col-span-2"
              rows={4}
              placeholder="Message"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div
              className="md:col-span-2 text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-6 py-2 rounded bg-vyomOrange text-black font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Send
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>

      <motion.div
        className="border-t border-white/6 text-center py-4 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} VyomGarud. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
