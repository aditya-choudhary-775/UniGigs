import React from "react";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen items-center justify-center bg-[radial-gradient(var(--color-gray-400),transparent_1px)] bg-size-[10px_10px] p-10">
      <div className="fixed inset-0 -z-1 m-auto bg-linear-to-b from-cyan-100 via-blue-50 to-cyan-100" />
      <div className="border h-full w-full rounded-md backdrop-blur-md shadow-xl border-gray-300"></div>
    </div>
  );
}
