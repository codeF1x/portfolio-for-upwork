import { Link } from "@/i18n/navigation";
import { ChevronRight, Rocket, Code } from "lucide-react";
import { Project } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ProjectHeader({ project }: { project: Project }) {
  const t = useTranslations("Projects.Header");

  return (
    <div className="flex flex-col gap-6">
      <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
        <Link href="/projects" className="hover:text-white transition-colors">
          {t("portfolio")}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="hover:text-white transition-colors cursor-default">
          {project.category}
        </span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-white">{project.title}</span>
      </nav>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">
              {t("completed")} {project.year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            {project.title}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-transparent hover:opacity-90 text-black font-bold transition-all shadow-sm group"
          >
            <Rocket className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>{t("liveDemo")}</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-white hover:bg-white/10 text-white font-bold transition-all shadow-sm group"
          >
            <Code className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>{t("sourceCode")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
