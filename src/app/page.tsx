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
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="my-works">
        <MyWorks />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      {/* <FAQ /> */}
      {/* <TryOut /> */}
      {/* <WorkTogether /> */}
      <div id="contact-me">
        <ContactMe />
      </div>
      {/* </ThemeProvider> */}
    </div>
  );
}
