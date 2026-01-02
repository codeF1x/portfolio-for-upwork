import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SkillsCTA() {
  const t = useTranslations("Skills.CTA");

  return (
    <section className="rounded-3xl bg-zinc-900 border border-zinc-800 p-12 text-center flex flex-col items-center gap-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50 pointer-events-none"></div>
      <h2 className="text-2xl md:text-4xl font-extrabold relative z-10 text-white tracking-tight">
        {t("title")}
      </h2>
      <p className="max-w-lg text-slate-400 relative z-10 text-lg">
        {t("description")}
      </p>
      <Link
        href="/#contact"
        className="relative z-10 h-12 px-10 flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-bold rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
      >
        {t("hireMe")}
      </Link>
    </section>
  );
}
