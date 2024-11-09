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
  const isActive = pathname === href;

  return (
    <Link href={href} {...props} className={`${className}`}>
      <span
        className={`relative px-4 py-2 transition duration-300 hover-underline-animation ${
          isActive
            ? "text-purple-500 font-semibold bg-white"
            : "text-gray-700 hover:text-purple-500 bg-transparent"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default CustomNavLink;
