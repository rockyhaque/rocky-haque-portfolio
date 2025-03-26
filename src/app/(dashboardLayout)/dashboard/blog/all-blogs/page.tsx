import { fetchBlogs } from "@/actions/serverActions";
import BlogDeleteBtn from "@/components/Button/BlogDeleteBtn";
import React from "react";

const AllBlogsPage = async () => {
  const { data: blogs, error } = await fetchBlogs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {blogs && blogs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-900 border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-sky-900 to-slate-900 ">
                <th className="py-3 px-4 border-b text-left">Author Name</th>
                <th className="py-3 px-4 border-b text-left">Title</th>
                <th className="py-3 px-4 border-b text-left">Content</th>
                <th className="py-3 px-4 border-b text-left">Reading Time</th>
                <th className="py-3 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-800">
                  <td className="py-3 px-4 border-b">{blog.author?.name}</td>
                  <td className="py-3 px-4 border-b">{blog.title}</td>
                  <td className="py-3 px-4 border-b">
                    {blog.content.split(" ").slice(0, 5).join(" ") +
                      (blog.content.split(" ").length > 5 ? "..." : "")}
                  </td>
                  <td className="py-3 px-4 border-b">{blog.readingTime} Min</td>
                  <td className="py-3 px-4 border-b">
                    <BlogDeleteBtn id={blog._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No blogs found.</p>
      )}
    </div>
  );
};

export default AllBlogsPage;
