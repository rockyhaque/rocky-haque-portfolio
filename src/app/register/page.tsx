"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { registerUser } from "@/actions/serverActions";

export interface IRegisterFormData {
  email: string;
  name: string;
  image: string;
  password?: string;
}

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>();

  const onSubmit = async (data: IRegisterFormData) => {
    console.log(data);
     registerUser(data);

  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Regiisteriing wiiiith ${provider}`);
    if (provider == "github") {
      signIn("github", {
        callbackUrl: "https://rocky-haque.vercel.app",
      });
    } else if (provider == "google") {
      signIn("google", {
        callbackUrl: "https://rocky-haque.vercel.app",
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full px-4">
      {/* Background Image */}
      <Image
        src="/assets/img/auth.png"
        alt="login_img"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />

      {/* Login Form Container */}
      <div className="w-full max-w-md bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white/50 rounded-lg p-8 text-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-lg md:text-2xl text-white mb-6">Sign Up</h2>
          <p className="text-gray-300">If you new here then registered first</p>

          {/* Email Input */}
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-transparent border-b-gray-600 text-gray-300"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-1">
                *Email is required
              </span>
            )}
          </div>

          {/* Username Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full bg-transparent border-b-gray-600 text-gray-300"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-1">
                *Name is required
              </span>
            )}
          </div>

          {/* PhotoURL Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-transparent border-b-gray-600 text-gray-300"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-1">
                *Photo URL is required
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="mt-4 relative flex items-center">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full bg-transparent border-b-gray-600 text-gray-300"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            <span
              className="absolute right-3 cursor-pointer text-xl text-white"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
            </span>
          </div>

          {/* Password Errors */}
          {errors.password?.type === "required" && (
            <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-2">
              Password is required
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-2">
              Password must be at least 6 characters
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-2">
              Password must be less than 20 characters
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-rose-500 text-sm md:text-md font-light md:font-semibold mt-2">
              Password must include uppercase, lowercase, number, and special
              character.
            </span>
          )}

          {/* Forgot Password */}
          <div className="text-end my-6 text-white">
            <a href="#" className="hover:underline text-xm md:text-lg">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-white text-black font-semibold py-1 md:py-1.5 px-3 md:px-6 rounded hover:bg-opacity-20 hover:text-white transition ease-in-out text-xs md:text-base"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center py-4 md:py-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-300">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Sign-in */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button
            // onClick={() =>
            //   signIn("google", {
            //     callbackUrl: "http://localhost:3000",
            //   })
            // }
            onClick={() => handleSocialRegister("google")}
            className="flex justify-center items-center gap-2 border border-gray-500 rounded-md px-2 py-1 hover:bg-cyan-200/10"
          >
            <FcGoogle size={20} />
            <p className="text-white">Google</p>
          </button>
          <button
            // onClick={() =>
            //   signIn("github", {
            //     callbackUrl: "http://localhost:3000",
            //   })
            // }
            onClick={() => handleSocialRegister("github")}
            className="flex justify-center items-center gap-2 border border-gray-500 rounded-md px-2 py-1 hover:bg-cyan-200/10"
          >
            <FaGithub size={20} />
            <p className="text-white">Github</p>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8 text-white">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
