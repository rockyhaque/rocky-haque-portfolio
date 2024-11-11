
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MyWorks from "@/components/MyWorks/MyWorks";
import Navbar from "@/components/Navbar/Navbar";
import TechStack from "@/components/TechStack/TechStack";
// import TryOut from "@/components/TryOut/TryOut";
// import WorkTogether from "@/components/WorkTogether/WorkTogether";
import { ThemeProvider } from "@/providers/ThemeProvider";
// import Image from "next/image";

export default function Home() {
  return (
    <div >
      <ThemeProvider>
        <Navbar />
        <HeroSection />
        <TechStack />
        <MyWorks />
        {/* <TryOut /> */}
        {/* <WorkTogether /> */}
        <ContactMe />
        <Footer />

        </ThemeProvider>
    </div>
  );
}
