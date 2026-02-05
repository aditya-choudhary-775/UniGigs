"use client";
import React, { useEffect, useState } from "react";
import { Task } from "../../types/task";
import { getTimeLeft } from "../../utils/getTimeLeft";
import Image from "next/image";

interface GigCardProps {
  task: Task;
}

export const FeedTask = ({ task }: GigCardProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(task.deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(task.deadline));
    }, 1000);

    return () => clearInterval(interval);
  }, [task.deadline]);

  const { days, hours, minutes, seconds, expired } = timeLeft;

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border p-2 bg-neutral-100 hover:bg-neutral-200 hover:bg-neutral- w-[300px] [box-shadow:5px_5px_0px_black] hover:[box-shadow:2px_2px_0px_theme(colors.gray.500)] transition-all duration-200 group">
      <div className="flex w-full items-center gap-2">
        <Image
          src={task.profilePicLink}
          width={24}
          height={24}
          className="size-10 rounded-full border border-black"
          alt="Profile Pic"
        />
        <span>{task.postedBy}</span>
      </div>
      <span className="w-full font-bold">{task.title}</span>
      <div className="flex items-center w-full">
        <div className="border flex items-center gap-2 py-1 px-2 group-hover:bg-emerald-100 group-hover:border-emerald-'600 bg-emerald-50 border-emerald-500 text-emerald-600 rounded-xl transition-all duration-200">
          <div className="rounded-full bg-emerald-400 group-hover:bg-emerald-500 transition-all duration-200 size-2" />
          <span className="text-[10px]">{task.category}</span>
        </div>
      </div>
      <span className="w-full text-sm">{task.description}</span>
      <div className="border p-2 rounded-xl flex flex-col items-center justify-center">
        <div className="flex items-start justify-center">
          {days > 0 && (
            <>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-bold">{days}</span>
                <span className="text-[10px] text-gray-500">Days</span>
              </div>
              <span className="text-xl font-bold">:</span>
            </>
          )}
          {
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl font-bold">
                {hours.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-500">Hours</span>
            </div>
          }
          <span className="text-xl font-bold">:</span>
          {
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl font-bold">
                {minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-500">Minutes</span>
            </div>
          }
          <span className="text-xl font-bold">:</span>
          {
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl font-bold">
                {seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-500">Seconds</span>
            </div>
          }
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-2 py-1">
        <span className="text-emerald-600 font-bold text-xl">₹{task.budget}</span>
        <button className="border px-3 hover:-translate-x-1 hover:-translate-y-1 py-1 rounded-md cursor-pointer transition-all duration-200 text-neutral-600 hover:[box-shadow:3px_3px_0px_black] [box-shadow:2px_2px_0px_theme(colors.neutral.500)] border-black bg-emerald-50 hover:bg-emerald-200">Apply</button>
      </div>
    </div>
  );
};
