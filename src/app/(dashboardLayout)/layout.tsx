"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex h-screen ${
        darkMode
          ? "bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white"
          : "bg-[#d9fafb] text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <motion.div
        animate={{ width: isOpen ? 200 : 60 }}
        className={`h-full flex flex-col p-4 transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white shadow-md"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
        <nav className="flex flex-col gap-4">
          <NavItem icon={<FiHome />} label="Home" isOpen={isOpen} href="/"/>
          <NavItem icon={<FiSettings />} label="Settings" isOpen={isOpen} href="/" />
          <NavItem icon={<FiLogOut />} label="Logout" isOpen={isOpen} href="/" />
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
}

interface NavItemProps {
  icon: ReactNode;
  label: string;
  isOpen: boolean;
  href: string;
}

const NavItem = ({ icon, label, isOpen, href }: NavItemProps) => (
  <Link href={href}>
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-700"
  >
    {icon}
    {isOpen && <span>{label}</span>}
  </motion.div>
  </Link>
);
