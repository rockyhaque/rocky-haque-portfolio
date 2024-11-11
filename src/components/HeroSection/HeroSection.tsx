"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/providers/ThemeProvider";
import DownloadResume from "../Button/DownloadResume";

const HeroSection = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative overflow-hidden min-h-screen ${
        darkMode ? "bg-[#0F2027] text-white" : "bg-[#d9fafb] text-black"
      }`}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-orange-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 ">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hey! I&apos;m Rocky,
              <span className="block mt-2 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text">
                Full Stack Web Developer
              </span>
            </motion.h1>

            <motion.p
              className={`text-lg md:text-xl mb-12 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aspiring Software Engineer with a passion for web development and
              a commitment to mastering cutting-edge technologies.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              className="flex flex-col md:flex-row mb-12 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-6 w-40">
                <div className="text-4xl font-bold text-pink-500">50+</div>
                <div className="text-gray-400 text-sm mt-2">PROJECTS</div>
              </div>
              <div className="bg-[#1A1A1A] rounded-2xl p-6 w-40">
                <div className="text-4xl font-bold text-pink-500">92%</div>
                <div className="text-gray-400 text-sm mt-2">
                  SATISFACTION RATE
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start items-center mt-4 md:mt-10 gap-3 md:gap-4 ">
              <div>
                <Link href="https://www.linkedin.com/in/rockyhaque">
                  <span className="">
                    <Image
                      src="/assets/logo/linkedin.svg"
                      alt="linkedin"
                      width={20}
                      height={20}
                      className="inset-0 object-cover rounded-full z-10 w-16 h-16"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link href="https://github.com/rockyhaque">
                  <span className="">
                    <Image
                      src="/assets/logo/github.svg"
                      alt="github"
                      width={10}
                      height={10}
                      className="inset-0 object-cover rounded-full z-10 w-16 h-16"
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* Download Resume button */}
            <div className="mt-10">
              <a
                href="https://drive.google.com/file/d/1KsFs2LHmPsmiQht4ZpUdxQG5FzG7as-R/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadResume>{"Download Resume"}</DownloadResume>
              </a>
            </div>
          </div>

          {/* Hero Image Section */}
          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] md:h-[800px]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full filter blur-[100px] opacity-30"></div>
              <Image
                src="/assets/img/hero-banner.png"
                alt="Rocky Haque"
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
