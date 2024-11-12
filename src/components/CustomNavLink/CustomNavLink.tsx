import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface CustomNavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  const { pathname } = useRouter();
  const { darkMode } = useTheme(); 
  const isActive = pathname === href;

  return (
    <Link href={href} {...props} className={`${className}`}>

      <span
        className={`group relative px-4 py-2 transition duration-300 transform ${
          isActive
            ? darkMode
              ? "text-cyan-400 font-semibold bg-gray-900"
              : "text-cyan-500 font-semibold bg-white"
            : darkMode
            ? "text-gray-300 hover:text-cyan-400 bg-transparent"
            : "text-gray-700 hover:text-cyan-500 bg-transparent"
        }`}
      >
        {children}
        {/* Underline animation with group-hover */}
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-full bg-cyan-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`}
        />
      </span>
    </Link>
  );
};

export default CustomNavLink;
