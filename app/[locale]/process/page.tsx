import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessHero from "@/components/ProcessHero";
import WorkflowSteps from "@/components/WorkflowSteps";
import FAQ from "@/components/FAQ";
import ProcessCTA from "@/components/ProcessCTA";

export default function ProcessPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background-dark">
      <Navbar />
      <div className="flex-1 w-full">
        <ProcessHero />
        <WorkflowSteps />
        <FAQ />
        <ProcessCTA />
      </div>
      <Footer />
    </main>
  );
}
