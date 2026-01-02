import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsHero from "@/components/SkillsHero";
import Competencies from "@/components/Competencies";
import Toolbox from "@/components/Toolbox";
import Certifications from "@/components/Certifications";
import SkillsCTA from "@/components/SkillsCTA";

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background-dark">
      <Navbar />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-20 pt-24">
        <SkillsHero />
        <div className="w-full h-px bg-zinc-800"></div>
        <Competencies />
        <Toolbox />
        <Certifications />
        <SkillsCTA />
      </div>
      <Footer />
    </main>
  );
}
