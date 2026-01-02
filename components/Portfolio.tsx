import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("Home.Portfolio");
  // Show only first 3 projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-surface-dark py-24 border-t border-border-color" id="projects">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="w-full text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">{t("section")}</h2>
            <p className="mt-2 text-3xl font-bold text-white md:text-4xl">{t("title")}</p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-sm font-medium text-white transition-colors hover:text-purple-400 md:flex"
          >
            {t("viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm font-bold text-white hover:underline"
          >
            {t("viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
