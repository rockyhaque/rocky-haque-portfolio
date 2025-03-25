"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

interface CustomBtnProps {
  text: string;
  disabled?: boolean;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ text, disabled = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useTheme();

  // Color schemes for different states and modes
  const colorSchemes = {
    dark: {
      enabled: {
        bgFrom: "from-indigo-900",
        bgVia: "via-blue-900",
        bgTo: "to-violet-900",
        textColor: "text-white",
        glowColor: "bg-blue-400",
        particleColor: "bg-blue-300",
        shineColor: "via-blue-400",
        innerFrom: "from-gray-900",
        innerVia: "via-gray-800",
        innerTo: "to-black"
      },
      disabled: {
        bgFrom: "from-gray-800",
        bgVia: "via-gray-700",
        bgTo: "to-gray-800",
        textColor: "text-gray-400",
        glowColor: "bg-gray-500",
        particleColor: "bg-gray-400",
        shineColor: "via-gray-400",
        innerFrom: "from-gray-800",
        innerVia: "via-gray-700",
        innerTo: "to-gray-900"
      }
    },
    light: {
      enabled: {
        bgFrom: "from-cyan-500",
        bgVia: "via-teal-600",
        bgTo: "to-indigo-700",
        textColor: "text-white",
        glowColor: "bg-teal-300",
        particleColor: "bg-teal-200",
        shineColor: "via-teal-300",
        innerFrom: "from-teal-700",
        innerVia: "via-teal-600",
        innerTo: "to-indigo-700"
      },
      disabled: {
        bgFrom: "from-gray-300",
        bgVia: "via-gray-400",
        bgTo: "to-gray-500",
        textColor: "text-gray-600",
        glowColor: "bg-gray-300",
        particleColor: "bg-gray-200",
        shineColor: "via-gray-300",
        innerFrom: "from-gray-200",
        innerVia: "via-gray-300",
        innerTo: "to-gray-400"
      }
    }
  };

  const mode = darkMode ? 'dark' : 'light';
  const state = disabled ? 'disabled' : 'enabled';
  const colors = colorSchemes[mode][state];

  return (
    <motion.button
      className={`group relative h-12 md:h-14 w-full max-w-xs overflow-hidden rounded-lg ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } shadow-lg focus:outline-none focus:ring-2 ${
        darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-400'
      } focus:ring-offset-2 ${
        darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
      }`}
      onHoverStart={() => !disabled && setIsHovered(true)}
      onHoverEnd={() => !disabled && setIsHovered(false)}
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      disabled={disabled}
    >
      {/* Background gradient */}
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br ${colors.bgFrom} ${colors.bgVia} ${colors.bgTo}`}
        animate={{ opacity: disabled ? 0.7 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Outer glow */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${colors.glowColor} blur-md`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !disabled ? (darkMode ? 0.4 : 0.3) : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner gradient and glow */}
      <motion.div
        className={`absolute inset-0.5 rounded-lg bg-gradient-to-br ${colors.innerFrom} ${colors.innerVia} ${colors.innerTo}`}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: (isHovered && !disabled) ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`absolute inset-0 rounded-lg ${colors.glowColor} mix-blend-overlay blur-md`}
          initial={{ opacity: 0 }}
          animate={{ opacity: (isHovered && !disabled) ? (darkMode ? 0.6 : 0.5) : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Animated particles (only when enabled) */}
      {!disabled && [...Array(15)].map((_, index) => (
        <motion.div
          key={index}
          className={`absolute h-1 w-1 rounded-full ${colors.particleColor}`}
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
            opacity: isHovered ? (darkMode ? 0.8 : 0.7) : 0,
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Button text */}
      <span className={`relative z-10 text-sm md:text-base font-medium ${colors.textColor}`}>
        {text}
      </span>

      {/* Shine effect (only when enabled) */}
      {!disabled && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-transparent ${colors.shineColor} to-transparent opacity-20`}
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      {/* Loading spinner when disabled (for form submission) */}
      {disabled && (
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={`h-5 w-5 animate-spin rounded-full border-2 ${
            darkMode ? 'border-blue-200' : 'border-blue-200'
          } border-t-transparent`}></div>
        </motion.div>
      )}
    </motion.button>
  );
};

export default CustomBtn;