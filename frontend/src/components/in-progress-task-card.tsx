import React from "react";
import { InProgressTask } from "../../types/in-progress-task";
import { IconMessage2, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

interface CardProps {
  task: InProgressTask;
}

const getFormattedDate = (isoString: string) => {
  const date = new Date(isoString);

  const formatted = date.toLocaleString("en-IN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return formatted;
};

export const InProgressTaskCard = ({ task }: CardProps) => {
  return (
    <div className="group group flex w-[300px] flex-col items-center justify-center gap-2 rounded-md border bg-neutral-50 p-2 pb-3 [box-shadow:5px_5px_0px_black] transition-all duration-200 hover:bg-neutral-200 hover:[box-shadow:2px_2px_0px_theme(colors.gray.500)]">
      <div className="flex w-full items-start justify-between gap-2 p-1">
        <div className="flex items-center gap-2">
          <span className="font-architects-daughter text-xl text-cyan-700">
            Assigned to
          </span>
          <Image
            src={task.assignedTo.profilePicLink}
            height={24}
            width={24}
            alt={task.assignedTo.name}
            className="aspect-square size-8 rounded-full border border-black"
          ></Image>
        </div>

        <span className="text-xl font-bold text-emerald-600">
          ₹{task.budget}
        </span>
      </div>

      <div className="w-full rounded-md border bg-linear-to-tr from-cyan-200 via-green-200 to-teal-200 p-2 [box-shadow:3px_3px_0px_black] transition-all duration-200 group-hover:[box-shadow:2px_2px_0px_theme(colors.neutral.500)]">
        <div className="pt-0 pb-2 font-bold">{task.title}</div>
        <div className="no-scrollbar h-20 w-full overflow-y-scroll rounded-md border bg-white px-2 pt-2 text-sm [box-shadow:inset_2px_2px_0px_black] transition-all duration-200 group-hover:bg-neutral-200 group-hover:[box-shadow:inset_1px_1px_0px_theme(colors.neutral.500)]">
          {task.description}
        </div>
      </div>
      <div className="text-xs text-sky-600">
        Deadline: {getFormattedDate(task.deadline)}
      </div>
      <div className="flex w-full items-center justify-between pl-1">
        <div className="flex items-center gap-3 justify-center">
          <IconTrash className="size-7 cursor-pointer rounded-md border border-black bg-red-50 p-1 text-red-500 [box-shadow:-2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:bg-red-200 hover:text-red-700 hover:[box-shadow:-3px_3px_0px_black]" />

          <IconMessage2 className="size-7 cursor-pointer rounded-md border border-black bg-teal-50 p-1 text-teal-500 [box-shadow:-2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:bg-teal-200 hover:text-teal-700 hover:[box-shadow:-3px_3px_0px_black]" />
        </div>

        <button className="mt-1 mb-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-black bg-cyan-50 px-3 py-1 text-neutral-600 [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-cyan-200 hover:[box-shadow:3px_3px_0px_black]">
          <span className="text-sm">Re-Assign</span>
          <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 p-1 text-white">
            <span className="absolute text-[12px] font-medium">
              {task.applicantsCount}
            </span>
          </div>
        </button>
      </div>
      <button className="w-full cursor-pointer rounded-md border border-black bg-emerald-50 px-3 py-1 text-sm text-neutral-600 [box-shadow:2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-emerald-200 hover:[box-shadow:3px_3px_0px_black]">
        Mark as Complete
      </button>
    </div>
  );
};
