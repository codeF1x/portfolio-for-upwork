import { Link } from "@/i18n/navigation";
import { contactConfig } from "@/lib/config";
import { useTranslations } from "next-intl";

import SystemStatus from "./SystemStatus";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border-color bg-background-dark py-8 text-center text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>{t("rights")}</p>
          <div className="flex gap-4">
            <Link href={contactConfig.socials.linkedin} target="_blank" className="transition-colors hover:text-white">
              LinkedIn
            </Link>
            <Link href={contactConfig.socials.github} target="_blank" className="transition-colors hover:text-white">
              GitHub
            </Link>
            <Link href={contactConfig.socials.twitter} target="_blank" className="transition-colors hover:text-white">
              Twitter
            </Link>
          </div>
        </div>
        <SystemStatus />
      </div>
    </footer>
  );
}
