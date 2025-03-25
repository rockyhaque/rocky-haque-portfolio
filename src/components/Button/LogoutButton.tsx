"use client";

import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

interface LogoutButtonProps {
  isOpen: boolean;
}

const LogoutButton = ({ isOpen }: LogoutButtonProps) => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" }); 
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={handleLogout}
      className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-rose-500"
    >
      <span className="flex-shrink-0">
        <FiLogOut />
      </span>
      {isOpen && <span className="whitespace-nowrap">Logout</span>}
    </motion.div>
  );
};

export default LogoutButton;