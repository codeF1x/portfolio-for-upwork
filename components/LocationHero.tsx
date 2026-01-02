"use client";

import dynamic from "next/dynamic";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-surface-card text-slate-500">
      Loading Map...
    </div>
  ),
});

export default function LocationHero() {
  const t = useTranslations("Location.Hero");

  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex items-center gap-2 text-purple-400">
        <Globe className="h-5 w-5" />
        <span className="text-sm font-bold uppercase tracking-widest text-purple-400">{t("remoteReady")}</span>
      </div>
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
          {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t("availability")}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
          {t("description")}
        </p>
      </div>

      <div className="group relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
        <Map />
        
        <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/10 z-[1000]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-xs font-bold text-white uppercase tracking-wider">{t("chengdu")}</span>
        </div>
      </div>
    </div>
  );
}
