"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Postslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      title: "Open",
      href: "/dashboard/posts",
    },
    {
      title: "In Progress",
      href: "/dashboard/posts/inProgress",
    },
    {
      title: "Completed",
      href: "/dashboard/posts/completed",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="no-scrollbar h-full w-full overflow-y-scroll bg-red-50 p-3">
      <div className="flex items-center justify-center gap-20 pt-1 pb-10">
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex w-[110px] cursor-pointer items-center justify-center rounded-md border p-2 text-neutral-600 transition-all duration-200 ${pathname === item.href ? "translate-x-1 translate-y-1 bg-green-200 [box-shadow:2px_2px_0px_theme(colors.neutral.500)]" : "bg-lime-100 [box-shadow:5px_5px_0px_black] hover:bg-lime-200"}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
