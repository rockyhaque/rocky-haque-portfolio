"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";

interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  features: string[];
  technology: { [key: string]: string };
  liveLink: string;
  githubLink: string;
}

const ProjectDetails = () => {
  const { darkMode } = useTheme();
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  //   const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // setIsMounted(true);
    if (id) {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data: Project[]) => {
          const selectedProject = data.find((proj) => proj.id === id);
          setProject(selectedProject || null);
        });
    }
  }, [id]);

  // console.log(project);

  if (!project) return <div>Loading...</div>;

  return (
    <section
      className={`relative  mx-auto px-3 md:px-3 lg:px-0 py-20 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#d9fafb] text-gray-900"
      }`}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-tr from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-screen-xl mx-auto relative space-y-5 md:space-y-10 my-10 md:my-12">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <Image
        unoptimized
          src={project.img}
          alt={project.title}
          width={200}
          height={200}
          className="object-contain w-full h-auto lg:h-96 rounded-md mb-4"
        />
        <p className="mb-4">{project.description}</p>

        {/* Features Section */}
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc pl-5 mb-4">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Technologies */}
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mb-4">
          {Object.entries(project.technology).map(([tech, logo]) => (
            <Image unoptimized key={tech} src={logo} alt={tech} width={50} height={50} />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub Repository
          </a>
        </div>
        <Link href="/">
          <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg">
            Back to Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
