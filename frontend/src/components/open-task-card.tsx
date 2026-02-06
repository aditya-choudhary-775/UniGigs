"use client"
import { IconTrash } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { OpenTask } from "../../types/open-task";
import { getTimeLeft } from "../../utils/getTimeLeft";

interface CardProps {
  task: OpenTask;
}

export const OpenTaskCard = ({ task }: CardProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(task.deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(task.deadline));
    }, 1000);

    return () => clearInterval(interval);
  }, [task.deadline]);

  const { days, hours, minutes, seconds, expired } = timeLeft;

  return (
    <div className="group group flex w-[300px] flex-col items-center justify-center gap-3 rounded-md border bg-neutral-50 p-2 pb-3 [box-shadow:5px_5px_0px_black] transition-all duration-200 hover:bg-neutral-200 hover:[box-shadow:2px_2px_0px_theme(colors.gray.500)]">
      <div className="flex w-full items-start justify-between gap-2 p-1">
        <div className="flex flex-col items-center justify-center rounded-md border p-1">
          <div className="flex items-start justify-center">
            {days > 0 && (
              <>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[18px] font-bold">{days}</span>
                  <span className="text-[8px] text-gray-500">Days</span>
                </div>
                <span className="text-[18px] font-bold">:</span>
              </>
            )}
            {
              <div className="flex flex-col items-center justify-center">
                <span className="text-[18px] font-bold">
                  {hours.toString().padStart(2, "0")}
                </span>
                <span className="text-[8px] text-gray-500">Hours</span>
              </div>
            }
            <span className="text-[18px] font-bold">:</span>
            {
              <div className="flex flex-col items-center justify-center">
                <span className="text-[18px] font-bold">
                  {minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-[8px] text-gray-500">Minutes</span>
              </div>
            }
            <span className="text-[18px] font-bold">:</span>
            {
              <div className="flex flex-col items-center justify-center">
                <span className="text-[18px] font-bold">
                  {seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-[8px] text-gray-500">Seconds</span>
              </div>
            }
          </div>
        </div>

        <span className="text-xl font-bold text-emerald-600">₹{task.budget}</span>
      </div>

      <div className="w-full rounded-md border bg-linear-to-tr from-teal-200 via-lime-200 to-emerald-200 p-2 [box-shadow:3px_3px_0px_black] group-hover:[box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200">
        <div className="pb-2 pt-0 font-bold">
          {task.title}
        </div>
        <div className="no-scrollbar h-20 w-full overflow-y-scroll rounded-md border bg-white px-2 pt-2 text-sm [box-shadow:inset_2px_2px_0px_black] group-hover:[box-shadow:inset_1px_1px_0px_theme(colors.neutral.500)] transition-all duration-200 group-hover:bg-neutral-200">
          {task.description}
        </div>
      </div>
      <div className="flex w-full items-center justify-between pl-1">
        <IconTrash className="size-9 cursor-pointer rounded-md border border-black bg-red-50 p-1 text-red-500 [box-shadow:-2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:bg-red-200 hover:text-red-700 hover:[box-shadow:-3px_3px_0px_black]" />

        <button className="mt-1 mb-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-black bg-cyan-50 px-3 py-1 text-neutral-600 [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-cyan-200 hover:[box-shadow:3px_3px_0px_black]">
          <span>View Applicants</span>
          <div className="relative m-1 flex shrink-0 items-center justify-center rounded-full bg-cyan-500 p-3 text-white">
            <span className="absolute font-medium">6</span>
          </div>
        </button>
      </div>
    </div>
  );
};
