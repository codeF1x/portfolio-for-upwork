"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  const t = useTranslations("Projects.Categories");

  return (
    <div className="w-full overflow-x-auto pb-2 hide-scrollbar">
      <div className="flex gap-3 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all",
              activeCategory === category
                ? "bg-white text-black font-bold scale-105"
                : "bg-surface-card border border-border-color text-white font-medium hover:bg-white/10"
            )}
          >
            {t(category)}
          </button>
        ))}
      </div>
    </div>
  );
}
