"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // Replace the locale in the pathname
      // Assuming pathname starts with /en or /zh
      const segments = pathname.split('/');
      segments[1] = nextLocale;
      const newPath = segments.join('/');
      
      router.replace(newPath);
    });
  };

  return (
    <div className="relative flex items-center">
      <Globe className="absolute left-2 h-4 w-4 text-slate-400 pointer-events-none" />
      <select
        defaultValue={locale}
        className="appearance-none bg-transparent border border-white/10 rounded-full py-1.5 pl-8 pr-4 text-sm font-medium text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 hover:bg-white/5 transition-colors cursor-pointer"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="bg-surface-card text-white">
          {t("en")}
        </option>
        <option value="zh" className="bg-surface-card text-white">
          {t("zh")}
        </option>
        <option value="es" className="bg-surface-card text-white">
          {t("es")}
        </option>
        <option value="ja" className="bg-surface-card text-white">
          {t("ja")}
        </option>
      </select>
    </div>
  );
}
