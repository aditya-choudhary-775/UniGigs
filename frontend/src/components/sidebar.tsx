"use client";
import {
  IconAppWindow,
  IconCoinRupee,
  IconLayoutGrid,
  IconListDetails,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <IconLayoutGrid />,
      label: "Explore Gigs",
      href: "/dashboard",
    },
    {
      icon: <IconListDetails />,
      label: "My Tasks",
      href: "/dashboard/tasks",
    },
    {
      icon: <IconAppWindow />,
      label: "My Posted Gigs",
      href: "/dashboard/posts",
    },
    {
      icon: <IconCoinRupee />,
      label: "Earnings",
      href: "/dashboard/earnings",
    },
  ];

  const extraSidebarItems = [
    {
      icon: <IconSettings />,
      label: "Settings",
      href: "/dashboard/settings",
    },
    {
      icon: <IconLogout />,
      label: "Log Out",
      href: "/dashboard/logout",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex h-full w-fit flex-col gap-2 p-5 pt-8 pb-10 pl-8">
      <span className="font-rubik-glitch cursor-pointer pb-10 text-3xl text-teal-500">
        UniGigs
      </span>
      <div className="flex flex-col gap-3">
        {sideBarItems.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`flex items-center gap-2 rounded-md border border-black py-2 pl-2 pr-6 text-neutral-600 transition-all duration-200 hover:text-neutral-700 ${pathname === item.href ? "[box-shadow:-2px_2px_0px_theme(colors.neutral.500)] bg-sky-200" : "[box-shadow:-5px_5px_0px_black] bg-cyan-100 hover:bg-cyan-200"}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-1 flex-col justify-end gap-3">
        {extraSidebarItems.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`flex items-center gap-2 rounded-md border border-black p-2 text-neutral-600  transition-all duration-200 ${pathname === item.href ? "[box-shadow:-2px_2px_0px_theme(colors.neutral.500)] bg-sky-200 text-neutral-800" : "[box-shadow:-5px_5px_0px_black] bg-gray-100 hover:bg-cyan-200"}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
