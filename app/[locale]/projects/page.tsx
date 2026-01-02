import { getTranslations } from 'next-intl/server';
import ProjectsContent from './ProjectsContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Projects.Page' });
  return {
    title: `${t('title')} | Flynn WU`,
    description: t('description')
  };
}

export default function ProjectsPage() {
  return <ProjectsContent />;
}
