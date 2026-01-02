import { DollarSign, RefreshCw, MessageCircle, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = {
  q1: DollarSign,
  q2: RefreshCw,
  q3: MessageCircle,
  q4: Calendar,
};

export default function FAQ() {
  const t = useTranslations("Process.FAQ");
  const keys = ["q1", "q2", "q3", "q4"] as const;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-slate-400">{t("subtitle")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {keys.map((key) => {
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="rounded-2xl border border-border-color bg-surface-card p-8 transition-all hover:border-purple-500/50"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-white mb-6 border border-border-color">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t(`${key}.question`)}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{t(`${key}.answer`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
