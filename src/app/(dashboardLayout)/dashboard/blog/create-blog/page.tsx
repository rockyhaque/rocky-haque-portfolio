"use client";
import { createBlogPost } from "@/actions/serverActions";
import CustomBtn from "@/components/Button/CustomBtn";
import React, { useState } from "react";

interface Author {
  name: string;
  img: string;
  email: string;
}

export interface BlogPostData {
  title: string;
  image: string;
  content: string;
  author: Author;
  readingTime: number;
  isPublished: boolean;
}

const CreateBlogPage = () => {
  const [formData, setFormData] = useState<BlogPostData >({
    title: "",
    image: "",
    content: "",
    author: {
      name: "",
      img: "",
      email: "",
    },
    readingTime: 3,
    isPublished: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name.includes("author.")) {
      const authorField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        author: {
          ...prev.author,
          [authorField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
         // Ensure readingTime is a number
    const sanitizedData = {
        ...formData,
        readingTime: Number(formData.readingTime),
      };
        await createBlogPost(sanitizedData);
        // console.log("Blog created successfully:", result);
        setSuccess("Blog post created successfully!");
        // Reset form after successful submission
        setFormData({
          title: "",
          image: "",
          content: "",
          author: {
            name: "",
            img: "",
            email: "",
          },
          readingTime: 3,
          isPublished: false,
        });
      } catch (err) {
        console.error("Error submitting form:", err);
        setError(
          err instanceof Error 
            ? err.message 
            : "An unknown error occurred. Please check the console for details."
        );
      } finally {
        setIsSubmitting(false); 
      }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Create New Blog Post</h2>

      {error && (
        <div className="alert alert-error mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="alert alert-success mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{success}</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 card bg-base-100 p-8 shadow-lg"
      >
        {/* Blog Post Title */}
        <div className="form-control">
          <label className="label" htmlFor="title">
            <span className="label-text font-semibold">Blog Post Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Featured Image URL */}
        <div className="form-control">
          <label className="label" htmlFor="image">
            <span className="label-text font-semibold">Featured Image URL</span>
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Blog Content */}
        <div className="form-control">
          <label className="label" htmlFor="content">
            <span className="label-text font-semibold">Content</span>
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Write your blog content here..."
            required
            rows={6}
          ></textarea>
        </div>

        {/* Author Information */}
        <div className="space-y-6 border-t pt-6">
          <h3 className="text-xl font-semibold">Author Information</h3>

          <div className="space-y-4">
            <div className="form-control">
              <label className="label" htmlFor="author.name">
                <span className="label-text font-semibold">Author Name</span>
              </label>
              <input
                type="text"
                id="author.name"
                name="author.name"
                value={formData.author.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="author.img">
                <span className="label-text font-semibold">
                  Author Image URL
                </span>
              </label>
              <input
                type="url"
                id="author.img"
                name="author.img"
                value={formData.author.img}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="https://example.com/author.jpg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="author.email">
                <span className="label-text font-semibold">Author Email</span>
              </label>
              <input
                type="email"
                id="author.email"
                name="author.email"
                value={formData.author.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="author@example.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Reading Time */}
        <div className="form-control">
          <label className="label" htmlFor="readingTime">
            <span className="label-text font-semibold">
              Estimated Reading Time (minutes)
            </span>
          </label>
          <input
            type="number"
            id="readingTime"
            name="readingTime"
            min="1"
            value={formData.readingTime}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Publish Status */}
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <input
              type="checkbox"
              id="isPublished"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              className="toggle toggle-primary"
            />
            <span className="label-text font-semibold">
              Publish immediately
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <CustomBtn 
            text={isSubmitting ? "Creating..." : "Create Blog Post"} 
            type="submit" 
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;