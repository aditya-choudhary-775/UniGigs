import { Underline } from "@/components/underline";
import { IconBrandGoogle, IconKey, IconUserPlus } from "@tabler/icons-react";
import React from "react";

export default function AuthPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[radial-gradient(var(--color-gray-400),transparent_1px)] bg-size-[10px_10px] p-5">
      <div className="fixed inset-0 -z-1 m-auto bg-linear-to-b from-cyan-100 via-blue-50 to-cyan-100" />
      <div className="relative grid w-full max-w-5xl grid-cols-2 grid-rows-1 divide-x divide-teal-500 rounded-xl border border-teal-500 px-3 py-3 shadow-xl backdrop-blur-md">
        <div className="font-architects-daughter absolute inset-0 flex items-center justify-center text-5xl text-teal-600">
          <span className="rounded-xl border border-teal-500 bg-blue-50 p-2">
            Or
          </span>
        </div>
        <form className="flex h-[480px] flex-col items-center gap-6">
          <span className="font-architects-daughter relative mb-6 text-2xl text-teal-600">
            <Underline className="absolute -top-21 -left-7 size-[250px]" />
            Welcome Back
          </span>
          <button className="z-1 flex cursor-pointer justify-center gap-4 rounded-md border border-teal-500 bg-cyan-100 px-8 py-2 font-mono text-teal-600 transition-all duration-200 hover:bg-teal-100 active:scale-90">
            <IconBrandGoogle />
            Continue with Google
          </button>
          <span className="font-architects-daughter text-2xl text-teal-700">
            Or
          </span>
          <div className="z-1 mb-[2px] flex flex-col gap-1">
            <label htmlFor="loginEmail" className="text-xs text-cyan-500">
              College Email
            </label>
            <input
              name="loginEmail"
              type="email"
              placeholder="Enter your email"
              className="rounded-md border border-teal-500 bg-teal-50 px-4 py-2 text-sm text-teal-600 placeholder:text-teal-400 focus:ring-3 focus:ring-teal-200 focus:outline-none"
            />
          </div>
          <div className="z-1 mb-[2px] flex flex-col gap-1">
            <label htmlFor="loginPassword" className="text-xs text-cyan-500">
              Password
            </label>
            <input
              name="loginPassword"
              type="password"
              placeholder="Enter your password"
              className="rounded-md border border-teal-500 bg-teal-50 px-4 py-2 text-sm text-teal-600 placeholder:text-teal-400 focus:ring-3 focus:ring-teal-200 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="z-1 mt-3 flex cursor-pointer items-center justify-center gap-3 rounded-md border bg-cyan-100 px-20 py-2 font-mono text-sm text-teal-500 transition-all duration-200 hover:border-emerald-500 hover:bg-teal-100 hover:text-emerald-500 active:scale-90"
          >
            <IconKey />
            Log In
          </button>
        </form>

        <form className="flex flex-col items-center gap-1 pt-1">
          <span className="font-architects-daughter relative mb-6 text-2xl text-teal-600">
            <Underline className="absolute -top-21 -left-7 size-[250px]" />
            Register Yourself
          </span>
          <button className="z-1 flex cursor-pointer justify-center gap-4 rounded-md border border-teal-500 bg-cyan-100 px-8 py-2 font-mono text-teal-600 transition-all duration-200 hover:bg-teal-100 active:scale-90">
            <IconBrandGoogle />
            Continue with Google
          </button>
          <span className="font-architects-daughter text-2xl text-teal-700">
            Or
          </span>
          <div className="z-1 mb-[2px] flex flex-col gap-1">
            <label htmlFor="fullName" className="text-xs text-cyan-500">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your name"
              className="w-[270px] rounded-md border border-teal-500 bg-teal-50 px-4 py-2 text-sm text-teal-600 placeholder:text-teal-400 focus:ring-3 focus:ring-teal-200 focus:outline-none"
            />
          </div>
          <div className="z-1 mb-[2px] flex flex-col gap-1">
            <label htmlFor="email" className="text-xs text-cyan-500">
              College Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-[270px] rounded-md border border-teal-500 bg-teal-50 px-4 py-2 text-sm text-teal-600 placeholder:text-teal-400 focus:ring-3 focus:ring-teal-200 focus:outline-none"
            />
          </div>
          <div className="z-1 mb-[2px] flex flex-col gap-1">
            <label htmlFor="branch" className="text-xs text-cyan-500">
              Branch
            </label>
            <input
              name="branch"
              type="text"
              placeholder="Enter your branch"
              className="w-[270px] rounded-md border border-teal-500 bg-teal-50 px-4 py-2 text-sm text-teal-600 placeholder:text-teal-400 focus:ring-3 focus:ring-teal-200 focus:outline-none"
            />
          </div>
          <div className="z-1 mb-[2px] flex flex-col gap-1">
            <label htmlFor="password" className="text-xs text-cyan-500">
              New Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter new password"
              className="w-[270px] rounded-md border border-teal-500 bg-teal-50 px-4 py-2 text-sm text-teal-600 placeholder:text-teal-400 focus:ring-3 focus:ring-teal-200 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="z-1 mt-3 flex cursor-pointer items-center justify-center gap-6 rounded-md border bg-cyan-100 px-12 py-2 font-mono text-sm text-teal-500 transition-all duration-200 hover:border-emerald-500 hover:bg-teal-100 hover:text-emerald-500 active:scale-90"
          >
            <IconUserPlus />
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
}
