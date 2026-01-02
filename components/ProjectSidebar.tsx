import { Link } from "@/i18n/navigation";
import { User, Layers, Briefcase, Quote } from "lucide-react";
import { Project } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ProjectSidebar({ project }: { project: Project }) {
  const t = useTranslations("Projects.Sidebar");

  return (
    <div className="space-y-8">
      {/* Contribution */}
      <div className="bg-surface-card rounded-2xl p-6 border border-border-color shadow-sm">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <User className="h-5 w-5 text-white" />
          {t("contribution")}
        </h3>
        <div className="space-y-6 relative">
          <div className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-border-color"></div>
          
          {project.role && (
            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-white bg-surface-card"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t("role")}</p>
              <p className="text-white font-medium">{project.role}</p>
            </div>
          )}

          {project.deliverables && (
            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-white bg-surface-card"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t("deliverables")}</p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-background-dark text-xs font-medium rounded-md text-slate-300 border border-border-color"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.feedback && (
            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-white bg-surface-card"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t("feedback")}</p>
              <div className="relative">
                <Quote className="absolute -left-1 -top-1 text-white/20 h-8 w-8 -z-10 transform scale-x-[-1]" />
                <p className="text-sm italic text-slate-400">"{project.feedback.quote}"</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      {project.techStack && (
        <div className="bg-surface-card rounded-2xl p-6 border border-border-color shadow-sm">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="h-5 w-5 text-white" />
            {t("techStack")}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-background-dark border border-border-color"
              >
                <tech.icon className="h-5 w-5 text-slate-300" />
                <span className="text-sm font-semibold text-slate-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl p-8 text-center text-white shadow-lg">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Briefcase className="h-24 w-24" />
        </div>
        <h3 className="text-xl font-bold mb-2 relative z-10">{t("needDeveloper")}</h3>
        <p className="text-purple-100 text-sm mb-6 relative z-10">
          {t("helpBuild")}
        </p>
        <Link 
          href="/#contact"
          className="block w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-sm relative z-10"
        >
          {t("hireMe")}
        </Link>
      </div>
    </div>
  );
}
