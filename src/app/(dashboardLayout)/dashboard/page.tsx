import { registerUser } from "@/actions/serverActions";
import { IRegisterFormData } from "@/app/register/page";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user) {
    const userData: IRegisterFormData = {
      name: session.user.name ?? "",
      email: session.user.email ?? "",
      image: session.user.image ?? "",
    };
  
    await registerUser(userData);
  }
  
  return (
    <div className="pt-4">
      {session?.user && (
        <>
          <h2>Welcome {session?.user?.name}</h2>
          <h2>User Email: {session?.user?.email}</h2>
          <div>
            <Image
              src={session?.user?.image ?? "https://i.ibb.co.com/QvF93Vhr/fallback-user-photo.png"}
              width={100}
              height={100}
              alt="User_img"
              className="mx-auto rounded-full"
              unoptimized
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
