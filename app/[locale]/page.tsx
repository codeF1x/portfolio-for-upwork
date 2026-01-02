import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <ScrollReveal key={`hero-${locale}`} priority>
          <Hero />
        </ScrollReveal>
        <ScrollReveal key={`process-${locale}`} priority>
          <Process />
        </ScrollReveal>
        <ScrollReveal key={`skills-${locale}`}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal key={`portfolio-${locale}`}>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal key={`contact-${locale}`}>
          <Contact />
        </ScrollReveal>
      </div>
      <Footer />
    </main>
  );
}
