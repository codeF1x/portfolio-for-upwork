import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const steps = [
  {
    id: 1,
    key: "discovery",
    icon: MessageSquare,
  },
  {
    id: 2,
    key: "design",
    icon: PenTool,
  },
  {
    id: 3,
    key: "development",
    icon: Code,
  },
  {
    id: 4,
    key: "launch",
    icon: Rocket,
  },
];

export default function Process() {
  const t = useTranslations("Home.Process");

  return (
    <section className="bg-surface-dark py-24" id="process">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">{t("workflow")}</h2>
          <p className="mt-2 text-3xl font-bold text-white md:text-4xl">{t("title")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-2xl border border-border-color bg-surface-card p-6 transition-all hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/10"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-border-color bg-white/5 text-purple-400 group-hover:bg-purple-500/10 group-hover:text-purple-300">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{t(`steps.${step.key}.title`)}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{t(`steps.${step.key}.description`)}</p>
              <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 opacity-50 transition-opacity group-hover:opacity-100">
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
