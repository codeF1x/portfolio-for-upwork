import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ProcessCTA() {
  const t = useTranslations("Process.CTA");

  return (
    <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-surface-card px-6 py-16 text-center shadow-2xl border border-border-color sm:px-16">
          <div className="absolute -left-20 -top-20 size-80 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 size-80 rounded-full bg-white/5 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-5xl mb-6">
              {t("title")}
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400 font-medium">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-black transition-all hover:bg-gray-200 hover:scale-105 hover:shadow-glow"
              >
                {t("hireMe")}
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-xl bg-transparent border border-white/20 px-8 text-base font-bold text-white transition-all hover:bg-white/10 hover:scale-105"
              >
                {t("bookCall")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
