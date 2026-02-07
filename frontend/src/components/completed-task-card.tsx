import { IconMessage2, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { CompletedTask } from "../../types/completed-task";

interface CardProps {
  task: CompletedTask;
}

export const CompletedTaskCard = ({ task }: CardProps) => {
  return (
    <div className="group group flex w-[300px] flex-col items-center justify-center gap-2 rounded-md border bg-neutral-50 p-2 pb-3 [box-shadow:5px_5px_0px_black] transition-all duration-200 hover:bg-neutral-200 hover:[box-shadow:2px_2px_0px_theme(colors.gray.500)]">
      <div className="flex w-full items-start justify-between gap-2 p-1">
        <div className="flex items-center gap-2">
          <span className="font-architects-daughter text-xl text-cyan-700">
            Completed by
          </span>
          <Image
            src={task.completedBy.profilePicLink}
            height={24}
            width={24}
            alt={task.completedBy.name}
            className="aspect-square size-8 cursor-pointer rounded-full border border-black"
          ></Image>
        </div>

        <span className="text-xl font-bold text-emerald-600">
          ₹{task.budget}
        </span>
      </div>

      <div className="w-full rounded-md border bg-linear-to-tr from-lime-200 via-cyan-200 to-yellow-200 p-2 [box-shadow:3px_3px_0px_black] transition-all duration-200 group-hover:[box-shadow:2px_2px_0px_theme(colors.neutral.500)]">
        <div className="pt-0 pb-2 font-bold">{task.title}</div>
        <div className="no-scrollbar h-20 w-full overflow-y-scroll rounded-md border bg-white px-2 pt-2 text-sm [box-shadow:inset_2px_2px_0px_black] transition-all duration-200 group-hover:bg-neutral-200 group-hover:[box-shadow:inset_1px_1px_0px_theme(colors.neutral.500)]">
          {task.description}
        </div>
      </div>

      <div className="borde flex w-full items-center justify-between px-2">
        <IconTrash className="size-8 cursor-pointer rounded-md border border-black bg-red-50 p-1 text-red-500 [box-shadow:-2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:bg-red-200 hover:text-red-700 hover:[box-shadow:-3px_3px_0px_black]" />

        <div className="mt-1 flex flex-col items-start gap-1 rounded-md border-2 border-sky-800 p-1">
          <div className="text-xs text-sky-600">
            <span className="font-bold text-sky-800">Posted:</span>{" "}
            {getFormattedDate(task.postedAt)}
          </div>
          <div className="text-xs text-sky-600">
            <span className="font-bold text-sky-800">Deadline:</span>{" "}
            {getFormattedDate(task.deadline)}
          </div>
        </div>

        <IconMessage2 className="size-8 cursor-pointer rounded-md border border-black bg-teal-50 p-1 text-teal-500 [box-shadow:-2px_2px_0px_theme(colors.neutral.500)] transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:bg-teal-200 hover:text-teal-700 hover:[box-shadow:-3px_3px_0px_black]" />
      </div>
    </div>
  );
};
