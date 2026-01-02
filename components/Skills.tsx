import { Blocks, Server, Search, Database, Gauge, GitBranch } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills.Section");

  return (
    <section className="border-t border-border-color bg-background-dark py-24" id="skills">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">{t("subtitle")}</h2>
          <p className="mt-2 text-3xl font-bold text-white md:text-4xl">{t("title")}</p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Frontend */}
          <div className="glass-panel group rounded-2xl p-8 transition-all hover:border-purple-500/30">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition-transform group-hover:scale-110">
              <Blocks className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">{t("frontend.title")}</h3>
            <p className="mb-6 text-sm text-slate-400">
              {t("frontend.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "Next.js"].map((tech) => (
                <div key={tech} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 border border-border-color">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-panel group rounded-2xl p-8 transition-all hover:border-purple-500/30">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400 transition-transform group-hover:scale-110">
              <Server className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">{t("backend.title")}</h3>
            <p className="mb-6 text-sm text-slate-400">
              {t("backend.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Python", "PostgreSQL"].map((tech) => (
                <div key={tech} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 border border-border-color">
                  {tech === "PostgreSQL" && <Database className="h-3 w-3" />}
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Design & SEO */}
          <div className="glass-panel group rounded-2xl p-8 transition-all hover:border-purple-500/30">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-transform group-hover:scale-110">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">{t("design.title")}</h3>
            <p className="mb-6 text-sm text-slate-400">
              {t("design.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 border border-border-color">
                Figma
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 border border-border-color">
                <Gauge className="h-3 w-3" /> Web Vitals
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 border border-border-color">
                <GitBranch className="h-3 w-3" /> Git
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
