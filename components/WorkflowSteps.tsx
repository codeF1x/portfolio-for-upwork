import { MessageSquare, PenTool, Code, ClipboardCheck, Rocket, CheckCircle, Image, RefreshCw, Link as LinkIcon, FolderArchive } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = {
  step1: MessageSquare,
  step2: PenTool,
  step3: Code,
  step4: ClipboardCheck,
  step5: Rocket,
};

const deliverableIcons = {
  step1: CheckCircle,
  step2: Image,
  step3: RefreshCw,
  step4: LinkIcon,
  step5: FolderArchive,
};

export default function WorkflowSteps() {
  const t = useTranslations("Process.Steps");
  const keys = ["step1", "step2", "step3", "step4", "step5"] as const;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-slate-400">{t("subtitle")}</p>
        </div>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-border-color before:to-transparent">
          {keys.map((key, index) => {
            const Icon = icons[key];
            const DeliverableIcon = deliverableIcons[key];
            const id = index + 1;

            return (
              <div
                key={key}
                className={`relative flex items-center justify-between md:justify-normal group ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 flex h-10 w-10 shrink-0 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background-dark bg-white text-black shadow md:order-1">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="ml-16 w-full md:w-[calc(50%-2.5rem)] md:ml-0 md:mr-0 p-6 rounded-2xl bg-surface-card border border-border-color shadow-sm hover:border-purple-500/50 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/10 px-2.5 py-0.5 text-xs font-bold text-white">
                      Phase 0{id}
                    </span>
                    <span className="text-xs font-medium text-slate-400">Step {id} of 5</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{t(`${key}.title`)}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{t(`${key}.description`)}</p>
                  <div className="flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white border border-border-color">
                    <DeliverableIcon className="h-4 w-4 text-purple-500" />
                    {t(`${key}.deliverable`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
