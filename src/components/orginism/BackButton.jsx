import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => (
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 2 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed top-12 sm:top-16 left-4 bg-blue-900 hover:bg-blue-100 text-white p-2 rounded-full z-50 shadow-lg flex items-center justify-center"
  >
    <Link to="/">
      <FaArrowLeft className="text-lg sm:text-xl" />
    </Link>
  </motion.div>
);

export default BackButton;
