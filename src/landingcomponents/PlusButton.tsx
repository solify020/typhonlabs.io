"use client";

import { motion } from "framer-motion";

const PulseButton = () => (
  <a href="/home">
    <motion.button
      className="px-10 bg-[#4d9dcb] py-2 text-white text-2xl rounded-lg border-none relative shadow-lg "
      style={{ position: 'fixed', top: "70px", right: "70px", zIndex: "9999" }}
      initial={{ scale: 0.95, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.3)" }}
      animate={{
        scale: [0.95, 1, 0.95], boxShadow: [
          "0 0 0 0 rgba(0, 0, 0, 0.3)",
          "0 0 10px 5px rgba(0, 0, 0, 0.1)",
          "0 0 0 0 rgba(0, 0, 0, 0.3)"
        ]
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Get Started
    </motion.button>
  </a>

);

export default PulseButton;