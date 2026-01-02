"use client";

import { useEffect, useState } from "react";

export default function SystemStatus() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const gitSha = process.env.NEXT_PUBLIC_GIT_SHA || "dev";
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME 
    ? new Date(process.env.NEXT_PUBLIC_BUILD_TIME).toLocaleString() 
    : "Just now";

  return (
    <div className="flex flex-col items-center md:items-end gap-1 text-[10px] text-slate-600 font-mono">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-500 font-bold">System Live</span>
      </div>
      <div className="flex gap-3">
        <span>v.{gitSha.slice(0, 7)}</span>
        <span className="hidden md:inline">•</span>
        <span>{buildTime}</span>
      </div>
    </div>
  );
}
