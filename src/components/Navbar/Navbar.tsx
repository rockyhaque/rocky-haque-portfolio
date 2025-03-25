"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import CustomNavLink from "@/components/CustomNavLink/CustomNavLink";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`fixed backdrop-blur-md bg-opacity-30 w-full z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } border-b border-gray-200`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-6 md:w-10"
            />
            {/* <span className="text-xl font-semibold hidden md:block lg:block">
              ocky&apos;s Portfolio
            </span> */}
          </Link>

          {/* Nav Links for Large Screens */}
          <div className="hidden lg:flex items-center space-x-4">
            <CustomNavLink href="/">Home</CustomNavLink>
            <CustomNavLink href="#tech-stack">Tech Stack</CustomNavLink>
            <CustomNavLink href="#my-works">My Works</CustomNavLink>
            <CustomNavLink href="#about-me">About Me</CustomNavLink>
            <CustomNavLink href="#blogs">Blogs</CustomNavLink>
            <CustomNavLink href="#contact-me">Contact Me</CustomNavLink>
            <CustomNavLink href="dashboard">Dashboard</CustomNavLink>

            {session?.user ? (
              <button onClick={()=>signOut()} className="btn btn-sm btn-error">Logout</button>
            ) : (
              <CustomNavLink href="login">Login</CustomNavLink>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? "text-cyan-400" : "text-gray-800 hover:bg-cyan-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible only when isMenuOpen is true) */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden bg-opacity-50 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <div className="flex flex-col space-y-2 px-4 py-2">
              <CustomNavLink href="/">Home</CustomNavLink>
              <CustomNavLink href="#tech-stack">Tech Stack</CustomNavLink>
              <CustomNavLink href="#my-works">My Works</CustomNavLink>
              <CustomNavLink href="#about-me">About Me</CustomNavLink>
              <CustomNavLink href="#blogs">Blogs</CustomNavLink>
              <CustomNavLink href="#contact-me">Contact Me</CustomNavLink>
              <CustomNavLink href="dashboard">Dashboard</CustomNavLink>
              {session?.user ? (
                <button onClick={()=>signOut()} className="btn btn-sm btn-error">Logout</button>
              ) : (
                <CustomNavLink href="login">Login</CustomNavLink>
              )}

              {/* Theme Toggle for Mobile */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ml-2 md:ml-0 ${
                  darkMode ? "text-cyan-400" : "text-gray-800"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
