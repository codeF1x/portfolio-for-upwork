import { FileText, CheckCircle, Lightbulb, BrainCircuit } from "lucide-react";
import { Project } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ProjectOverview({ project }: { project: Project }) {
  const t = useTranslations("Projects.Overview");

  return (
    <div className="flex flex-col gap-10">
      {/* Overview */}
      {project.overview && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-border-color">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("overview")}</h3>
          </div>
          <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
            <p>{project.overview}</p>
          </div>
        </section>
      )}

      {/* Objectives */}
      {project.objectives && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-border-color">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("objectives")}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.objectives.map((obj, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-surface-card border border-border-color shadow-sm ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <h4 className="font-bold text-white mb-2">{obj.title}</h4>
                <p className="text-sm text-slate-400">{obj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-border-color">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("challenges")}</h3>
          </div>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-surface-card border border-border-color"
              >
                <div className="shrink-0">
                  <div className="size-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <challenge.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{challenge.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{challenge.description}</p>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-background-dark border border-border-color">
                    <Lightbulb className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">
                      {t("solution")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
