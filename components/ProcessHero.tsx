import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ProcessHero() {
  const t = useTranslations("Process.Hero");

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark"></div>
        <div
          className="h-full w-full bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'url("/images/process-hero-bg.jpg")',
          }}
        ></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-bold text-purple-500 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          {t("available")}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
          {t("title")}
          <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            {t("subtitle")}
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="h-12 px-8 flex items-center justify-center rounded-lg bg-white text-black font-bold text-base transition-all hover:opacity-90 hover:shadow-glow hover:-translate-y-0.5"
          >
            {t("startProject")}
          </Link>
          <Link
            href="/projects"
            className="h-12 px-8 flex items-center justify-center rounded-lg bg-transparent border border-white/20 text-white font-bold text-base transition-all hover:bg-white/10"
          >
            {t("viewPortfolio")}
          </Link>
        </div>
      </div>
    </section>
  );
}
