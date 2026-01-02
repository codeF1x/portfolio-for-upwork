import { Sliders, Clock, MessageSquare, Mail, Video, Trello } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WorkingPreferences() {
  const t = useTranslations("Location.Preferences");

  return (
    <div className="bg-surface-card rounded-3xl border border-white/10 overflow-hidden shadow-sm mt-8">
      <div className="p-6 md:p-8 border-b border-white/5">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Sliders className="h-5 w-5 text-purple-500" />
          {t("title")}
        </h3>
      </div>
      <div className="grid grid-cols-1 divide-y divide-white/5">
        {/* Regions */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 p-6 md:p-8 hover:bg-white/5 transition-colors">
          <div>
            <h4 className="text-sm font-bold text-white">{t("regions.title")}</h4>
            <p className="text-sm text-slate-400 mt-1">{t("regions.subtitle")}</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-white/10 text-slate-200 border border-white/5"
                >
                  {t(`regions.list.${index}`)}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {t("regions.description")}
            </p>
          </div>
        </div>

        {/* Overlap */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 p-6 md:p-8 hover:bg-white/5 transition-colors">
          <div>
            <h4 className="text-sm font-bold text-white">{t("overlap.title")}</h4>
            <p className="text-sm text-slate-400 mt-1">{t("overlap.subtitle")}</p>
          </div>
          <div>
            <p className="text-base font-bold text-white mb-3">9:00 AM - 6:00 PM (UTC+8)</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-800/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t("overlap.est")}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 bg-purple-900/20 px-3 py-1.5 rounded-lg border border-purple-800/30">
                <Clock className="h-3 w-3" />
                {t("overlap.cet")}
              </div>
            </div>
          </div>
        </div>

        {/* Communication */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 p-6 md:p-8 hover:bg-white/5 transition-colors">
          <div>
            <h4 className="text-sm font-bold text-white">{t("communication.title")}</h4>
            <p className="text-sm text-slate-400 mt-1">{t("communication.subtitle")}</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Slack", icon: MessageSquare },
                { name: "Meet", icon: Video },
                { name: "Trello", icon: Trello },
                { name: "Email", icon: Mail },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 px-4 py-2.5 bg-black border border-white/10 rounded-xl shadow-sm hover:border-purple-500/50 transition-colors cursor-default select-none"
                >
                  <tool.icon className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-200">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
