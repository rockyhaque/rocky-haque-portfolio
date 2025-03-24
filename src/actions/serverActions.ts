"user server";

import { IRegisterFormData } from "@/app/register/page";

export const registerUser = async (data: IRegisterFormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log(result)
  return result;
};
