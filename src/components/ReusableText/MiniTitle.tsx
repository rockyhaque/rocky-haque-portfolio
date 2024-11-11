// MiniTitle.tsx
import React from "react";
import { useTheme } from "@/providers/ThemeProvider"; 

interface MiniTitleProps {
  title: string;
}

const MiniTitle: React.FC<MiniTitleProps> = ({ title }) => {
  const { darkMode } = useTheme();

  return (
    <h3
      className={`text-xl font-semibold mt-2 mb-4 ${
        darkMode
          ? "bg-gradient-to-r from-slate-300 to-zinc-500 bg-clip-text text-transparent"
          : "bg-gradient-to-r from-cyan-900 to-cyan-950 bg-clip-text text-transparent"
      }`}
    >
      {title}
    </h3>
  );
};

export default MiniTitle;
