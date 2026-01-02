import { Terminal, Cloud, Box, Trello, Globe, Gauge } from "lucide-react";
import { useTranslations } from "next-intl";

const tools = [
  { name: "Git", icon: Terminal },
  { name: "AWS/aliyun", icon: Cloud },
  { name: "Docker", icon: Box },
  { name: "Jira", icon: Trello },
  { name: "Postman", icon: Globe },
  { name: "Vercel", icon: Gauge },
];

export default function Toolbox() {
  const t = useTranslations("Skills.Toolbox");

  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <div className="h-6 w-1 bg-white rounded-full"></div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{t("title")}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-surface-card border border-border-color hover:border-slate-500 transition-all hover:-translate-y-1 group cursor-default"
          >
            <tool.icon className="h-10 w-10 text-slate-300 group-hover:text-white transition-colors" />
            <span className="font-medium text-sm text-slate-300">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
