import { Link } from "@/i18n/navigation";
import { Calendar, Mail } from "lucide-react";
import { contactConfig } from "@/lib/config";
import { useTranslations } from "next-intl";

export default function LocationCTA() {
  const t = useTranslations("Location.CTA");

  return (
    <div className="relative overflow-hidden rounded-3xl bg-surface-card text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-none border border-white/10 mt-8">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 text-center md:text-left max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight mb-2">{t("title")}</h2>
        <p className="text-slate-400 text-lg">
          {t("description")}
        </p>
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <Link
          href="/#contact"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-black px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          <Calendar className="h-5 w-5" />
          {t("bookCall")}
        </Link>
        <Link
          href={`mailto:${contactConfig.email}`}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-slate-200 hover:text-black text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors"
        >
          <Mail className="h-5 w-5" />
          {t("sendEmail")}
        </Link>
      </div>
    </div>
  );
}
