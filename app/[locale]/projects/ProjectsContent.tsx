"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/lib/data";
import { useTranslations } from "next-intl";

// Map translation keys to data values
const categoryMap: Record<string, string> = {
  "all": "All Projects",
  "saas": "SaaS",
  "ecommerce": "E-commerce",
  "webDev": "Web Development",
  "mobileApps": "Mobile Apps",
  "uiux": "UI/UX Design"
};

const categoryKeys = Object.keys(categoryMap);

export default function ProjectsContent() {
  const t = useTranslations("Projects.Page");
  const [activeCategoryKey, setActiveCategoryKey] = useState("all");

  const filteredProjects = activeCategoryKey === "all"
    ? projects
    : projects.filter((project) => project.category === categoryMap[activeCategoryKey]);

  return (
    <main className="min-h-screen flex flex-col bg-background-dark">
      <Navbar />
      <div className="flex-1 flex flex-col items-center w-full pt-24">
        <div className="w-full max-w-7xl px-4 md:px-8 py-8 md:py-12 flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              {t("title")}
            </h1>
            <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
              {t("description")}
            </p>
          </div>

          {/* Filters */}
          <ProjectFilter
            categories={categoryKeys}
            activeCategory={activeCategoryKey}
            onCategoryChange={setActiveCategoryKey}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center pt-8 pb-12">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white hover:bg-slate-200 transition-colors text-black text-base font-bold">
              <span className="truncate">{t("loadMore")}</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
