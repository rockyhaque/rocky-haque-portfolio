"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider"; // Import theme context

interface AnimatedSubmitButtonProps {
  isSubmitting: boolean;
}

const AnimatedButton: React.FC<AnimatedSubmitButtonProps> = ({ isSubmitting }) => {
  const { darkMode } = useTheme(); // Get darkMode from theme context
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = Math.abs(ev.clientX - centerX);
        const distanceY = Math.abs(ev.clientY - centerY);
        
        // Define a proximity range (adjust 100px if needed)
        const proximityThreshold = 100; 
  
        if (distanceX < proximityThreshold && distanceY < proximityThreshold) {
          x.set(ev.clientX - centerX);
          y.set(ev.clientY - centerY);
        } else {
          // Reset the animation effect when mouse is far away
          x.set(0);
          y.set(0);
        }
      }
    };
  
    window.addEventListener("mousemove", updateMousePosition);
  
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [x, y]);
  

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({ scale: 1.05, transition: { duration: 0.3 } });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({ scale: 1, transition: { duration: 0.3 } });
  };

  const liquidVariants = {
    rest: { pathLength: 0, pathOffset: 0 },
    hover: {
      pathLength: 0.5,
      pathOffset: 0.5,
      transition: {
        pathLength: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        pathOffset: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
      },
    },
  };

  const backgroundClass = darkMode
    ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"
    : "bg-gradient-to-r from-blue-300 via-blue-300 to-cyan-400";

  return (
    <motion.button
      ref={buttonRef}
      type="submit"
      disabled={isSubmitting}
      className={`group relative h-12 w-36 overflow-hidden rounded-xl ${backgroundClass} text-white font-semibold 
                 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 
                 focus:ring-offset-gray-900 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{ rotateX, rotateY }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={controls}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 0 30 Q 50 0 100 30 Q 150 60 200 30"
          fill="none"
          stroke="url(#liquid-gradient)"
          strokeWidth="4"
          variants={liquidVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        />
        <defs>
          <linearGradient id="liquid-gradient" x1="0" y1="0" x2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </motion.svg>
      <span className="relative z-10 text-lg font-bold transition-colors duration-300 group-hover:text-gray-900">
        {isSubmitting ? "Sending..." : "Send Message"}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
