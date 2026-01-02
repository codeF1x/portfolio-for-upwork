import { Brain, Check, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Certifications() {
  const t = useTranslations("Skills.Education");
  const softSkillsKeys = ["comm", "problem", "time"] as const;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Soft Skills */}
      <div className="rounded-2xl bg-surface-card p-8 border border-border-color shadow-sm h-full flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
          <Brain className="h-8 w-8 text-white" />
          <h3 className="text-xl font-bold text-white">{t("softSkillsTitle")}</h3>
        </div>
        <ul className="space-y-4">
          {softSkillsKeys.map((key) => (
            <li key={key} className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0">
                <Check className="h-3 w-3" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{t(`softSkills.${key}.title`)}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t(`softSkills.${key}.desc`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="rounded-2xl bg-surface-card p-8 border border-border-color shadow-sm h-full flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
          <GraduationCap className="h-8 w-8 text-white" />
          <h3 className="text-xl font-bold text-white">{t("educationTitle")}</h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <div className="h-12 w-12 rounded-lg bg-zinc-800/50 flex items-center justify-center shrink-0 border border-zinc-800">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">{t("degree")}</h4>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                <span className="font-medium">{t("university")}</span>
                <span>•</span>
                <span>2011 - 2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
