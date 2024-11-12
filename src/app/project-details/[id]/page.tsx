"use client"

import { useParams} from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const {id} = useParams();
  const [project, setProject] = useState<Project | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // setIsMounted(true);
    if (id) {
      fetch('/data.json')
        .then((res) => res.json())
        .then((data: Project[]) => {
          const selectedProject = data.find((proj) => proj.id === id);
          setProject(selectedProject || null);
        });
    }
  }, [id]);

  console.log(project)

  if (!project) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <Image
          src={project.img}
          alt={project.title}
          width={600}
          height={400}
          className="w-full object-cover rounded-md mb-4"
        />
        <p className="mb-4">{project.description}</p>

        {/* Technologies */}
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex gap-4 mb-4">
          {Object.entries(project.technology).map(([tech, logo]) => (
            <Image key={tech} src={logo} alt={tech} width={50} height={50} />
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
    </div>
  );
};

export default ProjectDetails;
