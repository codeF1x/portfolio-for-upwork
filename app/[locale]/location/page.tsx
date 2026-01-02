import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationHero from "@/components/LocationHero";
import LocationStats from "@/components/LocationStats";
import WorkingPreferences from "@/components/WorkingPreferences";
import LocationCTA from "@/components/LocationCTA";

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Location.Hero' });
  return {
    title: `${t('title')} ${t('availability')} | Flynn WU`,
    description: t('description')
  };
}

export default function LocationPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background-dark">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-6xl pt-24">
        <LocationHero />
        <LocationStats />
        <WorkingPreferences />
        <LocationCTA />
      </div>
      <Footer />
    </main>
  );
}
