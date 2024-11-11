"use client";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";

const TryOut: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#d9fafb] text-gray-900"
      }`}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-orange-900/20 via-transparent to-transparent"></div>
      </div>
      <div
        className={`relative mx-auto ${
          darkMode
            ? "bg-gradient-to-r from-cyan-700 to-purple-800 text-white"
            : "bg-gradient-to-r from-cyan-300 to-violet-200 text-gray-700"
        } rounded-lg p-8 flex flex-col md:flex-row justify-between items-center w-full lg:w-3/4 shadow-xl hover:shadow-sm overflow-hidden`}
      >
        <div className="md:w-2/3 mb-4 md:mb-0">
          <h2
            className="text-xl md:text-2xl font-bold font-roboto"
            data-aos="zoom-in"
          >
            Try me out, risk free!
          </h2>
          <p
            className="text-sm md:text-lg mt-2 font-manrope"
            data-aos="zoom-in-left"
          >
            If you’re not happy with my work after the first draft, I’ll refund
            your deposit,{" "}
            <span className="font-semibold">no questions asked</span>
          </p>
        </div>

        {/* Using Next.js Link */}
        <Link
          href="https://www.linkedin.com/in/rockyhaque"
          passHref
          className={`${
            darkMode
              ? "bg-cyan-600 text-purple-100"
              : "bg-cyan-400 text-purple-800"
          } rounded-full py-2 px-4 flex items-center justify-center gap-1.5 shadow-lg hover:bg-cyan-300 transition-all font-semibold`}
        >
          <MdKeyboardDoubleArrowRight />
          <p>Get in touch</p>
        </Link>

        {/* SVG Animation Section */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1169"
            height="322"
            viewBox="0 0 1169 322"
            fill="none"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full"
          >
            <path
              d="M-0.333252 261.56C13.5221 261.56 118.823 320.544 258.168 320.544C451.748 320.544 558.236 -187.544 812.779 -31.7781C998.441 81.8359 1108.1 126.965 1179.35 75.898"
              stroke={darkMode ? "#BECED8" : "#BECED8"}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1169"
            height="318"
            viewBox="0 0 1169 318"
            fill="none"
            className="absolute left-0 top-1/3 transform -translate-y-1/3 w-full"
          >
            <path
              d="M-0.333252 198.221C13.5221 198.221 118.823 317.378 258.168 317.378C451.748 317.378 555.975 -116.697 828.614 4.64199C1044.76 100.838 1139.77 111.13 1179.35 44.2289"
              stroke={darkMode ? "#BECED8" : "#BECED8"}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1169"
            height="290"
            viewBox="0 0 1169 290"
            fill="none"
            className="absolute left-0 top-1/4 transform -translate-y-1/4 w-full"
          >
            <path
              d="M-0.333252 67.2956C11.9387 76.4005 118.823 289.377 258.168 289.377C451.748 289.377 587.644 -97.1934 860.283 24.146C1076.43 120.342 1110.47 104.903 1179.35 55.8155"
              stroke={darkMode ? "#BECED8" : "#BECED8"}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TryOut;
