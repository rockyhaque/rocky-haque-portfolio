"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { motion, useAnimation } from "framer-motion";
import {
  Code,
  Cpu,
  Globe,
  Zap,

  Github,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import {  useEffect } from "react";

export default function Footer() {
  // const [activeSection, setActiveSection] = useState(0);
  const controls = useAnimation();

  // const sections = [
  //   {
  //     title: "Services",
  //     items: [
  //       "Web Development",
  //       "Code Debuging",
  //       "API Integration",
  //       "Performance Optimization",
  //     ],
  //   },
  //   {
  //     title: "About",
  //     items: ["My Story", "Skills", "Experience", "Education"],
  //   },
  // ];

  const icons = [
    { Icon: Code, label: "Clean Code" },
    { Icon: Globe, label: "Web Solutions" },
    { Icon: Cpu, label: "Optimized Performance" },
    { Icon: Zap, label: "Fast Delivery" },
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/rockyhaque" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/rockyhaque" },
    { Icon: Facebook, href: "https://www.facebook.com/rockyhaquee" },
    { Icon: Instagram, href: "https://www.instagram.com/rocky_haque.10" },
    { Icon: Mail, href: "mailto:rockyhaque71@gmail.com" },
  ];

  useEffect(() => {
    controls.start((i) => ({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 0.5, delay: i * 0.1 },
    }));
  }, [controls]);

  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-16 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-[#d9fafb] text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDMiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-12"
              />
            </div>
            <motion.h2
              className={`text-xl md:text-4xl font-bold ${
                darkMode
                  ? "bg-gradient-to-r from-slate-300 to-zinc-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Crafting Digital Experiences
            </motion.h2>
            <p
              className={`text-gray-400  max-w-md ${
                darkMode ? "text-gray-400 " : "text-gray-800"
              }`}
            >
              Transforming ideas into seamless, beautiful, and high-performance
              web applications. Let&apos;s build something extraordinary
              together.
            </p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 max-w-md ${
                    darkMode ? "text-gray-400 " : "text-gray-800"
                  }`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {icons.map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                className={`flex flex-col items-center justify-center p-6 bg-opacity-5 rounded-lg backdrop-blur-sm hover:bg-opacity-10 transition-colors duration-300 ${
                  darkMode
                    ? "text-gray-200 bg-white"
                    : "text-gray-800 bg-sky-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon size={32} className="text-cyan-500 mb-2" />
                <span className="text-sm text-center">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <motion.li key={item} custom={itemIndex} animate={controls}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white">Newsletter</h3>
              <p className="text-gray-400">
                Stay updated with our latest projects and technologies.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow"
                />
                <motion.button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div> */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p
            className={`text-gray-400 ${
              darkMode ? "text-gray-400 " : "text-gray-800"
            }`}
          >
            © {new Date().getFullYear()} Rocky Haque All rights reserved.
            Crafted with passion and code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
