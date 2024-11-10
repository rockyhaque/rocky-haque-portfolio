
import HeroSection from "@/components/HeroSection/HeroSection";
import MyWorks from "@/components/MyWorks/MyWorks";
import Navbar from "@/components/Navbar/Navbar";
import TechStack from "@/components/TechStack/TechStack";
import { ThemeProvider } from "@/providers/ThemeProvider";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <HeroSection />
        <TechStack />
        <MyWorks />

        </ThemeProvider>
    </div>
  );
}
