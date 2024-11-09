
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <HeroSection />

        </ThemeProvider>
    </div>
  );
}
