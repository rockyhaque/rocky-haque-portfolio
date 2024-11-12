"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CustomBtnProps {
  text: string; // Define text as a string
}

const CustomBtn: React.FC<CustomBtnProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="group relative h-12 md:h-16 w-48 md:w-48 overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-blue-500 blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner gradient and glow */}
      <motion.div
        className="absolute inset-0.5 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl bg-blue-400 mix-blend-overlay blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Animated particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-blue-400"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 60 - 30,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 60 - 30,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 0.7 : 0,
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Button text */}
      <span className="relative z-10 text-base md:text-lg   font-medium md:font-bold">
        {text}
      </span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default CustomBtn;
