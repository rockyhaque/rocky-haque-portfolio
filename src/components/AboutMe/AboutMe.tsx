"use client";
import Image from "next/image";
import Link from "next/link";
import MiniTitle from "@/components/ReusableText/MiniTitle";
import { useTheme } from "@/providers/ThemeProvider";

const AboutMe = () => {
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
      <div className="max-w-screen-xl mx-auto px-3 md:px-3 lg:px-0 py-20">
        <div className="space-y-3">
          <h2
            className={`text-4xl text-center font-bold ${
              darkMode
                ? "bg-gradient-to-r from-slate-300 to-zinc-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent"
            }`}
          >
            A little bit about me
          </h2>
          <p className={`text-center pb-6 ${darkMode ? "text-gray-400":"text-gray-800"}`}>Who I am and what I do</p>
        </div>

        <hr />

        <div className="flex flex-col md:flex-row justify-center gap-6 my-5 md:my-7">
          <div className="w-full md:w-3/5 text-center md:text-start">
            <div className="space-y-2">
              <MiniTitle title="Who I am" />
              <p className={`${darkMode ? "bg-gradient-to-r from-gray-300 to-cyan-200 bg-clip-text text-transparent":"text-gray-800"}`}>
                I’m{" "}
                <span className="text-lg font-semibold text-cyan-600">
                  Rocky
                </span>
                , a 4th-year computer science student at the University of
                Scholars in Banani, Dhaka. I love learning new technologies and
                actively participate in university events and tech summits to
                connect with others who share my passion for tech.
              </p>
            </div>
            <div className="space-y-2 mt-8">
              <MiniTitle title="What I do" />
              <p className={`${darkMode ? "bg-gradient-to-r from-gray-300 to-zinc-400 bg-clip-text text-transparent":"text-gray-800"}`}>
                As a Full Stack Web Developer, I specialize in a range of
                technologies. On the front-end, I work extensively with HTML,
                CSS, JavaScript, React.js, and Tailwind CSS. For back-end
                development, I have experience with Node.js, Express.js, and
                Next.js. Additionally, I am proficient in using databases such
                as MongoDB and MySQL. I also utilize version control systems
                like Git and GitHub, and deployment platforms like Firebase and
                Vercel. I’m always exploring new tools and working on projects
                with different teams. My aim is to use what I learn to create
                innovative solutions.
              </p>
            </div>
            <div className="space-y-2 mt-8">
              <MiniTitle title="What I Did" />
              <p className={`${darkMode ? "bg-gradient-to-r from-gray-300 to-zinc-400 bg-clip-text text-transparent":"text-gray-800"}`}>
                Although I don’t have work experience yet, I’ve completed many
                group projects during my studies. These projects have helped me
                understand the value of good communication and teamwork,
                especially when working with people from different backgrounds.
                This experience has prepared me for future opportunities in the
                tech industry.
              </p>
            </div>
            <div className="mt-6">
              <div className={`${darkMode ? "text-gray-400":"text-gray-800"}`}>
                Feel free to reach out via e-mail, or follow me on{" "}
                <Link
                  href="https://github.com/rockyhaque"
                  className="underline"
                >
                  Github
                </Link>
                . Want to see where I’ve worked? Check out my Resume, or Connect
                with me on{" "}
                <Link
                  href="https://www.linkedin.com/in/rockyhaque"
                  className="underline"
                >
                  LinkedIn
                </Link>
                .
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <Image
              src="/assets/img/aboutme.png"
              alt="about_me"
              className="rounded-2xl"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
