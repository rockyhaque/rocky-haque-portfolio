"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import CustomBtn from "@/components/Button/CustomBtn";
import { useTheme } from "@/providers/ThemeProvider";
import MiniTitle from "@/components/ReusableText/MiniTitle";

export default function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, text: "+880 1742460399", href: "tel:+8801742460399" },
    {
      icon: Mail,
      text: "rockyhaque71@gmail.com",
      href: "mailto:rockyhaque71@gmail.com",
    },
    {
      icon: MapPin,
      text: "Baparipara Road, khilkhet, Dhaka - 1229",
      href: "https://maps.google.com",
    },
    { icon: Clock, text: "24/7 Service", href: "https://www.linkedin.com/in/rockyhaque" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/rockyhaque" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rockyhaque" },
  ];

  const { darkMode } = useTheme();

  return (
    <section
      className={`py-16 ${
        darkMode
          ? "bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white"
          : "bg-[#d9fafb] text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDMiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      <div className="max-w-screen-xl mx-auto px-3 md:px-3 lg:px-0 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl font-bold ${
              darkMode
                ? "bg-gradient-to-r from-slate-300 to-zinc-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent"
            }`}
          >
            Let&apos;s Connect
          </h2>
          <p className={`max-w-2xl mx-auto mt-4 ${darkMode ? " ":"text-gray-800"}`}>
            Have a project in mind or want to collaborate? I&apos;m just a
            message away. Let&apos;s bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 "
          >
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 bg-opacity-5 p-6 rounded-lg backdrop-blur-sm shadow-xl ${darkMode ? "text-gray-200 bg-white":"text-gray-800 bg-sky-800"}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium  mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.div
                className="w-full px-6 py-3 transition duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomBtn text="Send Message" />
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className={`bg-opacity-5 p-6 rounded-lg backdrop-blur-sm ${darkMode ? "bg-white":"bg-sky-800"}`}>

              <MiniTitle title="Contact Information" />
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center "
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="h-5 w-5 mr-3 text-cyan-500" />
                    <a
                      href={item.href}
                      className="hover:text-cyan-800 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className={`bg-opacity-5 p-6 rounded-lg backdrop-blur-sm ${darkMode ? "bg-white":"bg-sky-800"}`}>
              <MiniTitle title="Connect with Me" />
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className=" h-6 w-6" />
                    <span className="sr-only">{link.icon.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
