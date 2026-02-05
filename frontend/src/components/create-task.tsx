import { IconSend2 } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export const CreateTask = () => {
  return (
    <div className="group flex w-[300px] flex-col items-center justify-center gap-3 rounded-xl border bg-cyan-50 p-3 [box-shadow:5px_5px_0px_black] transition-all duration-200">
      <div className="flex w-full items-center gap-2">
        <Image
          src={
            "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fa599c01dec11cb6099c6aacafe3bc5a9.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1"
          }
          width={24}
          height={24}
          className="size-10 rounded-full border border-black"
          alt="Profile Pic"
        />
        <span>{"Aditya (You)"}</span>
      </div>
      <input
        type="text"
        className="w-full rounded-md border bg-emerald-50 p-2 text-sm [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 focus:-translate-x-1 focus:-translate-y-1 focus:[box-shadow:3px_3px_0px_black] focus:outline-none font-bold"
        placeholder="Enter Task Title..."
      />
      <input
        type="text"
        className="w-full rounded-md border bg-emerald-50 p-2 text-sm [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 focus:-translate-x-1 focus:-translate-y-1 focus:[box-shadow:3px_3px_0px_black] focus:outline-none text-emerald-600 border-black"
        placeholder="Enter Task Category"
      />
      <textarea
        placeholder="Enter Task Description..."
        className="w-full rounded-md border bg-emerald-50 p-2 text-sm [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 focus:-translate-x-1 focus:-translate-y-1 focus:[box-shadow:3px_3px_0px_black] focus:outline-none"
      />
      <div className="bg-emerald-50 border rounded-md flex gap-2 items-center p-2 [box-shadow:2px_2px_0px_theme(colors.neutral.500)]">
        <span className="text-xs text-neutral-500">Deadline:</span>
        <input aria-label="Deadline" type="datetime-local" className="text-xs focus:outline-none" />
      </div>
      <div className="flex w-full items-center justify-between px-2 py-1">
        <div className="flex items-center gap-2 rounded-md border px-2 py-1 [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:[box-shadow:3px_3px_0px_black]">
          <span className="text-xl font-bold text-emerald-600">₹</span>
          <input
            type="text"
            placeholder="Budget..."
            className="w-[80px] text-emerald-600 focus:outline-none font-bold"
          />
        </div>
        <button aria-label="Send" className="cursor-pointer rounded-md border border-black bg-emerald-50 px-3 py-1 text-emerald-700 [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-emerald-200 hover:[box-shadow:3px_3px_0px_black]">
          <IconSend2 />
        </button>
      </div>
    </div>
  );
};
