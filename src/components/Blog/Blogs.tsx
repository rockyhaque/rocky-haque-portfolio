"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/Blog/BlogCard";
import { useTheme } from "@/providers/ThemeProvider";

interface Blog {
  id: string;
  title: string;
  image: string;
  author: {
    name: string;
    img: string;
  };
  posted: string;
  readingTime: number;
  summary: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/blog.json");
      const data: Blog[] = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section
      className={`py-16 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-[#d9fafb] text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDMiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-bold ${
              darkMode
                ? "bg-gradient-to-r from-slate-300 to-zinc-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent"
            }`}
          >
            Latest Blogs
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
