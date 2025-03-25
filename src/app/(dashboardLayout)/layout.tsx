"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiMenu } from "react-icons/fi";
import { RiApps2AddLine, RiMessage2Line } from "react-icons/ri";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import LogoutButton from "@/components/Button/LogoutButton";

interface LayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { icon: <FiHome />, label: "Home", href: "/" },
  { icon: <RiMessage2Line />, label: "Messages", href: "/dashboard/messages" },
  {
    icon: <HiOutlineDocumentAdd />,
    label: "Create Blog",
    href: "/dashboard/blog/create-blog",
  },
  {
    icon: <RiApps2AddLine />,
    label: "Create Project",
    href: "/dashboard/project/create-project",
  },
  
];

export default function DashboardLayout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();
  const pathname = usePathname();

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
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
          <LogoutButton isOpen={isOpen} />
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
  isActive?: boolean;
}

const NavItem = ({
  icon,
  label,
  isOpen,
  href,
  isActive = false,
}: NavItemProps) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-2 cursor-pointer p-2 rounded-md ${
        isActive ? "bg-cyan-500 text-white" : "hover:bg-gray-700"
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {isOpen && <span className="whitespace-nowrap">{label}</span>}
    </motion.div>
  </Link>
);
