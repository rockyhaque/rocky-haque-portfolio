"use client";

import { useEffect, useState } from 'react';
import BlogCard from '@/components/Blog/BlogCard';

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

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/blog.json');
      const data: Blog[] = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Latest Blogs</h1>
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
