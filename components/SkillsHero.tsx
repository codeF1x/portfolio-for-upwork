import { Download, Code, Box, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SkillsHero() {
  const t = useTranslations("Skills.Hero");

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-color text-white text-xs font-bold uppercase tracking-wider w-fit">
          <CheckCircle className="h-4 w-4 text-green-500" />
          {t("available")}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
          {t("titlePrefix")} <span className="text-slate-500">{t("titleSuffix")}</span> {t("titleEnd")}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
          {t("description")}
        </p>
        {/* <div className="flex flex-wrap gap-4 pt-2">
          <button className="h-11 px-6 rounded-full bg-transparent border border-slate-700 hover:border-white text-white font-medium transition-all flex items-center gap-2 group hover:bg-surface-card">
            <Download className="h-5 w-5" />
            Download CV
          </button>
        </div> */}
      </div>
      <div className="relative w-full aspect-video lg:aspect-square lg:max-h-[500px] rounded-2xl overflow-hidden bg-surface-card border border-border-color flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/5"></div>
        <div className="relative z-10 grid grid-cols-2 gap-4 p-6 w-full max-w-md">
          <div className="glass-panel p-5 rounded-2xl shadow-xl flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300">
            <Code className="h-8 w-8 text-white" />
            <div>
              <div className="text-3xl font-bold text-white">9+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{t("yearsExp")}</div>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl shadow-xl flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300 delay-75">
            <Box className="h-8 w-8 text-white" />
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{t("projects")}</div>
            </div>
          </div>
          <div className="glass-panel col-span-2 p-5 rounded-2xl shadow-xl flex items-center gap-5 transition-transform hover:-translate-y-1 duration-300 delay-100">
            <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-black">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{t("jobSuccess")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
