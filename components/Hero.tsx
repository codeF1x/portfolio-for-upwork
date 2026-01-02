import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full max-w-[1000px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          {t("available")}
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:leading-[1.1]">
          {t("titlePrefix")} <br />
          <span className="text-gradient-primary">{t("titleSuffix")}</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
          {t("description")}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-base font-bold text-black transition-all hover:-translate-y-1 hover:bg-slate-100 sm:w-auto"
          >
            {t("viewProjects")}
          </Link>
          <Link
            href="/#contact"
            className="flex h-12 w-full items-center justify-center rounded-full border border-border-color bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
          >
            {t("getQuote")}
          </Link>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border-color pt-10 md:grid-cols-4 md:gap-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">100%</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{t("stats.jobSuccess")}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">Top</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{t("stats.ratedPlus")}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">10+</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{t("stats.projects")}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">&lt; 2h</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{t("stats.response")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
