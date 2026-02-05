import { notFound } from 'next/navigation';
import { TemplateEngine } from '@/components/engine';
import { getTemplateById } from '@/config/templates';

interface TemplatePageProps {
  params: Promise<{ id: string }>;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params;
  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  return <TemplateEngine template={template} />;
}

export async function generateStaticParams() {
  const { templates } = await import('@/config/templates');
  return templates.map((t) => ({ id: t.id }));
}
