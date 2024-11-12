"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import { useTheme } from "@/providers/ThemeProvider";

interface Author {
  name: string;
  img: string;
}

interface Blog {
  id: string;
  title: string;
  image: string;
  content: string;
  summary: string;
  posted: string;
  readingTime: number;
  author: Author;
}

const BlogDetails = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { darkMode } = useTheme();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (id) {
        const res = await fetch(`/blog.json`);
        const data: Blog[] = await res.json();
        const foundBlog = data.find((blog) => blog.id === id);
        setBlog(foundBlog || null);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className={`py-16 ${
        darkMode
          ? "bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white"
          : "bg-[#d9fafb] text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1
            className={`text-xl md:text-4xl font-bold py-16 ${
              darkMode
                ? "bg-gradient-to-r from-slate-300 to-zinc-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent"
            }`}
          >
            {blog.title}
          </h1>

          <div className="">
            {/* Blog Image */}
            <div className=" ">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={400}
                className="object-contain w-full h-auto lg:h-96 rounded-md mb-4"
              />
            </div>

            <div className="flex justify-between items-center w-full mt-8 py-12">
              {/* Author Section */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={blog.author.img}
                    alt={blog.author.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mr-3">
                    {blog.author.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(blog.posted).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Reading Time Section */}
              <div className="flex items-center gap-2">
                <IoTimeOutline className="text-gray-400 text-xl" />
                <p className="text-md text-gray-500">{blog.readingTime} min</p>
              </div>
            </div>

            {/* Blog Content */}
            <p className="mt-4 text-xl text-gray-500">{blog.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
