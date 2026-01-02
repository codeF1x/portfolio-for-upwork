import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ProjectNavigation({ prev, next }: { prev?: Project; next?: Project }) {
  const t = useTranslations("Projects.Navigation");

  return (
    <div className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
      {prev ? (
        <Link
          href={`/projects/${prev.id}`}
          className="group flex items-center gap-4 text-slate-500 hover:text-white transition-colors"
        >
          <div className="size-12 rounded-full border border-transparent flex items-center justify-center bg-white text-black group-hover:scale-110 transition-transform">
            <ArrowLeft className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{t("prevProject")}</div>
            <div className="font-bold text-lg text-white">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      <Link
        href="/projects"
        className="hidden md:inline-flex px-6 py-3 rounded-xl border border-transparent bg-white hover:bg-gray-200 text-black font-semibold transition-all"
      >
        {t("viewAll")}
      </Link>

      {next ? (
        <Link
          href={`/projects/${next.id}`}
          className="group flex items-center gap-4 text-slate-500 hover:text-white transition-colors text-right"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{t("nextProject")}</div>
            <div className="font-bold text-lg text-white">{next.title}</div>
          </div>
          <div className="size-12 rounded-full border border-transparent flex items-center justify-center bg-white text-black group-hover:scale-110 transition-transform">
            <ArrowRight className="h-5 w-5" />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
