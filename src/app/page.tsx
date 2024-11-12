import AboutMe from "@/components/AboutMe/AboutMe";
import Blogs from "@/components/Blog/Blogs";
import ContactMe from "@/components/ContactMe/ContactMe";
// import FAQ from "@/components/FAQ/FAQ";

import HeroSection from "@/components/HeroSection/HeroSection";
import MyWorks from "@/components/MyWorks/MyWorks";

import TechStack from "@/components/TechStack/TechStack";
// import TryOut from "@/components/TryOut/TryOut";
// import WorkTogether from "@/components/WorkTogether/WorkTogether";
// import { ThemeProvider } from "@/providers/ThemeProvider";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <ThemeProvider> */}
        <HeroSection />
        <TechStack />
        <MyWorks />
        <AboutMe />
        <Blogs />
        {/* <FAQ /> */}
        {/* <TryOut /> */}
        {/* <WorkTogether /> */}
        <ContactMe />
      {/* </ThemeProvider> */}
    </div>
  );
}
