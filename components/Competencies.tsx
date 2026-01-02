import { Laptop, Server, PenTool } from "lucide-react";
import { useTranslations } from "next-intl";

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-slate-300">{name}</span>
    </div>
    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-white rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default function Competencies() {
  const t = useTranslations("Skills.Competencies");

  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <div className="h-6 w-1 bg-white rounded-full"></div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{t("title")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Frontend */}
        <div className="group relative flex flex-col gap-6 rounded-2xl bg-surface-card p-6 border border-border-color shadow-sm hover:border-slate-600 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
              <Laptop className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t("frontend")}</h3>
          </div>
          <div className="space-y-6">
            <SkillBar name="React / Next.js" percentage={95} />
            <SkillBar name="TypeScript" percentage={90} />
            <SkillBar name="Tailwind CSS" percentage={98} />
            <div className="flex flex-wrap gap-2 pt-2">
              {["Redux", "Vue.js", "HTML5"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="group relative flex flex-col gap-6 rounded-2xl bg-surface-card p-6 border border-border-color shadow-sm hover:border-slate-600 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t("backend")}</h3>
          </div>
          <div className="space-y-6">
            <SkillBar name="Node.js / Express" percentage={90} />
            <SkillBar name="PostgreSQL" percentage={85} />
            <SkillBar name="Python / Django" percentage={70} />
            <div className="flex flex-wrap gap-2 pt-2">
              {["GraphQL", "MongoDB", "REST"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* UI/UX */}
        <div className="group relative flex flex-col gap-6 rounded-2xl bg-surface-card p-6 border border-border-color shadow-sm hover:border-slate-600 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
              <PenTool className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t("uiux")}</h3>
          </div>
          <div className="space-y-6">
            <SkillBar name="Figma" percentage={95} />
            <SkillBar name="Design Systems" percentage={85} />
            <SkillBar name="Adobe CS" percentage={80} />
            <div className="flex flex-wrap gap-2 pt-2">
              {["Prototyping", "Wireframing"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
