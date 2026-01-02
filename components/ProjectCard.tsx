import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  id: number;
  title?: string; // Made optional as it's fetched via i18n
  description?: string; // Made optional as it's fetched via i18n
  tags: string[];
  imageUrl: string;
  link: string;
  year?: string;
  category?: string;
}

export default function ProjectCard({ id, tags, imageUrl, link, year }: ProjectCardProps) {
  const t = useTranslations("Projects.Card");
  const tList = useTranslations("Projects.List");

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border-color bg-surface-card transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/10">
      <div className="flex items-center gap-1.5 border-b border-border-color bg-[#1e1e24] px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
      </div>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={tList(`${id}.title`)}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={`/projects/${id}`}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            {t("viewDetails")} <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{tList(`${id}.title`)}</h3>
          {year && (
            <span className="text-xs font-semibold text-slate-500 border border-border-color rounded px-2 py-0.5">
              {year}
            </span>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-slate-400 line-clamp-2">{tList(`${id}.description`)}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/5 px-2 py-1 text-[10px] font-medium text-purple-300 border border-border-color"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
