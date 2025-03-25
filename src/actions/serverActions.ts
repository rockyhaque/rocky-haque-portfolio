"user server";

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