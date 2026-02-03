import { Doodle1 } from "@/components/doodle1";
import { Doodle2 } from "@/components/doodle2";
import { Doodle3 } from "@/components/doodle3";
import { Doodle4 } from "@/components/doodle4";
import { Doodle5 } from "@/components/doodle5";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import {
  IconArrowGuide,
  IconBoxMultiple,
  IconCalendarUser,
  IconClockHour4,
  IconDeviceMobile,
  IconHomeStats,
  IconReservedLine,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(var(--color-gray-300),transparent_1px)] bg-size-[10px_10px] p-4">
      <div className="fixed bg-linear-to-b from-cyan-100 via-blue-50 to-cyan-100 m-auto inset-0 -z-1 h-full" />
      <Navbar />

      <Hero />

      <div className="mx-auto mt-8 flex flex-col items-center font-bold">
        <span className="font-architects-daughter mt-5 mb-16 text-4xl text-teal-600">
          How It Works ?
        </span>
        <div className="font-architects-daughter relative left-26 my-20 flex justify-center gap-30 text-2xl">
          <Doodle5 className="absolute top-9 -left-64" />
          <Doodle3 className="absolute top-14 -left-42" />
          <span className="font-architects-daughter absolute top-80 -left-50 text-5xl text-teal-600">
            You
          </span>
          <span className="relative">
            <Doodle1 className="absolute -top-26 -right-12 size-[240px]" />
            <Doodle2 className="absolute -top-32 left-20" />
            Post a task
          </span>
          <span className="relative">
            <Doodle1 className="absolute -top-32 -right-12 size-[300px]" />
            <Doodle2 className="absolute -top-34 left-34" />
            Choose a student
          </span>
          <span className="relative">
            <Doodle1 className="absolute -top-42 -right-20 size-[380px]" />
            Get it done and pay
          </span>
        </div>
        <span className="font-architects-daughter my-10 text-5xl">Or</span>
        <div className="font-architects-daughter relative left-26 my-20 flex justify-center gap-30 text-2xl">
          <Doodle4 className="absolute -top-42 -left-56" />
          <div className="relative">
            <Doodle1 className="absolute -top-28 -right-11 size-[260px]" />
            <Doodle2 className="absolute -top-32 left-20" />
            Browse Tasks
          </div>
          <div className="relative">
            <Doodle1 className="absolute -top-32 -right-12 size-[280px]" />
            <Doodle2 className="absolute -top-32 left-32" />
            Apply with skills
          </div>
          <div className="relative">
            <Doodle1 className="absolute -top-22 -right-14 size-[200px]" />
            Get paid
          </div>
        </div>
      </div>
    </div>
  );
}
