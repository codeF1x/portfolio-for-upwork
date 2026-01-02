import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectSidebar from "@/components/ProjectSidebar";
import ProjectNavigation from "@/components/ProjectNavigation";
import { projects } from "@/lib/data";

// Correctly type the params for Next.js 15
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  return (
    <main className="min-h-screen flex flex-col bg-background-dark">
      <Navbar />
      <div className="flex-1 flex flex-col items-center w-full pt-24 pb-12 px-4 md:px-8">
        <div className="w-full max-w-6xl flex flex-col gap-10">
          <ProjectHeader project={project} />
          
          {/* Main Image */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-none border border-border-color relative group bg-surface-card">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${project.imageUrl}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 flex flex-col gap-10">
              <ProjectOverview project={project} />
              <ProjectGallery project={project} />
            </div>
            <div className="lg:col-span-4">
              <ProjectSidebar project={project} />
            </div>
          </div>

          <ProjectNavigation prev={prevProject} next={nextProject} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
