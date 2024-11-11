"use client";

import { motion, useAnimation } from "framer-motion";
import { Code, Cpu, Globe, Zap } from "lucide-react";
import { useEffect } from "react";

export default function WorkTogether() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, delay: i * 0.2 },
    }));
  }, [controls]);

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
    tap: { scale: 0.8 },
  };

  const icons = [
    { Icon: Code, label: "Clean Code" },
    { Icon: Globe, label: "Web Solutions" },
    { Icon: Cpu, label: "Optimized Performance" },
    { Icon: Zap, label: "Fast Delivery" },
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-customGray ">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzIwMjAyMDIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-gray-300 max-w-md">
              Passionate about creating elegant, efficient, and user-friendly
              web solutions. Always ready for the next big challenge.
            </p>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {icons.map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-5 rounded-lg backdrop-blur-md "
                custom={index}
                animate={controls}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mb-4 text-white"
                >
                  <Icon size={40} />
                </motion.div>
                <span className="text-white font-medium text-center">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Rocky Haque. Crafted with passion and
            code.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
