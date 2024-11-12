import { useEffect, useRef, useState } from "react";
// import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { IoTimeOutline } from "react-icons/io5";
import ReadMoreBtn from "@/components/Button/ReadMoreBtn";

interface Blog {
  id: string;
  title: string;
  image: string;
  summary: string;
  posted: string;
  readingTime: number;
  author: {
    name: string;
    img: string;
  };
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  //   const formatDate = (dateString: string) => {
  //     return moment(dateString).format("MMMM D, YYYY, h:mm A");
  //   };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="max-w-md mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 relative"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100
        }%, rgba(59, 130, 246, 0.3), transparent 25%)`,
      }}
    >
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Blog Content */}
      <div className="p-6">
        <Link href={`/blog/${blog.id}`}>
          <h2 className="text-2xl font-bold text-white mb-2 hover:underline cursor-pointer">
            {blog.title}
          </h2>
        </Link>

        {/* Author and Time */}
        <div className="flex items-center mb-4">
          {/* <Image
            src={blog.author.img}
            alt={blog.author.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full mr-3"
          /> */}
          <div className="flex justify-between w-full items-center ">
            {/* <div>
              <p className="text-md text-gray-300">{blog.author.name}</p>
              <p className="text-xs text-gray-500">{formatDate(blog.posted)}</p>
            </div> */}
            <div className="flex items-center gap-2">
              <IoTimeOutline className="text-gray-300" />
              <p className="text-md text-gray-500">{blog.readingTime} min</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        {/* <p className="text-gray-400 text-sm mb-4">{blog.summary}</p> */}

        {/* Read more button */}
        <Link href={`/blog-details/${blog.id}`}>
          <ReadMoreBtn text="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
