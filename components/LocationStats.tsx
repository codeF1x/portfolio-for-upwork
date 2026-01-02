"use client";

import { Clock, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function LocationStats() {
  const t = useTranslations("Location.Stats");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Shanghai",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-card p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-all hover:border-white/20 group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-900/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <Clock className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded">NOW</span>
        </div>
        <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">{t("localTime")}</h3>
        <p className="text-3xl font-black text-white mt-1">{time || "--:--"}</p>
      </div>

      <div className="bg-surface-card p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-all hover:border-white/20 group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-amber-900/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <Zap className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">{t("avgResponse")}</h3>
        <p className="text-3xl font-black text-white mt-1">
          &lt; 2 <span className="text-lg font-bold text-slate-400">{t("hours")}</span>
        </p>
      </div>

      <div className="bg-surface-card p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-all hover:border-white/20 group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-900/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <Globe className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded">UTC+8</span>
        </div>
        <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">{t("timeZone")}</h3>
        <p className="text-3xl font-black text-white mt-1">Asia/Shanghai</p>
      </div>
    </div>
  );
}
