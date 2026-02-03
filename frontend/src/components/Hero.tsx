import { IconBrandYoutube } from "@tabler/icons-react";
import React from "react";
import { Arrow } from "./arrow";

export const Hero = () => {
  return (
    <div className="mx-auto mt-30 grid max-w-6xl grid-cols-2 grid-rows-1">
      <div className="col-span-1 flex flex-col items-start gap-7 p-8">
        <h1 className="relative mb-8 text-4xl font-bold">
          <Arrow className="absolute -top-18 right-20" />
          <div className="absolute -bottom-8 h-px w-full bg-linear-to-r from-transparent via-teal-500 to-transparent mask-x-from-70%" />
          Earn{" "}
          <span className="bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Money
          </span>{" "}
          with your{" "}
          <span className="bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Skills
          </span>
          . Get{" "}
          <span className="bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Work
          </span>{" "}
          done by{" "}
          <span className="bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Students
          </span>
          .
        </h1>
        <p className="text-base text-gray-500">
          Posters, websites, PPTs, lab help — done by students from your
          college.
        </p>
        <div className="flex w-full gap-6">
          <button className="cursor-pointer rounded-md bg-teal-400 px-4 py-2 text-white transition-all duration-200 text-shadow-md hover:bg-emerald-400 hover:shadow-xl">
            Post a Task
          </button>
          <button className="hover:bg-gray-10 flex cursor-pointer items-center gap-2 rounded-md border border-teal-500 text-teal-500 px-4 py-2 transition-all duration-200">
            Find Work
          </button>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center p-7">
        <div className="h-[350px] w-full rounded-xl border border-neutral-200 backdrop-blur-sm shadow-xl"></div>
      </div>
    </div>
  );
};
