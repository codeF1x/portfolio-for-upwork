import { Images } from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectGallery({ project }: { project: Project }) {
  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <section className="space-y-6 mt-10">
      <div className="flex items-center gap-3 pb-2 border-b border-border-color">
        <div className="p-2 rounded-lg bg-white/10 text-white">
          <Images className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-white">Visual Gallery</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.gallery.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-surface-card border border-border-color aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all"
          >
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${item.url}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
