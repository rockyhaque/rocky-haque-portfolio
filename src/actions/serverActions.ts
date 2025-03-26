"user server";

import { BlogPostData } from "@/app/(dashboardLayout)/dashboard/blog/create-blog/page";
import { IRegisterFormData } from "@/app/register/page";

export const registerUser = async (data: IRegisterFormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  // console.log(result)
  return result;
};

export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contact/create-contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    throw new Error('Failed to submit contact form');
  }
  
  return await res.json();
};


// fetchContacts

export interface IContact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchContacts = async (): Promise<{ 
  data?: IContact[]; 
  error?: string 
}> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contact/all-contacts`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return  data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { 
      error: error instanceof Error ? error.message : 'Failed to fetch contacts' 
    };
  }
};

// * Blogs APIs

export const createBlogPost = async (data: BlogPostData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog/create-blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      // Get more detailed error information
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        `HTTP error! status: ${res.status}, message: ${errorData.message || 'No additional error info'}`
      );
    }

    const result = await res.json();
    // console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error creating blog post:", error);
    throw error instanceof Error ? error : new Error("Failed to create blog post");
  }
};


interface Author {
  name: string
  img: string
  email: string
}

export interface IBlog {
  _id: string;
  title: string
  image: string
  content: string
  author: Author
  isPublished: boolean
  readingTime: number
}

export const fetchBlogs = async (): Promise<{ 
  data?: IBlog[]; 
  error?: string 
}> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog/all-blogs`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return  data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { 
      error: error instanceof Error ? error.message : 'Failed to fetch contacts' 
    };
  }
};