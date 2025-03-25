import { registerUser } from "@/actions/serverActions";
import { IRegisterFormData } from "@/app/register/page";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

interface UserData {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  isBlocked: boolean;
  userStatus: string;
  createdAt: string;
  updatedAt: string;
}

const fetchUserData = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`, {
      cache: 'no-store'
    });
    const allUsers = await res.json();
    return allUsers.find((user: UserData) => user.email === email);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  let userDetails: UserData | null = null;
  
  if (session?.user?.email) {
    // Register user if not already registered
    const userData: IRegisterFormData = {
      name: session.user.name ?? "",
      email: session.user.email,
      image: session.user.image ?? "",
    };
    await registerUser(userData);
    
    // Fetch complete user details from your API
    userDetails = await fetchUserData(session.user.email);
  }

  // Format date
  const joinDate = userDetails?.createdAt 
    ? new Date(userDetails.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
    : 'Unknown';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      {/* Background Blur Gradient */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>
      
      {session?.user && (
        <div className="relative w-full max-w-md">
          {/* Profile Card */}
          <div className="relative z-10 bg-black/40 backdrop-blur-2xl rounded-2xl p-8 shadow-xl border border-gray-700/50 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-rose-500/30 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
            
            {/* User Image */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-500 rounded-full opacity-50 group-hover:opacity-70 transition-all duration-500 blur-xl animate-pulse"></div>
                <Image
                  src={userDetails?.image || session.user.image || "https://i.ibb.co.com/QvF93Vhr/fallback-user-photo.png"}
                  width={120}
                  height={120}
                  alt="User Profile"
                  className="relative z-10 mx-auto rounded-full border-4 border-gray-600/50 object-cover transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/50"
                  unoptimized
                />
              </div>
            </div>
            
            {/* User Info */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
                  {userDetails?.name || session.user.name}
                </span>
              </h2>
              
              <div className="bg-gray-800/40 rounded-xl p-4 backdrop-blur-sm border border-gray-700/30">
                <div className="flex items-center justify-between py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Email</span>
                  <span className="font-medium text-gray-200">{session.user.email}</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    userDetails?.userStatus === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {userDetails?.userStatus || 'active'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Member Since</span>
                  <span className="text-sm text-gray-300">{joinDate}</span>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-800/40 rounded-xl p-3 text-center backdrop-blur-sm border border-gray-700/30 hover:bg-gray-700/40 transition-colors">
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-3 text-center backdrop-blur-sm border border-gray-700/30 hover:bg-gray-700/40 transition-colors">
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-xs text-gray-400">Posts</div>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-3 text-center backdrop-blur-sm border border-gray-700/30 hover:bg-gray-700/40 transition-colors">
                  <div className="text-2xl font-bold text-white">1.2K</div>
                  <div className="text-xs text-gray-400">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;