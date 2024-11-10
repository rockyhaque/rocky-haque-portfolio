"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function TechStack() {
  const { darkMode } = useTheme();

  const skillData = {
    frontend: [
      { label: "HTML", icon: "https://i.ibb.co/34SRRm2/html.png" },
      { label: "CSS", icon: "https://i.ibb.co/StvgtgR/css.png" },
      { label: "Bootstrap", icon: "https://i.ibb.co/njBgT1p/bootstrap.png" },
      { label: "Tailwind CSS", icon: "https://i.ibb.co/CtF9j25/tailwind.png" },
      { label: "DaisyUI", icon: "https://i.ibb.co/4sZTbth/DaisyUI.png" },
      { label: "JavaScript", icon: "https://i.ibb.co/KL89prz/javascript.png" },
      { label: "React", icon: "https://i.ibb.co/nBMc7zh/react.png" },
      { label: "TypeScript", icon: "https://i.ibb.co/NCSc635/typescript.png" },
      { label: "Next.js", icon: "https://i.ibb.co/SJxzQ3N/nextJs.png" },
      { label: "Shadcn", icon: "https://i.ibb.co/W0YQfWX/shadcn.png" },
    ],
    backend: [
      { label: "Node.js", icon: "https://i.ibb.co/DWwthCQ/nodeJS.png" },
      {
        label: "Express.js",
        icon: "https://i.postimg.cc/3NRPT7YZ/express-Js.png",
      },
    ],
    database: [
      { label: "MongoDB", icon: "https://i.ibb.co/0Y756mm/mongoDB.png" },
      { label: "SQL", icon: "https://i.ibb.co/n8m5mXB/sql.png" },
    ],
    tools: [
      { label: "Git", icon: "https://i.ibb.co/t3GtK8J/git.png" },
      { label: "GitHub", icon: "https://i.ibb.co/KVkC49S/github.png" },
      { label: "Firebase", icon: "https://i.ibb.co/ncSXy5L/firebase.png" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className={`relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#d9fafb] text-gray-900"
      }`}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-orange-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tech Stack</h1>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:gap-12"
        >
          {Object.entries(skillData).map(([category, skills]) => (
            <div
              key={category}
              className={`rounded-xl p-6 backdrop-blur-md border ${
                darkMode ? " border-gray-700" : " border-gray-300"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} darkMode={darkMode} />
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ skill, darkMode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center p-4 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-md bg-opacity-30 border cursor-pointer ${
        darkMode
          ? "bg-customGray  text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      {isLoading && (
        <div className="w-12 h-12 mb-2 bg-gray-300 animate-pulse rounded-xl"></div>
      )}
      <Image
        src={skill.icon}
        alt={skill.label}
        width={48}
        height={48}
        className={`w-12 h-12 mb-2 object-contain transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <span className="text-sm font-medium text-center">{skill.label}</span>
    </motion.div>
  );
}
