import { Sidebar } from "@/components/sidebar";
import {
  IconBell,
  IconChevronDown,
  IconFilter,
  IconMessage2,
  IconSearch,
  IconUserCircle,
} from "@tabler/icons-react";
import React from "react";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen items-center justify-center bg-[radial-gradient(var(--color-gray-400),transparent_1px)] bg-size-[10px_10px] p-0">
      <div className="fixed inset-0 -z-1 m-auto bg-linear-to-b from-cyan-100 via-blue-50 to-cyan-100" />
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-md border border-gray-800 shadow-xl backdrop-blur-[2px]">
        <Sidebar />

        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <div className="flex w-full items-center justify-end gap-3 px-5 pt-4 pb-6 text-cyan-600">
            <div className="flex-1 flex justify-center items-center">
              <div className="flex items-center gap-2 border border-black rounded-2xl py-2 px-4 bg-green-100/50 w-[90%] [box-shadow:3px_3px_0px_theme(colors.neutral.500)] focus-within:[box-shadow:5px_5px_0px_black] translate-x-2 translate-y-2 transition-all duration-200 focus-within:-translate-x-0 focus-within:-translate-y-0">
                <IconSearch className="size-4"/>
                <input type="text" placeholder="Search" className="focus:outline-none flex-1" />
                <IconFilter className="size-5 cursor-pointer" />
              </div>
            </div>
            <div>
              <IconMessage2 className="size-9 rounded-full p-1 transition-all duration-200 active:scale-85 cursor-pointer" />
            </div>
            <div>
              <IconBell className="size-9 rounded-full p-1 transition-all duration-200 active:scale-85 cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              <IconUserCircle className="size-9 rounded-full p-1 transition-all duration-200 active:scale-85 cursor-pointer" />
              <div className="flex items-center justify-center cursor-pointer">
                <span className="text-md font-bold">Aditya</span>
                <IconChevronDown className="size-4" />
              </div>
            </div>
          </div>
          <div className="w-full flex-1 pt-1 pr-5 pb-5 pl-1 overflow-hidden">
            <div className="h-full w-full rounded-md border bg-neutral-50 overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
