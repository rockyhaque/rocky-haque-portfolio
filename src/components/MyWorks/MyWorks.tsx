"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import ReadMoreBtn from "@/components/Button/ReadMoreBtn";

const MyWorks = () => {
  const [project, setProject] = useState([]);
  const { darkMode } = useTheme();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div
      className={`relative  mx-auto px-3 md:px-3 lg:px-0 py-20 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#d9fafb] text-gray-900"
      }`}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-orange-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-screen-xl mx-auto relative space-y-5 md:space-y-10 my-10 md:my-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My works</h1>
        </div>
        {project.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row justify-center items-center px-6 py-10 rounded-2xl gap-6 ${
              darkMode
                ? "bg-gradient-to-r from-[#1a2a3a]/30 to-[#112233]/30 backdrop-blur-lg shadow-xl"
                : "bg-gradient-to-r from-white/60 to-[#d9fafb]/60 backdrop-blur-lg shadow-lg"
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-2">
              <h1 className="text-lg md:text-2xl font-bold font-roboto text-center md:text-start">
                {item.title}
              </h1>

              <div className="flex justify-center md:justify-start items-center py-3 gap-2">
                {Object.entries(item.technology).map(([key, src]) => (
                  <Image key={key} src={src} alt={key} width={40} height={40} />
                ))}
              </div>

              <p className="font-manrope text-center md:text-start">
                {item.description.slice(0, 150)}...
              </p>

              <div className="pt-2 flex justify-center md:justify-start">
                {/* Adding href to Link component */}
                <Link
                  href={item.link || "#"} // Use optional chaining for link
                  className="btn btn-sm font-manrope"
                >
                  <ReadMoreBtn text="Details" />
                </Link>
              </div>
            </div>

            {/* Image Section */}

            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={item.img}
                width={400}
                height={400}
                alt="project_img"
                className="rounded-lg hover:-rotate-3 shadow-2xl object-cover w-full h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
