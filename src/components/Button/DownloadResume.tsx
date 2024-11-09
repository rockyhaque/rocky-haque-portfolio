import React, { useState } from 'react';

interface DownloadResumeProps {
  children: React.ReactNode;
  onClick?: () => void;  // Make `onClick` optional
}

const DownloadResume = ({ children, onClick }: DownloadResumeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={`
        relative overflow-hidden px-8 py-3 rounded-md font-bold text-lg
        transition-all duration-500 ease-in-out
        bg-customGray text-gray-300
        transform ${isHovered ? 'scale-105' : 'scale-100'}
        shadow-lg hover:shadow-xl
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center justify-center">
        <span className={`transition-all duration-500 ${isHovered ? 'mr-4' : 'mr-2'}`}>
          {children}
        </span>
        <svg
          className={`w-5 h-5 transition-all duration-500 ease-in-out ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>

      {/* Hover Effect Gradient */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-cyan-900 via-cyan-800 to-blue-900
          transition-all duration-500 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      ></span>

      {/* Hover Effect Scale */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-cyan-900 via-cyan-800 to-blue-900
          transition-all duration-500 ease-in-out
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
          origin-left`}
      ></span>

      {/* Bottom Line Effect */}
      <span
        className={`absolute bottom-0 left-0 w-full h-1 bg-blue-400
          transition-all duration-500 ease-in-out
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
          origin-left`}
      ></span>
    </button>
  );
};

export default DownloadResume;
